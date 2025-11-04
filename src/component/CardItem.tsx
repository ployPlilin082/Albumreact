import React from "react";
import "./Cardlist.scss";

type CardColor = "blue" | "purple" | "green" | "red" | "yellow" | "gray";

interface CardItemProps {
  title: string;
  value: string;
  color: CardColor;
  icon?: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, value, color, icon }) => {
  return (
    <div className={`card-item card-${color}`}>
      <div className="card-left">
        <h5>{title}</h5>
        <h3>{value}</h3>
      </div>
      {icon && (
        <div className={`card-icon-bg bg-${color}`}>
          <img src={icon} alt="icon" className="card-icon" />
        </div>
      )}
    </div>
  );
};

export default CardItem;

