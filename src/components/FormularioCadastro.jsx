import React, { useEffect, useState } from "react"
import DadosEntrega from "./DadosEntrega"
import DadosPessoais from './DadosPessoais'
import DadosUsuario from "./DadosUsuario"

function FormularioCadastro( { enviarForm } ) {

  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetado, setDados] = useState({})

  useEffect(() => {
    if (etapaAtual === formularios.length) {
      enviarForm(dadosColetado)
    }
  })

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
  ]

  function coletarDados(dados) {
    setDados({...dadosColetado, ...dados})
    proximo()
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }
  
  return <>{formularios[etapaAtual]}</>
}

export default FormularioCadastro
