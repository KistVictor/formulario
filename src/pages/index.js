import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "../css/index.css"

export default function Home() {
  return (
    <>
      <FormularioCadastro aoEnviar={enviarForm}/>
    </>
  );

  function enviarForm(dados){
    console.log(dados)
  }
}