import React from "react";

export default function Card({
  nombreCard,
  apellidoCard,
  telefonoCard,
  correoCard,
}) {
  return (
    <div>
      <h1>Tareja de Datos Guardados</h1>
      <p>{nombreCard}</p>
      <p>{apellidoCard}</p>
      <p>{telefonoCard}</p>
      <p>{correoCard}</p>
    </div>
  );
}
