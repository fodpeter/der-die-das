import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as matchers from "jest-immutable-matchers";

enzyme.configure({ adapter: new Adapter() });
jest.addMatchers(matchers);
