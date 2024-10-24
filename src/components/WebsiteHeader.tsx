import React from "react";
import type { FC } from "react";
import { Avatar, Button, Dropdown, Space, Tooltip } from "antd";
import type { MenuProps } from "antd";
import {
  LinkOutlined,
  MenuOutlined,
  AppstoreOutlined,
  LockOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

interface User {
  id: number;
  name: string;
  avatar?: string;
}

interface WebsiteHeaderProps {
  users?: User[];
  onCopyLink?: () => void;
  onAddUser?: () => void;
}

const WebsiteHeader: FC<WebsiteHeaderProps> = ({
  users = [
    { id: 1, name: "User 1", avatar: "/api/placeholder/32/32" },
    { id: 2, name: "User 2", avatar: "/api/placeholder/32/32" },
    { id: 3, name: "User 3", avatar: "/api/placeholder/32/32" },
    { id: 4, name: "User 4", avatar: "/api/placeholder/32/32" },
    { id: 5, name: "User 5", avatar: "/api/placeholder/32/32" },
    { id: 6, name: "User 6", avatar: "/api/placeholder/32/32" },
  ],
  onCopyLink,
  onAddUser,
}) => {
  const visibleUsers = users.slice(0, 4);
  const remainingUsers = Math.max(0, users.length - 4);

  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: "Access Settings",
    },
  ];

  return (
    <>
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
        <span>Workspace</span>
        <span className="text-gray-400">›</span>
        <span>Creative</span>
        <span className="text-gray-400">›</span>
        <span className="text-gray-900">Creative Website</span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="flex flex-col align-center gap-3">
            {/* Title */}
            <h1 className="text-[24px] font-semibold text-gray-900 leading-none">
              Website Design
            </h1>
            <div className="flex flex-row">
              {/* Access button */}
              <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
                <Button className="flex items-center border border-gray-200 rounded-full hover:bg-gray-50 px-2.5 h-7">
                  <LockOutlined className="text-gray-600" />
                  <span className="mx-1 text-sm">Limited access</span>
                  <CaretDownOutlined className="text-gray-400 text-xs" />
                </Button>
              </Dropdown>

              {/* User avatars */}
              <div className="flex -space-x-2">
                {visibleUsers.map((user) => (
                  <Tooltip key={user.id} title={user.name} placement="bottom">
                    <Avatar
                      src={user.avatar}
                      className="w-8 h-8 border-2 border-white"
                      style={{ width: "32px", height: "32px" }}
                    >
                      {user.name.charAt(0)}
                    </Avatar>
                  </Tooltip>
                ))}
                {remainingUsers > 0 && (
                  <Avatar
                    className="w-8 h-8 border-2 border-white bg-gray-100 text-gray-600"
                    style={{ width: "32px", height: "32px" }}
                  >
                    +{remainingUsers}
                  </Avatar>
                )}
                <Avatar
                  onClick={onAddUser}
                  className="w-8 h-8 border-2 border-white bg-[#444CE7] hover:bg-[#3538CD] cursor-pointer flex items-center justify-center"
                  style={{ width: "32px", height: "32px" }}
                >
                  <span className="text-white text-lg">+</span>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-end items-center mt-1 text-sm">
            <span >From 23 April</span>
            <div className="w-1 h-1 rounded-full bg-gray-300 mx-2" />
            <span className="flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5" />
              <span className="text-gray-500">Updated 12 min ago</span>
            </span>
          </div>
          <Space size={8}>
            <Button
              type="primary"
              icon={<LinkOutlined />}
              onClick={onCopyLink}
              className="flex items-center bg-[#444CE7] hover:bg-[#3538CD] border-none h-9"
            >
              Copy Link
            </Button>
            <Button
              type="text"
              icon={<MenuOutlined />}
              className="flex items-center justify-center w-9 h-9 text-gray-600 hover:bg-gray-50 hover:text-gray-600"
            />
            <Button
              type="text"
              icon={<AppstoreOutlined />}
              className="flex items-center justify-center w-9 h-9 text-gray-600 hover:bg-gray-50 hover:text-gray-600"
            />
          </Space>
        </div>
      </div>
    </>
  );
};

export default WebsiteHeader;
