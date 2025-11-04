import React from "react";

const CardProfile: React.FC = () => {
  return (
    <>
      <div
        className="card shadow-sm border-0"
        style={{
          width: "238px",
          height: "158px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "10px 14px",
        }}
      >
        <div className="card-body p-0">
          <p
            className="mb-1"
            style={{ fontSize: "14px", color: "#555", lineHeight: "1.4" }}
          >
            <strong>ชื่อ - นามสกุล :</strong> บุญญฤธิ์ นวลชนะ
          </p>
          <p
            className="mb-3"
            style={{ fontSize: "14px", color: "#555", lineHeight: "1.4" }}
          >
            <strong>บทบาท :</strong> ผู้ดูแลระบบ
          </p>

          <a
            href="#"
            className="d-flex align-items-center text-decoration-none text-dark mb-2"
          >
            <img
              src="/icons/profile.svg"
              alt="My Profile"
              style={{
                width: "18px",
                height: "18px",
                marginRight: "8px",
                opacity: "0.8",
              }}
            />
            <span>My Profile</span>
          </a>

          <a
            href="#"
            className="d-flex align-items-center text-decoration-none text-dark"
          >
            <img
              src="/icons/logout.svg"
              alt="Logout"
              style={{
                width: "18px",
                height: "18px",
                marginRight: "8px",
                opacity: "0.8",
              }}
            />
            <span>Logout</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardProfile;

