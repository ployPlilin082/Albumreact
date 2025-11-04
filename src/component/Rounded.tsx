import React from "react";
import "./Rounded.scss";
import leaf1 from "/icons/leaf1.svg";
import leaf2 from "/icons/leaf2.svg";

const Rounded: React.FC = () => {
  return (
    <>
      <div id="div1">
        <h4>Rounded corners!</h4>
       
        <img src={leaf2} alt="leaf1" className="leaf-icon leaf1" />
        <img src={leaf1} alt="leaf2" className="leaf-icon leaf2" />
      </div>
    </>
  );
};

export default Rounded;
