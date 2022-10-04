import React, { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXElement = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    to: "/lazyload",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "LazyLayout",
  },
  {
    to: "/no-lazy",
    path: "/no-lazy",
    Component: NoLazy,
    name: "NoLazy",
  },
];
