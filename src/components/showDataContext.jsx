import React, { useState, createContext } from "react";

export const ShowDataContext = createContext();

export function ShowDataProvider(props) {
  const [showData, setShowData] = useState(false);

  return (
    <ShowDataContext.Provider value={[showData, setShowData]}>
      {props.children}
    </ShowDataContext.Provider>
  );
}
