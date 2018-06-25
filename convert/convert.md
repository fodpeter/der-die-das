Idea for wiktionary data source: https://github.com/AAbouZaid/german-nouns-gender-analyzer

### Wiktionary.org version (About 50,000 words):

I donwloaded this data set from the following URL:<br>
http://dumps.wikimedia.org/dewiktionary/latest/dewiktionary-latest-pages-meta-current.xml.bz2

Then extracted single nouns only using next combination (this one-liner):

```shell
  xbuffer=$(awk "END {print NR}" dewiktionary-latest-pages-meta-current.xml); \
  pcregrep --buffer-size ${xbuffer} -M '.*?\<text xml\:space\=\"preserve\"\>\=\= .*? \(\{\{Sprache\|Deutsch\}\}\) \=\=.*?\n.*?\=\=\= \{\{Wortart\|Substantiv\|Deutsch\}\}\, \{\{.\}\} \=\=\=.*?' dewiktionary-latest-pages-meta-current.xml | \
  awk '{noun=$3; getline; gender=gensub(/.*?\{(\{.\})\}.*?/,"\\1",$3); print noun, gender}' | \
  sort | uniq > wiktionary_nouns_with_gender.txt
```

**Final result example:**

> Apfel {m}
> Heimat {f}
> Mann {m}

### Filtering

I filtered the data with a trie to remove duplicate endings.

```shell
  node convert.js
```

It creates the `words.json` that can be copied to the `public` folder.
