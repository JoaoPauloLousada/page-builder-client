import React, { ReactNode, useState } from "react";

interface Props {
  canvas?: ReactNode;
  componentsArea?: ReactNode;
}

enum IActiveTab {
  COMPONENTS = "COMPONENTS",
  TREE = "TREE",
}

export default function Board({ canvas, componentsArea }: Props) {
  const [activeTab, setActiveTab] = useState(IActiveTab.COMPONENTS);

  const handleTabClick = (e: any) => {
    e.preventDefault();
    const value = e.target.getAttribute("data-value");
    setActiveTab(value);
  };

  const Tabs = () => (
    <div className="tabs">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link${
              activeTab === IActiveTab.COMPONENTS ? " active" : ""
            }`}
            href="/"
            onClick={handleTabClick}
            data-value={IActiveTab.COMPONENTS}
          >
            COMPONENTS
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link${
              activeTab === IActiveTab.TREE ? " active" : ""
            }`}
            href="/"
            onClick={handleTabClick}
            data-value={IActiveTab.TREE}
          >
            TREE
          </a>
        </li>
      </ul>
    </div>
  );

  const Areas = () => (
    <>
      <div
        className={`${activeTab !== IActiveTab.COMPONENTS ? " d-none" : ""}`}
      >
        {componentsArea}
      </div>
      <div className={`w-100${activeTab !== IActiveTab.TREE ? " d-none" : ""}`}>
        TREE AREA
      </div>
    </>
  );

  const CanvasArea = () => <div className="col-8">{canvas}</div>;

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
