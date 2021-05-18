import React, { useState } from "react"

function FormularioCadastro({ aoEnviar }) {
  //esta sendo pego apenas o props 'aoEnviar'
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)

  return (
    <>
      <div className="font-mono min-h-screen bg-gradient-to-br from-indigo-300 to-purple-500 py-6 flex flex-col justify-center sm:py-12">
        <form
          onSubmit={event => {
            event.preventDefault()
            aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
          }}
          className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
        >
          <div className="flex-shrink-0">
            <h1 className="text-indigo-600 text-center pb-3 text-3xl font-bold">
              Dados pessoais
            </h1>

            <input
              value={nome}
              onChange={event => {
                setNome(event.target.value)
              }}
              type="text"
              required
              placeholder="Nome"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 mt-1 max-w-lg mx-auto"
            />

            <input
              value={sobrenome}
              onChange={event => {
                setSobrenome(event.target.value)
              }}
              type="text"
              required
              placeholder="Sobrenome"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 my-5 max-w-lg mx-auto"
            />

            <input
              value={cpf}
              onChange={event => {
                setCpf(event.target.value)
              }}
              type="text"
              required
              maxlength="11"
              minlength="11"
              placeholder="CPF"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 mb-5 max-w-lg mx-auto"
            />

            <label htmlFor="promocoes" className="text-indigo-500">
              Promoções
            </label>
            <input
              id="promocoes"
              type="checkbox"
              checked={promocoes}
              onChange={event => {
                setPromocoes(event.target.checked)
              }}
              className="mx-3"
            ></input>

            <label htmlFor="novidades" className="text-indigo-500">
              Novidades
            </label>
            <input
              id="novidades"
              type="checkbox"
              checked={novidades}
              onChange={event => {
                setNovidades(event.target.checked)
              }}
              className="mx-3"
            ></input>

            <button
              className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-md"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormularioCadastro
