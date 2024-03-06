import React from "react";
import style from "./style.module.css";

export const EndBlock = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.textWrapper}>
        <p>Желаем вам, чтобы каждый день вашей жизни был полон вдохновения,</p>
        <p>новых возможностей и благополучия.</p>
        <p className={style.spanText}>Счастливого 8 Марта!</p>
        <p className={style.spanText}>
          Ваш скромный департамент информационных технологий
        </p>
      </div>
    </div>
  );
};
