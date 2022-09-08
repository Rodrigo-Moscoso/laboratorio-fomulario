import { useState } from "react";
import Card from "./Card";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  // const [mensaje, setMensaje] = useState("De momento todo Ok");

  // useEffect(() => {
  //   if (nombre === "") {
  //     setMensaje("Falta Datos");
  //   } else {
  //     setMensaje("Todo Ok");
  //   }
  // });
  const handleSubmit = (event) => {
    setNombre("");
    setApellido("");
    setTelefono("");
    setCorreo("");
    console.log("Formulario Enviado");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Formulario para Laboratorio</h1>
        {/* <p>{mensaje}</p> */}
        <div>
          <label htmlFor="input-nombre">Nombre: </label>
          <input
            id="input-nombre"
            type="text"
            placeholder="escribe tu nombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="input-apellido">Apellido: </label>
          <input
            id="input-apellido"
            type="text"
            placeholder="escribe tu apellido"
            value={apellido}
            onChange={(e) => {
              setApellido(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="input-telefono">Teléfono: </label>
          <input
            id="input-telefono"
            type="tel"
            placeholder="escribe tu teléfono"
            value={telefono}
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="input-correo">Correo Electrónico: </label>
          <input
            id="input-correo"
            type="email"
            placeholder="ejemplo@emplo.com"
            value={correo}
            onChange={(e) => {
              setCorreo(e.target.value);
            }}
            required
          />
        </div>
        <button
          onClick={() => {
            if (
              apellido === "" ||
              nombre === "" ||
              telefono === "" ||
              correo === ""
            ) {
              alert("Falta datos por completar");
            } else {
              alert("Enviado");
            }
          }}
        >
          Enviar
        </button>
      </form>
      <Card
        nombreCard={nombre}
        apellidoCard={apellido}
        telefonoCard={telefono}
        correoCard={correo}
      />
    </div>
  );
}
