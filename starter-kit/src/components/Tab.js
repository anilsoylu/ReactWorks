import { useState, useEffect } from "react";

function Tab({ children, activeTab, setActiveTab, onChange }) {
  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  useEffect(() => {
    onChange(active);
  }, [active]);

  return (
    <div>
      <nav>
        {children.map((tab, i) => (
          <button
            onClick={() => setActive(i)}
            className={active === i ? "bg-green-300" : "bg-gray-100"}
            key={i}
          >
            {tab.props.title}
          </button>
        ))}
      </nav>
      {children[active]}
    </div>
  );
}

Tab.Panel = function ({ children }) {
  return <div>{children}</div>;
};

export default Tab;
