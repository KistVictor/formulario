import React, { useState } from "react"



function DadosUsuario({ aoEnviar }) {
  
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
      <section className="font-mono min-h-screen bg-gradient-to-br from-indigo-300 to-purple-500 py-6 flex flex-col justify-center sm:py-12">
        <form
          onSubmit={event => {
            event.preventDefault()
            aoEnviar({email, senha})
          }}
          className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
        >
          <div className="flex-shrink-0">
            <h1 className="text-indigo-600 text-center pb-3 text-3xl font-bold">
              Dados de usuário
            </h1>

            <input
              value={email}
              onChange={event => {
                setEmail(event.target.value)
              }}
              type="email"
              required
              placeholder="Email"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 mt-1 max-w-lg mx-auto"
            />

            <input
              value={senha}
              onChange={event => {
                setSenha(event.target.value)
              }}
              type="password"
              required
              placeholder="Senha"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 my-5 max-w-lg mx-auto"
            />

            <button
              className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-md"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </section>
  )
}

export default DadosUsuario
