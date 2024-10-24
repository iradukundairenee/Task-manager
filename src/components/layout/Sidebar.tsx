import React from "react";
import {
  Home,
  Calendar,
  Settings,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  FileText,
  Share2,
  User,
  Mail,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "./logo.png";
import { RxEnvelopeClosed } from "react-icons/rx";

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

interface Profile {
  id: number;
  name: string;
  status?: "online" | "offline";
  bgColor: string;
}

const Sidebar = ({ isExpanded, setIsExpanded }: SidebarProps) => {
  const mainNavItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Mail, label: "Messages", path: "/messages" },
    { icon: FileText, label: "Tasks", path: "/tasks" },
    { icon: Share2, label: "Share", path: "/share" },
  ];

  const profiles: Profile[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      status: "online",
      bgColor: "bg-purple-500",
    },
    {
      id: 2,
      name: "Michael Chen",
      bgColor: "bg-pink-500",
    },
    {
      id: 3,
      name: "David Smith",
      bgColor: "bg-blue-500",
    },
  ];

  const bottomNavItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };
  return (
    <aside
      className={`transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16"
      } h-screen bg-white dark:bg-gray-800 fixed left-0 top-0 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-20 flex flex-col`}
    >
      <div className="p-4 flex-1">
        <div className="flex items-center justify-between mb-6">
          <div
            className={`flex items-center ${
              !isExpanded ? "justify-center" : ""
            }`}
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">T</span>
            </div>
            {isExpanded && (
              <span className="ml-2 font-semibold text-gray-800 dark:text-white">
                TaskFlow
              </span>
            )}
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              !isExpanded ? "absolute right-2" : ""
            }`}
          >
            {isExpanded ? (
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-2 mb-6">
          {mainNavItems.map((item: any) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center ${
                  !isExpanded ? "justify-center" : ""
                } p-2 rounded-lg transition-colors
                 ${
                   isActive
                     ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300"
                     : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                 }`
              }
            >
              <item.icon className="w-5 h-5 min-w-[20px]" />
              {isExpanded && <span className="ml-2">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Profiles Section */}
        {isExpanded && (
          <h3 className="text-sm font-medium text-gray-500 mb-3">
            Team Members
          </h3>
        )}
        <div className="space-y-2 mb-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              <div className="relative">
                <div
                  className={`w-8 h-8 ${profile.bgColor} rounded-full flex items-center justify-center`}
                >
                  <span className="text-white text-sm font-medium">
                    {getInitials(profile.name)}
                  </span>
                </div>
                {profile.status === "online" && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                )}
              </div>
              {isExpanded && (
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {profile.name}
                </span>
              )}
            </div>
          ))}
          <button
            className={`flex items-center ${
              !isExpanded ? "justify-center " : ""
            } w-full p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700`}
          >
            <div
              className={` ${
                !isExpanded ? "w-10" : "w-8"
              } h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center`}
            >
              <span className="text-gray-600 dark:text-gray-300">+</span>
            </div>
            {isExpanded && (
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                Add member
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <nav className="space-y-2">
          {bottomNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center ${
                  !isExpanded ? "justify-center" : ""
                } p-2 rounded-lg transition-colors
                 ${
                   isActive
                     ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300"
                     : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                 }`
              }
            >
              <item.icon className="w-5 h-5 min-w-[20px]" />
              {isExpanded && <span className="ml-2">{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
