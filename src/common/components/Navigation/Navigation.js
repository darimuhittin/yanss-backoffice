import React from "react";
import Header from "common/components/Header";
import MobileHeader from "common/components/MobileHeader";

import useWindowSize from "hooks/useWindowSize";
const Navigation = () => {
  const { width } = useWindowSize();
  return width > 768 ? <Header /> : <MobileHeader />;
};

export default Navigation;
