import { FC } from "react";
import { Tab, TabList, TabPanel, Tabs as ReactTabs } from "react-tabs";
import { ITabsProps } from "../types/tabs.interface";
import styles from "./styles.module.sass";

const Tabs: FC<ITabsProps> = ({ tabs }) => {
  return (
    <ReactTabs selectedTabClassName={styles.selected} className={styles.tabs}>
      <TabList className={styles.tabList}>
        {tabs.map((tab) => (
          <>
            {tab.condition ? (
              <Tab key={tab.title} className={styles.tabTitle}>
                {tab.title}
              </Tab>
            ) : null}
          </>
        ))}
      </TabList>
      {tabs.map((tab) => (
        <>
          {tab.condition ? (
            <TabPanel key={tab.title}>{tab.content}</TabPanel>
          ) : null}
        </>
      ))}
    </ReactTabs>
  );
};

export default Tabs;
