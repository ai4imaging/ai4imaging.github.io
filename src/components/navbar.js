import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";

const items = [
  {
    label: "Home",
    key: "/",
  },
  {
    label: "Research",
    key: "/direction",
    children: [
      {
        label: "AI & Imaging Technologies",
        key: "/direction",
      },
      {
        label: "Scientific Applications",
        key: "/application",
      },
    ],
  },
  {
    label: "Publication",
    key: "/publication",
  },
  {
    label: "Team",
    key: "/team",
  },
  {
    label: "Teaching",
    key: "/teaching",
  },
  {
    label: "Contact",
    key: "/contact",
  },
];

const App = () => {
  const [current, setCurrent] = useState(""); // 当前选中的菜单项
  const navigate = useNavigate();

  const handleMenuSelect = ({ key }) => {
    setCurrent(key); // 更新当前选中项
    navigate(key); // 跳转到对应页面
  };

  return (
    <div
      style={{
        padding: "10px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // 左右两侧对齐
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/rawdata/logo_temp.png"
          alt="Logo"
          className="h-10 sm:h-10 md:h-20 lg:h-23 xl:h-26 object-contain mr-2"
        />
      </div>

      {/* 右侧 Menu */}
      <Menu
        onClick={handleMenuSelect} // 处理点击事件
        onSelect={handleMenuSelect} // 处理选中事件
        selectedKeys={[current]} // 确保选中状态和当前路径保持同步
        mode="horizontal"
        items={items.map((item) => ({
          ...item,
          onTitleClick: () => {
            if (!item.children) {
              navigate(item.key);
            } else if (item.key === "/direction") {
              navigate("/direction");
            }
          },
        }))}
        style={{
          display: "inline-block", // 菜单宽度只占文字的宽度
          borderBottom: "none", // 去掉默认的下划线
        }}
        className="text-xl"
      />
      <style>
        {`
          .ant-menu-horizontal > .ant-menu-item-selected::after {
            border-bottom: 2px solid #1890ff; /* 下划线颜色 */
            transform: scaleX(1); /* 设置下划线长度与文字匹配 */
          }
          .ant-menu-horizontal > .ant-menu-item {
            margin: 0 8px; /* 调整文字间距 */
          }
        `}
      </style>
    </div>
  );
};

export default App;
