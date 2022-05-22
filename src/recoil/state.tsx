import { selector } from "recoil";
import { selectedMenu, articlesListState, textState } from "./atom";
import { IArticleState } from "./interfaces";

const filterListState = selector({
  key: "filterListState",
  get: ({ get }) => {
    const article = get(articlesListState);
    const selected = get(selectedMenu);

    return article.filter(
      (item: IArticleState) => item.categories === selected
    );
  },
});

const searchArticle = selector({
  key: "searchArticle",
  get: ({ get }) => {
    const article = get(articlesListState);
    const searchText_ = get(textState);

    return article.filter(
      (item: IArticleState) =>
        item.title.includes(searchText_) ||
        item.description.includes(searchText_)
    );
  },
});

export { filterListState, searchArticle };
