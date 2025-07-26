"use client";
import { useState } from "react";
import Modal from "@/components/Modal";
export const Headers = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [onConfirmAction, setOnConfirmAction] = useState(() => () => {});

  const showConfirmation = (message, confirmCallback) => {
    console.log(message);
    setModalMessage(message);
    setOnConfirmAction(() => confirmCallback);
    setModalOpen(true);
  };

  const onDeleteProduct = (product) => {
    showConfirmation(`Desea eliminar ${product.title} del carrito?`, () => {
      const result = allProducts.filter((item) => item.id !== product.id);
      setCountProducts(countProducts - product.quantity);
      setTotal(total - product.price * product.quantity);
      setAllProducts(result);
      setModalOpen(false);
    });

    // CODIGO ANTERIOR
    // if (result) {
    //   const results = allProducts.filter((item) => item.id !== product.id);
    //   setTotal(total - product.price * product.quantity);
    //   setCountProducts(countProducts - product.quantity);
    //   setAllProducts(results);
    // }
  };
  const onCleanCart = () => {
    showConfirmation("¿Desea vaciar el carrito?", () => {
      setAllProducts([]);
      setTotal(0);
      setCountProducts(0);
      setModalOpen(false);
    });

    // const result = window.confirm("¿Desea vaciar el carrito?");
    // if (result) {
    //   setAllProducts([]);
    //   setTotal(0);
    //   setCountProducts(0);
    // }
  };
  return (
    <header>
      <h1>Tienda de Libros</h1>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <img
            src="https://cdn-icons-png.flaticon.com/256/5412/5412512.png"
            alt="carrito"
            className="icon-cart"
          />

          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>
        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    <div className="info-cart-product">
                      <span className="imagne-product-carrito">
                        <img
                          src={product.urlImage}
                          style={{ width: "50px", height: "auto" }}
                          alt={product.title}
                        />
                      </span>
                      <span className="cantidad-producto-carrito">
                        {product.quantity}
                      </span>
                      <p className="titulo-producto-carrito">{product.title}</p>
                      <span className="precio-producto-carrito">
                        ${product.price}
                      </span>
                    </div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4734/4734087.png"
                      alt="cerrar"
                      className="icon-close"
                      onClick={() => onDeleteProduct(product)}
                    />
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <button className="btn-clear-all" onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
        onConfirm={onConfirmAction}
      />
    </header>
  );
};
