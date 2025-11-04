import React from "react";

type ButtonProps = {
  iconName?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  iconSize?: number;
};

const getIconPath = (name: string) => `/icons/${name}.svg`;

const Button: React.FC<ButtonProps> =  ({
  iconName,
  onClick,
  children,
  iconSize = 28,
}) => {
  return (
    <button type="button" className="btn-icon" onClick={onClick}>
      {iconName && (
        <img
          src={getIconPath(iconName)}
          alt={iconName}
          style={{
            width: iconSize,
            height: iconSize,
            marginRight: children ? 6 : 0,
          }}
        />
      )}
      {children && <span className="btn-text">{children}</span>}
    </button>
  );
};

export default Button;

