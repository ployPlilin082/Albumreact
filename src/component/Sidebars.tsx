import React, { useState } from "react";
import "./Sidebar.scss";

import CardProfile from "./cardprofile";

const Sidebar: React.FC = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <>
      <nav className="navbar navbar-light bg-light shadow-sm px-3">
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler border-0 me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarExample"
            aria-controls="sidebarExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <img
            src="/imges/baac-header-hover 1.png"
            alt="BAAC Logo"
            style={{
              height: "30px",
              width: "auto",
            }}
          />
        </div>

       <div
  style={{
    display: "flex",
    alignItems: "center",
    position: "relative",
  }}
>
  <div
    onClick={() => setShowCard(!showCard)}
    style={{
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    }}
  >
    <img
      src="/icons/Container.svg"
      alt="check"
      style={{ width: 60, height: 70, marginRight: 8 }}
    />
  </div>

  {showCard && (
    <div
      style={{
        position: "absolute",
        top: "70px",
        right: 0,
        zIndex: 1000,
      }}
    >
      <CardProfile /> 
    </div>
  )}
</div>

      </nav>

      <div
        className="offcanvas offcanvas-start bg-white"
        tabIndex={-1}
        id="sidebarExample"
        aria-labelledby="sidebarExampleLabel"
        style={{ width: "270px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
      >
        <div className="offcanvas-body p-0">
          <ul className="list-unstyled m-0">
            <li className="sidebar-item">
              <a
                href="#"
                className="sidebar-link d-flex align-items-center justify-content-between"
                data-bs-toggle="collapse"
                data-bs-target="#masterMenu"
              >
                <div className="d-flex align-items-center">
                  <img
                    src="/icons/Vector12.svg"
                    alt="จัดการมาสเตอร์"
                    className="sidebar-icon me-2"
                  />
                  จัดการมาสเตอร์
                </div>
                <i className="bi bi-chevron-down"></i> {/* ลูกศรลง */}
              </a>

              {/* เมนูย่อย */}
              <ul id="masterMenu" className="collapse list-unstyled ps-4 mt-2">
                <li>
                  <a href="#" className="sidebar-sublink">
                    จัดการบทบาทและสิทธิ์การใช้งาน
                  </a>
                </li>
                <li>
                  <a href="#" className="sidebar-sublink">
                    จัดการจำนวนการรับงาน
                  </a>
                </li>
              </ul>
            </li>

            {/* เมนูหลักอื่น */}
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img
                  src="/icons/Vector1.svg"
                  alt="สัญญาหลักประกัน"
                  className="sidebar-icon"
                />
                สัญญาหลักประกัน
              </a>
            </li>

            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img
                  src="/icons/18.svg"
                  alt="ตรวจสอบสัญญา"
                  className="sidebar-icon"
                />
                ตรวจสอบสัญญาหลักประกัน
              </a>
            </li>

            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img
                  src="/icons/20.svg"
                  alt="มอบหมายงาน"
                  className="sidebar-icon"
                />
                มอบหมายงาน
              </a>
            </li>

            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img
                  src="/icons/Vector1.svg"
                  alt="ค้นหาสัญญา"
                  className="sidebar-icon"
                />
                ค้นหาสัญญาหลักประกัน
              </a>
            </li>

            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img src="/icons/1.svg" alt="รายงาน" className="sidebar-icon" />
                รายงานแดชบอร์ด
              </a>
            </li>

            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img
                  src="/icons/19.svg"
                  alt="ประวัติ"
                  className="sidebar-icon"
                />
                ประวัติการใช้งาน
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
