/* eslint-disable no-console */
const readline = require("readline");
const fs = require("fs");
const last = require("lodash/last");

const rl = readline.createInterface({
  input: fs.createReadStream("cleaned.txt"),
  crlfDelay: Infinity
});

const minDepth = 3;

const ARTICLE_MAP = {
  m: "der",
  f: "die",
  n: "das"
};

class TrieNode {
  constructor(depth) {
    this.children = {};
    this.depth = depth;
    this.endOfWord = false;
  }

  add(word, article) {
    if (!word.length) {
      this.endOfWord = true;
      this.article = ARTICLE_MAP[article];
      if (this.depth > minDepth) {
        this.children = {};
      }
      return;
    }
    if (this.endOfWord && this.depth > minDepth) {
      return;
    }
    const letter = last(word);
    if (!this.children[letter]) {
      this.children[letter] = new TrieNode(this.depth + 1);
    }
    this.children[letter].add(word.substring(0, word.length - 1), article);
  }

  dfs() {
    let list = [];
    Object.entries(this.children).forEach(([letter, child]) => {
      list = list.concat(
        child
          .dfs()
          .map(({ word, ...rest }) => ({ word: word + letter, ...rest }))
      );
      if (child.endOfWord) {
        list.push({ word: letter, article: child.article });
      }
    });
    return list;
  }
}

const root = new TrieNode(0);

var validWord = /^[A-Z]*$/i;

rl.on("line", line => {
  const [word, article] = line.split(" ");
  if (word.match(validWord)) {
    root.add(word.toLowerCase(), article[1]);
  }
});

const comparator = ({ word: a }, { word: b }) => a.localeCompare(b);

rl.on("close", () => {
  const wordlist = root
    .dfs()
    .sort(comparator)
    .map(({ word, ...rest }) => ({
      word: word[0].toUpperCase() + word.substring(1),
      ...rest
    }));
  const content = JSON.stringify({ version: "1.1", data: wordlist }, null, 2);
  fs.writeFile("words.json", content, function(err) {
    if (err) throw err;
    console.log("Replaced!");
  });
});
