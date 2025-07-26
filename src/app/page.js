"use client";
import { useState } from "react";
import { Headers } from "@/components/Headers";
import { ProductList } from "@/components/ProductList";
import Modal from "@/components/Modal";
export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleConfirm = () => {
    // Handle confirmation logic
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // Handle cancellation logic
    setIsModalOpen(false);
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
    </>
  );
}
