import React from "react";
import Button from "./iconsbutton";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <>
      <footer
        className="text-white pt-4"
        style={{ backgroundColor: "#047857", width: "100%", height: "250px" }}
      >
        <div
          className="container-fluid px-5"
          style={{ maxWidth: "1400px", margin: "0 auto" }}
        >
          <div className="d-flex flex-wrap justify-content-between align-items-start footer-flex">
            {/* โลโก้ */}
            <div className="text-center me-4">
              <img
                src="/imges/BAAC_Logo.svg 1.png"
                alt="BAAC Logo"
                style={{ width: "80px", height: "auto" }}
              />
            </div>

            {/* ช่องทางการติดต่อ */}
            <div
              className="footer-contact"
              style={{ flex: 1, minWidth: "600px" }}
            >
              <h6 className="fw-bold mb-2">ช่องทางการติดต่อ</h6>

              <div className="row">
                <div className="col-md-6">
                  <p className="mb-1">
                    ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (ธ.ก.ส.)
                  </p>
                  <p className="mb-1">
                    ที่อยู่ : เลขที่ 2346 ถนนพหลโยธิน แขวงเสนานิคม เขตจตุจักร
                    กรุงเทพฯ 10900
                  </p>
                </div>

                <div className="col-md-6">
                  <p className="mb-1">โทรศัพท์ : 0-2555-0555</p>
                  <p className="mb-1">โทรสาร : 0-2558-6341</p>
                  <p className="mb-0">E-mail : contact@baac.or.th</p>
                </div>
              </div>
            </div>

            {/* ช่องทางออนไลน์ */}
            <div
              className="footer-online text-start"
              style={{ flex: 1, minWidth: "400px" }}
            >
              <h6
                className="fw-bold mb-3"
                style={{ fontSize: "1rem", lineHeight: "1.2" }}
              >
                สื่อสังคมออนไลน์
              </h6>

              <div
                className="social-buttons d-flex align-items-center flex-wrap"
                style={{ gap: "12px" }}
              >
                <Button iconName="facebook" onClick={() => console.log("Facebook")} />
                <Button iconName="line" onClick={() => console.log("Line")} />
                <Button iconName="youtube" onClick={() => console.log("YouTube")} />
                <Button iconName="tiktok" onClick={() => console.log("TikTok")} />
                <Button iconName="instagram" onClick={() => console.log("Instagram")} />
                <Button iconName="rss1" onClick={() => console.log("RSS")} />
              </div>
            </div>
          </div>

          <hr className="border-light my-3" />

          <div className="text-center pb-3">
            <small>© All Rights Reserved. BAAC Version 1.0.0</small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
