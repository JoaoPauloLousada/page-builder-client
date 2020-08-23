import IBComponentObject from "../../components/bootstrap/interfaces/IBComponentObject";
import BComponentType from "../../components/bootstrap/enums/BComponentType.enum";

const hasChildren = (obj: IBComponentObject): boolean =>
  !!obj.children && obj.children.length > 0;

export const getComponent = (
  tree: IBComponentObject[],
  id: string
): IBComponentObject =>
  tree.find((comp) => comp.id === id) || {
    id: "",
    name: "",
    type: BComponentType.container,
  };

export const getFirstLevelNodes = (tree: IBComponentObject[]) =>
  tree.filter((node) => node.parentId === "CANVAS");

export const remove = (
  tree: IBComponentObject[],
  componentId: string
): IBComponentObject[] => {
  const component = tree.find((comp) => comp.id === componentId);
  if (!component) return tree;

  if (hasChildren(component)) return tree;

  const componentIndex = tree.indexOf(component);
  if (componentIndex !== -1) tree.splice(componentIndex, 1);

  if (component.parentId === "CANVAS") return tree;

  const parentComponent = getComponent(tree, component.parentId || "");
  if (parentComponent && hasChildren(parentComponent)) {
    const indexOfChildren = parentComponent.children?.indexOf(componentId);

    if (indexOfChildren !== -1) {
      //@ts-ignore
      parentComponent.children?.splice(indexOfChildren, 1);
    }
  }

  return tree;
};

export const add = (
  tree: IBComponentObject[],
  component: IBComponentObject
): IBComponentObject[] => {
  if (component.parentId === "CANVAS") {
    return [...tree, component];
  }

  // @ts-ignore
  const parentComponent = getComponent(tree, component.parentId);

  // @ts-ignore
  if (hasChildren(parentComponent)) {
    // @ts-ignore
    parentComponent.children.push(component.id);
  } else {
    // @ts-ignore
    parentComponent.children = [component.id];
  }

  return [...tree, component];
};

export const getStyleFromProperties = (properties: any) => {
  if (!properties) return {};
  const keys = Object.keys(properties);
  const styles: any = {};
  keys.forEach((key) => {
    if (properties[key].value && properties[key].value !== "") {
      styles[key] = properties[key].value;
    }
  });
  console.log("getStyleFromProperties", styles);
  return styles;
};
