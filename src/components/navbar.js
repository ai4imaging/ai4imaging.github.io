import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from '@ant-design/icons';

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
  const [current, setCurrent] = useState("");
  const [openKeys, setOpenKeys] = useState([]);
  const [menuMode, setMenuMode] = useState("horizontal");
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setMenuMode("inline"); // 切换为竖排菜单
      } else {
        setMenuMode("horizontal"); // 切换为横向菜单
        setDrawerVisible(false); // 关闭 Drawer
      }
    };
    
    handleResize(); // 立即执行一次，确保初始状态正确
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuSelect = ({ key }) => {
    setCurrent(key);
    navigate(key);
    if (isMobile) {
      setDrawerVisible(false); // 在移动端点击后关闭 Drawer
    }
  };

  const handleMenuOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const menuContent = (
    <Menu
      onClick={handleMenuSelect}
      selectedKeys={[current]}
      openKeys={openKeys}
      onOpenChange={handleMenuOpenChange}
      mode={menuMode}
      items={items.map((item) => ({
        ...item,
        onTitleClick: () => {
          // 如果点击的是"Research"，自动展开并选中第一个子项
          if (item.key === "/direction") {
            setCurrent(item.children[0].key); // 选择第一个子项
            navigate(item.children[0].key); // 跳转到第一个子项
            setOpenKeys([item.key]); // 展开Research子菜单
          } else {
            setCurrent(item.key); // 选择其他项
            navigate(item.key); // 跳转
          }
        },
      }))}
      style={{
        borderBottom: "none",
        width: menuMode === "inline" ? "100%" : "auto",
      }}
      className="text-xl"
    />
  );

  return (
    <div
      style={{
        padding: "10px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: isMobile ? "row" : "row",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/rawdata/logo_temp.png"
          alt="Logo"
          className="h-10 sm:h-10 md:h-20 lg:h-23 xl:h-26 object-contain mr-2"
        />
      </div>

      {/* Desktop Menu */}
      {!isMobile && menuContent}

      {/* Mobile Button */}
      {isMobile && (
        <>
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: '24px' }} />}
            onClick={() => setDrawerVisible(true)}
          />
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            width={360}
          >
            {menuContent}
          </Drawer>
        </>
      )}
    </div>
  );
};

export default App;
