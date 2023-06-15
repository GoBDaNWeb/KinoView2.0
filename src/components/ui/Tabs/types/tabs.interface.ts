import { ReactNode } from "react";

interface Tabs {
  title: string;
  content: JSX.Element;
  condition: string | boolean | undefined | number;
}

export interface ITabsProps {
  tabs: Tabs[];
}
