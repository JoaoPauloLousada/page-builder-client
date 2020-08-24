import React, { ReactNode, useState } from "react";
import TreeView from "./TreeView";
import PropertyView from "./PropertyView";
import PagesView from "./PagesView";

interface Props {
  canvas?: ReactNode;
  componentsArea?: ReactNode;
}

enum IActiveTab {
  COMPONENTS = "COMPONENTS",
  TREE = "TREE",
  PROPERTIES = "PROPERTIES",
  PAGES = "PAGES",
}

const Area = React.memo(({ areaType, children, activeTab }: any) => (
  <div className={`${activeTab !== areaType ? " d-none" : ""}`}>{children}</div>
));

type AreasProps = {
  activeTab: IActiveTab;
  componentsArea: any;
};
const Areas = React.memo(({ activeTab, componentsArea }: AreasProps) => (
  <>
    <Area areaType={IActiveTab.COMPONENTS} activeTab={activeTab}>
      {componentsArea}
    </Area>
    <Area areaType={IActiveTab.TREE} activeTab={activeTab}>
      <TreeView />
    </Area>
    <Area areaType={IActiveTab.PROPERTIES} activeTab={activeTab}>
      <PropertyView />
    </Area>
    <Area areaType={IActiveTab.PAGES} activeTab={activeTab}>
      <PagesView />
    </Area>
  </>
));
const TabsArea = React.memo(({ children }: any) => (
  <div className=" col-4 tabsArea">{children}</div>
));
const Tab = React.memo(
  ({ tabType, children, activeTab, handleTabClick }: any) => (
    <li className="nav-item">
      <a
        className={`nav-link text-dark${
          activeTab === tabType ? " active" : ""
        }`}
        href="/"
        onClick={handleTabClick}
        data-value={tabType}
      >
        {children}
      </a>
    </li>
  )
);
const Tabs = React.memo(({ activeTab, handleTabClick }: any) => (
  <div className="tabs">
    <ul className="nav nav-tabs">
      <Tab
        tabType={IActiveTab.COMPONENTS}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      >
        {IActiveTab.COMPONENTS}
      </Tab>
      <Tab
        tabType={IActiveTab.TREE}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      >
        {IActiveTab.TREE}
      </Tab>
      <Tab
        tabType={IActiveTab.PROPERTIES}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      >
        {IActiveTab.PROPERTIES}
      </Tab>
      <Tab
        tabType={IActiveTab.PAGES}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      >
        {IActiveTab.PAGES}
      </Tab>
    </ul>
  </div>
));
const Wrapper = React.memo(({ children }: any) => (
  <div className="container-fluid h-100">
    <div className="row h-100">{children}</div>
  </div>
));
const CanvasArea = React.memo(({ canvas }: any) => (
  <div className="col-8 p-0">{canvas}</div>
));

function Board({ canvas, componentsArea }: Props) {
  const [activeTab, setActiveTab] = useState(IActiveTab.COMPONENTS);

  const handleTabClick = (e: any) => {
    e.preventDefault();
    const value = e.target.getAttribute("data-value");
    setActiveTab(value);
  };

  return (
    <Wrapper>
      <CanvasArea canvas={canvas} />
      <TabsArea>
        <>
          <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
          <Areas activeTab={activeTab} componentsArea={componentsArea} />
        </>
      </TabsArea>
    </Wrapper>
  );
}

export default React.memo(Board);
