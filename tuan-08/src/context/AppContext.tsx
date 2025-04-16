import React, { useState } from "react";

interface Context {
  overviewData: Overview[];
  setOverviewData: React.Dispatch<React.SetStateAction<Overview[]>>;
}

export const AppContext = React.createContext<Context>({
  overviewData: [],
  setOverviewData: () => {},
});

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({ children }: Props) => {
  const [overviewData, setOverviewData] = useState<Overview[]>([]);

  return (
    <AppContext.Provider
      value={{
        overviewData,
        setOverviewData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
