import React from "react";
import styles from "./styles.module.css";

const Button = ({
  name = "name",
  onClick,
}) => {
  const onButtonClick = () => {
    if (onClick) {
      onClick(name);
    }
  };

  return (
    <div className={styles.custombtn}>
      <button
        className={styles.btn16}
        onClick={onButtonClick}
      >
        {name}
      </button>
    </div>
  );
};
export default Button;
