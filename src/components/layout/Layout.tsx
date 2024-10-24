import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <main
        className={`transition-all duration-300 ${
          isExpanded ? "ml-64" : "ml-16"
        }`}
      >
        <Navbar isExpanded={isExpanded} />
        <div className="p-4 pt-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
