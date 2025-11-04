import React from "react";
import CardItem from "./CardItem";

const Cardlist: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <CardItem
        title="จำนวนรายการทั้งหมด"
        value="10,000"
        color="blue"
        icon="/icons/Group 121.svg"
      />
      <CardItem
        title="จำนวนรายการที่ผ่านการอนุมัติ"
        value="6,500"
        color="green"
        icon="/icons/Group 124.svg"
      />
      <CardItem
        title="จำนวนรายการที่รอตรวจสอบ"
        value="3,000"
        color="purple"
        icon="/icons/Group 122.svg"
      />
      <CardItem
        title="จำนวนรายการที่ไม่ผ่านการอนุมัติ"
        value="1,000"
        color="red"
        icon="/icons/Group 123.svg"
      />
    </div>
  );
};

export default Cardlist;
