"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { users } from "../app/users.js";
import Modal from "@/components/Modal";
import styles from "../app/dashboard/page.module.css"; // Assuming users.js is in the same directory

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(users));
    }

    const usuarios = JSON.parse(localStorage.getItem("users")) || [];

    console.log(usuarios);

    const user = usuarios.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } else {
      <Modal>
        <p>Invalid username or password</p>
      </Modal>;
    }
  };

  const redirectToRegister = () => {
    router.push("/register");
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <h3 style={{ textAlign: "center" }}>Login</h3>

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

        <button type="submit">Login</button>
        <button type="button" onClick={redirectToRegister}>
          Register
        </button>
      </form>
    </div>
  );
}
