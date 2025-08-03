"use client";

const Tabs = ({ activeTab, onTabChange }) => {
  const tabs = ["parents", "kids", "students", "professionals", "tutors"];

  return (
    <div className="w-full border-b border-gray-200 mb-8">
      <nav className="flex justify-center space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`py-1 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
              activeTab === tab
                ? "border-purple-500 text-purple-600 bg-purple-100"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;

