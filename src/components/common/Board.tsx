import React, { ReactNode, useState } from "react";
import TreeView from "./TreeView";
import PropertyView from "./PropertyView";

interface Props {
  canvas?: ReactNode;
  componentsArea?: ReactNode;
}

enum IActiveTab {
  COMPONENTS = "COMPONENTS",
  TREE = "TREE",
  PROPERTIES = "PROPERTIES",
}

export default function Board({ canvas, componentsArea }: Props) {
  const [activeTab, setActiveTab] = useState(IActiveTab.COMPONENTS);

  const handleTabClick = (e: any) => {
    e.preventDefault();
    const value = e.target.getAttribute("data-value");
    setActiveTab(value);
  };

  const Tab = ({ tabType, children }: any) => (
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
  );

  const Tabs = () => (
    <div className="tabs">
      <ul className="nav nav-tabs">
        <Tab tabType={IActiveTab.COMPONENTS}>{IActiveTab.COMPONENTS}</Tab>
        <Tab tabType={IActiveTab.TREE}>{IActiveTab.TREE}</Tab>
        <Tab tabType={IActiveTab.PROPERTIES}>{IActiveTab.PROPERTIES}</Tab>
      </ul>
    </div>
  );

  const Area = ({ areaType, children }: any) => (
    <div className={`${activeTab !== areaType ? " d-none" : ""}`}>
      {children}
    </div>
  );

  const Areas = () => (
    <>
      <Area areaType={IActiveTab.COMPONENTS}>{componentsArea}</Area>
      <Area areaType={IActiveTab.TREE}>
        <TreeView />
      </Area>
      <Area areaType={IActiveTab.PROPERTIES}>
        <PropertyView />
      </Area>
    </>
  );

  const CanvasArea = () => <div className="col-8 p-0">{canvas}</div>;

  const TabsArea = () => (
    <div className=" col-4 tabsArea">
      <Tabs />
      <Areas />
    </div>
  );

  const Wrapper = ({ children }: any) => (
    <div className="container-fluid h-100">
      <div className="row h-100">{children}</div>
    </div>
  );

  return (
    <Wrapper>
      <CanvasArea />
      <TabsArea />
    </Wrapper>
  );
}
