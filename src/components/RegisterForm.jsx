"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { users } from "../app/users.js";
import Modalinfo from "@/components/ModalInfo";
import styles from "../app/dashboard/page.module.css"; // Assuming users.js is in the same directory

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [active, setActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [onConfirmAction, setOnConfirmAction] = useState(() => () => {});

  const router = useRouter();

  const showConfirmation = (message, confirmCallback) => {
    console.log(message);
    setModalMessage(message);
    setOnConfirmAction(() => confirmCallback);
    setModalOpen(true);
  };

  const registerUsuario = (e) => {
    e.preventDefault();
    const newUser = { username, password };
    if (!username || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(users));
    }
    const usuarios = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = usuarios.some(
      (user) => user.username === newUser.username
    );
    console.log(usuarios);
    if (!userExists) {
      usuarios.push(newUser);
      localStorage.setItem("users", JSON.stringify(usuarios));

      showConfirmation("Usuario registrado correctamente", () => {
        router.push("/login");
        setModalOpen(false);
      });
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={registerUsuario} className={styles.loginForm}>
        <h3 style={{ textAlign: "center" }}>Registro</h3>

        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type="submit">Registrar</button>
      </form>

      <Modalinfo
        isOpen={modalOpen}
        message={modalMessage}
        onConfirm={onConfirmAction}
      />
    </div>
  );
}
