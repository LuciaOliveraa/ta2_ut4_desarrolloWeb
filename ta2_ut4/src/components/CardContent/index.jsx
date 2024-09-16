import React from "react";

export function CardContent({
  titulo,
  descripcion,
  personaAsignada,
  fechaInicio,
  fechaFin,
}) {
  return (
    <>
      <p className="title"> {titulo} </p>
      <div className="content"> {descripcion} </div>
      <span className="card-footer-item"> {personaAsignada} </span>
      <span className="card-footer-item"> {fechaInicio} </span>
      <span className="card-footer-item"> {fechaFin} </span>
    </>
  );
}