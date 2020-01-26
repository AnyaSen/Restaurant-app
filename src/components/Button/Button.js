import React from "react";
import Styles from "./Button.module.scss";

export default function Button({ buttonText, handleSort }) {
  return (
    <button onClick={handleSort} className={Styles.primaryButton}>
      {buttonText}
    </button>
  );
}
