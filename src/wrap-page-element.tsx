import React from "react";
import type { GatsbyBrowser } from "gatsby";
import AppLayout from "./layouts/AppLayout";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => <AppLayout>{element}</AppLayout>;
