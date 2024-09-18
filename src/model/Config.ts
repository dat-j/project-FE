import { ReactNode } from "react";

export type Values = {
  label: string | ReactNode;
  value: string | number | boolean | null;
  values?: any;
  type?: any;
  disable?: any;
  templateId?: number;
};

export type Config = {
  VERSION: string;
  masters: { [KEY in string]: Values[] };
};
