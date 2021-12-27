import React, { memo } from "react";

function Tab(props) {
  const {children, title} = props;
  return (
    <>{children}</>
  )
}
  
export default memo(Tab);