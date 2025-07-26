import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function generarPDF(productos, total) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Factura de Compra", 14, 22);

  const rows = productos.map((producto) => [
    producto.title,
    producto.quantity,
    producto.price.toFixed(2),
    (producto.price * producto.quantity).toFixed(2),
  ]);

  autoTable(doc, {
    head: [["Producto", "Cantidad", "Precio", "Total"]],
    body: rows,
  });

  doc.text(
    `Total a Pagar: $${total.toFixed(2)}`,
    14,
    doc.lastAutoTable.finalY + 10
  );
  doc.save("factura.pdf");
}
