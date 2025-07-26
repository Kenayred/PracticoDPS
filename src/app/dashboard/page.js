"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Headers } from "@/components/Headers";
import { ProductList } from "@/components/ProductList";
import Modal from "@/components/Modal";
export default function Home() {
  const router = useRouter();
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (!user) {
      router.push("/login"); // Redirige al login si no hay sesión
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <>
      <Headers
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />

      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />

      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "gray",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <span onClick={handleLogout}>Cerrar Sesion</span>
      </button>
    </>
  );
}
