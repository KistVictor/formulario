import React from "react"
import DadosPessoais from './DadosPessoais'
import DadosUsuario from "./DadosUsuario"

function FormularioCadastro( { enviarForm } ) {
  
  return (
    <>
      <DadosPessoais aoEnviar={enviarForm} />
      <DadosUsuario aoEnviar={enviarForm} />
    </>
  )
}

export default FormularioCadastro
