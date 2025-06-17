import React, { useState, useEffect } from "react";
import { Drawer, Modal } from "antd";
import dayjs from "dayjs";
import {
  Home,
  Globe,
  UserCircle,
  FolderKanban,
  Settings,
  Menu,
  X,
} from "lucide-react";
import ServiceHubContent from "./ServiceHubContent";

const AppHeader: React.FC = () => {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showServiceHub, setShowServiceHub] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    const updateTime = setInterval(() => setNow(dayjs()), 1000);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(updateTime);
    };
  }, []);

  const navItems = [
    { label: "Home", icon: <Home size={22} className="group-hover:text-white" />, type: "route" },
    {
      label: "SALIC Website",
      icon: <Globe size={22} className="group-hover:text-white" />,
      type: "external",
      href: "https://www.salic.com",
    },
    { label: "Service Hub", icon: <UserCircle size={22} className="group-hover:text-white" />, type: "modal" },
    { label: "Content Management", icon: <FolderKanban size={22} className="group-hover:text-white" />, type: "route" },
    { label: "Admin Settings", icon: <Settings size={22} className="group-hover:text-white" />, type: "route" },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setActive(item.label);
    if (item.type === "external") {
      window.open(item.href, "_blank");
    } else if (item.type === "modal") {
      setShowServiceHub(true);
    } else {
      // Example: navigate(`/app/${item.label.toLowerCase().replace(/\s/g, "-")}`)
    }
  };

  const renderNavItem = (item: typeof navItems[0]) => {
    const isActive = active === item.label;
    return (
      <button
        key={item.label}
        onClick={() => handleNavClick(item)}
        className={`flex items-center gap-2 px-3 py-1 rounded-md transition ${
          isActive
            ? "bg-salic-green text-white"
            : "text-white hover:underline"
        }`}
      >
        {item.icon}
        <span>{item.label}</span>
      </button>
    );
  };

  const currentDate = now.format("dddd, D MMMM YYYY");
  const currentTime = now.format("h:mm:ss A");

  return (
    <header className="bg-salic-primary text-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 lg:px-8 py-2 container mx-auto">
        <div className="block lg:hidden gap-2">
          <img src="/images/logo.png" alt="SALIC Logo" className="h-10"/> 
        </div>
        <div className="flex items-center gap-4">
          
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={20} />
          </button>
          <div className="hidden lg:flex gap-2">
            {navItems.map(renderNavItem)}
          </div>
        </div>

        {/* Clock */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-white/80">
          <span>{currentDate}</span>
          <span className="mx-1">|</span>
          <span>{currentTime}</span>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobile && <Drawer
        placement="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        width={300}
        closeIcon={<X />}
        title={<span className="text-salic">Menu</span>}
      >
        <div className="space-y-4">
          {navItems.map((item) => (
            <div
              key={item.label}
              onClick={() => {
                handleNavClick(item);
              }}
              className="flex items-center gap-3 rounded group hover:pl-2 cursor-pointer transition-all"
            >
              <div className="text-salic-skyBlue bg-salic-lightBlue/20 group-hover:bg-salic-skyBlue p-2 rounded-md">{item.icon}</div>
              <span className="font-semibold text-salic">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Service Hub Drawer/Modal */}
        <Drawer
          placement="left"
          title={<span className="text-salic">Service Hub</span>}
          open={showServiceHub}
          onClose={() => setShowServiceHub(false)}
          width={360}
        >
          <ServiceHubContent />
        </Drawer>
      </Drawer>}

      {!isMobile && <Modal
          open={showServiceHub}
          title={<span className="text-salic">Service Hub</span>}
          onCancel={() => setShowServiceHub(false)}
          width={1200}
          footer={null}
        >
          <ServiceHubContent />
        </Modal>}
    </header>
  );
};

export default AppHeader;
