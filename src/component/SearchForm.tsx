import React from "react";
import "./SearchForm.scss";
import Button from "./Button";

const SearchForm: React.FC = () => {
  return (
    <div
      className="card shadow-sm border-0"
      style={{
        padding: "30px 24px",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <h6 className="fw-bold mb-3">ค้นหา</h6>

      {/* ประเภทหลักทรัพย์ */}
      <div className="mb-3">
        <label className="form-label fw-semibold mb-2">
          ประเภทหลักทรัพย์ :
        </label>
        <div
          className="d-flex flex-wrap align-items-center p-3 border rounded"
          style={{
            gap: "60px",
            backgroundColor: "#ffffff",
            marginRight: "10px",
            marginBottom: "10px",
          }}
        >
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="เงินฝาก" />
            <label className="form-check-label" htmlFor="เงินฝาก">
              เงินฝาก
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="เครื่องจักร"
            />
            <label className="form-check-label" htmlFor="เครื่องจักร">
              เครื่องจักร
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="ไม้ยืนต้น"
            />
            <label className="form-check-label" htmlFor="ไม้ยืนต้น">
              ไม้ยืนต้น
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="สินค้าคงคลัง"
            />
            <label className="form-check-label" htmlFor="สินค้าคงคลัง">
              สินค้าคงคลัง
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="สิทธิการเช่า"
            />
            <label className="form-check-label" htmlFor="สิทธิการเช่า">
              สิทธิการเช่า
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="สิทธิเรียกร้อง"
            />
            <label className="form-check-label" htmlFor="สิทธิเรียกร้อง">
              สิทธิเรียกร้อง
            </label>
          </div>
        </div>
      </div>

      {/* Dropdowns */}
      <div className="row g-3">
        <div className="col-md-4">
          <label className="form-label">ตามรายพื้นที่ :</label>
          <select className="form-select">
            <option>ทั้งหมด</option>
            <option>ภาคเหนือ</option>
            <option>ภาคกลาง</option>
            <option>ภาคใต้</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">ตามช่วงเวลารายเดือน :</label>
          <select className="form-select">
            <option>ทั้งหมด</option>
            <option>มกราคม</option>
            <option>กุมภาพันธ์</option>
            <option>มีนาคม</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">ตามช่วงเวลารายปีบัญชี :</label>
          <select className="form-select">
            <option>ทั้งหมด</option>
            <option>2566</option>
            <option>2567</option>
            <option>2568</option>
          </select>
        </div>
      </div>
      <div className="d-flex flex-row-reverse" style={{ margin: "30px" }}>
        <div className="p-2">
          <Button
            text="ล้างข้อมูล"
            color="dark-green"
            outline
            textColor="dark-green"
            iconSrc="/icons/10.svg"
            iconPosition="left"
          />
        </div>
        <div className="p-2">
          <Button text="ค้นหา" color="dark-green" textColor="white" />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
