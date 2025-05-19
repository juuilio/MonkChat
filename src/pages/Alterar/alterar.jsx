import React from "react";
import style from "./Alterar.module.css";
import logo from "../../assets/logo.png";

export default function Alterar() {
  return (
    <div className={style.container}>
      <div className={style.lside}>
        <div className={style.logoCont}>
          <img src={logo} alt="Logo" className={style.logo} />
          <p>MonkChat</p>
        </div>
      </div>

      <div className={style.rside}>
        <h1>Alterar conta</h1>
        <div className={style.box}>
          <form>
            <label>
              <p className={style.emailText}>E-mail</p>
              <p>MonkChat@monkmail.com.br</p>
            </label>

            <label htmlFor="reset">
              <p className={style.pwdText}>Senha</p>
              <a href="#" className={style.resetLink} id="reset">
                resetar
              </a>
            </label>
            <label htmlFor="senha">
              <p className={style.nickText}>Nick</p>
              <input type="text" placeholder="Novo Nick" className={style.txtImput} id="senha" />
            </label>
            <div className={style.btnCont}>
              <button type="submit">Alterar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
