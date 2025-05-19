import React from "react";
import { Link } from "react-router-dom";
import styles from './Cadastro.module.css';
import logo from "../../assets/logo.png";

export default function Cadastro() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={logo} alt="MonkChat Logo" />
        <h1>MonkChat</h1>
      </div>

      <div className={styles.right}>
        <h2>Crie sua conta</h2>
        <form>
          <label>Nick</label>
          <input type="text" placeholder="Usuário" />

          <label>E-mail</label>
          <input type="email" placeholder="e-mail" />

          <label>Senha</label>
          <input type="password" placeholder="Senha" />

          <button type="submit">Criar</button>
        </form>

        <p className={styles.signupText}>
          Já possui uma conta? Faça seu login clicando <Link to="/login"><strong>aqui</strong></Link>.
        </p>
      </div>
    </div>
  );
}  