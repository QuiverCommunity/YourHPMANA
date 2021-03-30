import React from "react"

export interface Page {
  key: string,
  name: string,
  path: string,
  pathIsExternal?: boolean,
  component: React.ComponentType,
}