import React from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.lside}>
        <div className={style.logoCont}>
          <img src={logo} alt="Logo" className={style.logo} />
          <p>MonkChat</p>
        </div>
      </div>
      <div className={style.rside}>
        <h1>Faça seu login</h1>
        <div className={style.box}>
          <form action="">
            <label htmlFor="email">
              <p>E-mail</p>
              <input
                type="text"
                placeholder="Email"
                id="email"
                className={style.txtInput}
              />
            </label>
            <label htmlFor="password">
              <p>Senha</p>
              <input
                type="password"
                placeholder="Senha"
                id="password"
                className={style.txtInput}
              />
            </label>
          </form>
        </div>
        <button type="submit" className={style.btn}>
          Login
        </button>
        <div className={style.regTxt}>
          <p>
            Não possui uma conta?
            Crie uma agora clicando <Link to="/Cadastro"><strong>aqui</strong></Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
