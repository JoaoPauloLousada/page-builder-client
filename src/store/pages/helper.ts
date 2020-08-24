import { generateID } from "./../../utils/id";
import { IPage } from "./../../app/interfaces";
import { filter } from "ramda";

const idIsDifferent = (id: string) => (page: IPage) => id !== page.id;

export const removePage = (pages: Array<IPage>, id: string): Array<IPage> =>
  filter(idIsDifferent(id), pages);

export const createPage = (name: string): IPage => ({
  name,
  id: generateID(),
});
