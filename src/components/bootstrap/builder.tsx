import React from 'react'
import BComponents from "."
import IBComponentObject from "./interfaces/IBComponentObject"

export const createComponent = (comp: IBComponentObject) => {
  const TagName = BComponents[comp.type]
  return <TagName key={comp.id}>{comp.name}</TagName>;
}
