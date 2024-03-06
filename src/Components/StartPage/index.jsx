import React from "react";
import style from "./style.module.css";
import { ModalWin } from "../Modal";

export const StartPage = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.headerText}>Уважаемые коллеги!</h1>
      <p className={style.textOne}>
        Поздравляем вас с великолепным праздником весны - Международным Женским
        Днём!
      </p>
      <p className={style.textTwo}>
        Этот день напоминает нам о вашей неповторимой силе, красоте и таланте,
        который озаряет наш мир.
      </p>
      <ModalWin />
    </div>
  );
};
