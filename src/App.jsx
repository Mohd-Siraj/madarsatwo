"use client";

import { useState } from "react";
import Tabs from "./components/Tabs";
import TabContent from "./components/TabContent";
import { tabsData } from "./data";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("parents");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto py-8">
        <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
        <TabContent data={tabsData[activeTab]} />
      </div>
    </div>
  );
}

export default App;
