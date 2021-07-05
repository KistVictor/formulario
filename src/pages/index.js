import React from "react";
import FormularioCadastro from "../components/FormularioCadastro";

import "../css/index.css"

export default function Home() {
  return (
    <FormularioCadastro enviarForm={enviarForm}/>
  );

  function enviarForm(dados){
    console.log(dados)
  }
}