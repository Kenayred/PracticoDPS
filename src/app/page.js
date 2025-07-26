"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (!user) {
      router.push("/login");
    } else {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div>
      <h2>Página Principal</h2>
      <p>Contenido visible solo si estás logueado</p>
    </div>
  ); // No need to render anything here
}
