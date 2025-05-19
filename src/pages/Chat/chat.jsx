// MonkChat.jsx
import React from "react";
import styles from "./chat.module.css";

export default function MonkChat() {
  return (
    <div className={styles.container}>
      
      <div className={styles.box}>
        <div className={styles.sidebar}>
          <div>
            <div className={styles.formGroup}>
              <label>Sala:</label>
              <input type="text" defaultValue="Frei" />
            </div>
            <div className={styles.formGroup}>
              <label>Nick:</label>
              <input type="text" defaultValue="Brunex" />
            </div>
            <div className={styles.formGroup}>
              <label>Para:</label>
              <select>
                <option>Todos</option>
                <option>Osvaldo</option>
              </select>
            </div>
            <div className={styles.buttonGroup}>
              <button>Criar</button>
              <button>Entrar</button>
            </div>
          </div>
          <div>
            <label>Mensagem:</label>
            <textarea rows="4" defaultValue="Opa, tudo bem ai?"></textarea>
            <button className={styles.sendButton}>Enviar</button>
          </div>
        </div>
        <div className={styles.chatArea}>
          <p>
            (15:02:01) <strong>Brunex</strong> entrou na sala...
          </p>
          <p>
            (15:03:25) <strong>Brunex</strong> fala para <strong>Todos</strong>:
            Opa, tudo bem ai?
          </p>
          <input
            type="text"
            defaultValue="Opa, estou editando essa mensagem..."
          />
          <p>
            (15:03:25) <strong>Brunex</strong> fala para{" "}
            <strong>Osvaldo</strong>: To com fomeeeee
          </p>
        </div>
      </div>
    </div>
  );
}
