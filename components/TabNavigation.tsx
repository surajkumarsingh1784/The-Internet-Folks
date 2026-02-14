"use client";

import React from "react";

interface TabNavigationProps {
  activeTab: "activity" | "location";
  onTabChange: (tab: "activity" | "location") => void;
  canNavigateToLocation: boolean;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
  canNavigateToLocation,
}) => {
  const tabs = [
    {
      id: "activity" as const,
      label: "Activity Details",
      icon: "📋",
    },
    {
      id: "location" as const,
      label: "Location Details",
      icon: "📍",
    },
  ];

  const handleTabClick = (tabId: "activity" | "location") => {
    // Only allow navigation to location if activity is completed
    if (tabId === "location" && !canNavigateToLocation) {
      return;
    }
    onTabChange(tabId);
  };

  return (
    <div className="border-b border-gray-200">
      <div className="flex">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isDisabled = tab.id === "location" && !canNavigateToLocation;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              disabled={isDisabled}
              className={`
                flex items-center gap-2 px-6 py-4 font-medium border-b-2 transition-all
                ${
                  isActive
                    ? "border-primary text-primary bg-blue-50"
                    : isDisabled
                    ? "border-transparent text-gray-400 cursor-not-allowed"
                    : "border-transparent text-gray-600 hover:text-primary hover:bg-gray-50"
                }
              `}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabNavigation;
