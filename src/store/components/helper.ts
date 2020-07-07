import IBComponentObject from "../../components/bootstrap/interfaces/IBComponentObject";

const hasChildren = (obj: IBComponentObject): boolean =>
  !!obj.children && obj.children.length > 0;

export const remove = (
  tree: IBComponentObject[],
  componentId: string
): IBComponentObject[] => {
  for (const node of tree) {
    if (node.id === componentId) {
      tree.splice(tree.indexOf(node), 1);
      return tree;
    }

    if (hasChildren(node)) {
      remove(node.children || [], componentId);
    }
  }

  return tree;
};
