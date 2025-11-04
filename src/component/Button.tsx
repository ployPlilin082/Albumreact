import "./_variables.scss";
import "./Button.scss";

type ButtonColor = "white" | "dark-green";
type TextColor = "white" | "dark-green" | string;

type ButtonProps = {
  text?: string;
  color: ButtonColor;
  outline?: boolean;
  textColor?: TextColor;
  iconSrc?: string; 
  iconPosition?: "left" | "right";
  iconSize?: number; 
};

export default function Button({
  text = "Click Me",
  color = "dark-green",
  outline = false,
  textColor,
  iconSrc,
  iconPosition = "left",
  iconSize = 18,
}: ButtonProps) {
  const className = outline ? `btn1 btn1-${color}` : `btn btn-${color}`;

  return (
    <button className={className} style={{ color: textColor }}>
      {iconSrc && iconPosition === "left" && (
        <img
          src={iconSrc}
          alt=""
          style={{
            width: iconSize,
            height: iconSize,
            marginRight: text ? 8 : 0,
          }}
        />
      )}
      {text}
      {iconSrc && iconPosition === "right" && (
        <img
          src={iconSrc}
          alt=""
          style={{
            width: iconSize,
            height: iconSize,
            marginLeft: text ? 8 : 0,
          }}
        />
      )}
    </button>
  );
}
