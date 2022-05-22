import { atom } from "recoil";
// import { articles } from "src/json/data";

const selectedMenu = atom({
  key: "selectedMenu",
  default: "news",
});

const articlesListState = atom({
  key: "articlesListState",
  default: [],
});

const textState = atom({
  key: "textState",
  default: "",
});

export { selectedMenu, articlesListState, textState };
