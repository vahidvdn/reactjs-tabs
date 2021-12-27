import React, { memo, useState } from "react";
import "./Tab.css";

function Tabs(props) {
  const { children, backgroundColor, borderColor } = props;
  const [ tabs, setTabs ] = useState(children);

  let activeIndex = tabs.findIndex(tab => tab.props.active) || 0;
  activeIndex = (activeIndex < 0) ? 0 : activeIndex;

  const [ currentTab, setCurrentTab ] = useState(activeIndex);

  return (
    <div style={{padding:"5px"}}>
      {tabs && tabs.map((tab, tabIndex) => 
        <span
          className="tabs"
          style={
            {
              backgroundColor: currentTab==tabIndex && backgroundColor,
              borderBottom: currentTab==tabIndex && `2px solid ${borderColor}`
            }
          }
          onClick={() => setCurrentTab(tabIndex)}
          key={tabIndex}
          >
            {tab.props.title}
        </span>
      )}
      <p>{tabs[currentTab].props.children}</p>
    </div>
  )
}
export default memo(Tabs);