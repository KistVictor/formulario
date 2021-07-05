import React, {useState} from 'react';

function DadosEntrega({ aoEnviar }) {

    const [cep, setCep] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    
    return (
        <section className="font-mono min-h-screen bg-gradient-to-br from-indigo-300 to-purple-500 py-6 flex flex-col justify-center sm:py-12">
        <form
          onSubmit={event => {
            event.preventDefault()
            aoEnviar({cep, endereco, numero, cidade, estado})
          }}
          className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
        >
          <div className="flex-shrink-0">
            <h1 className="text-indigo-600 text-center pb-3 text-3xl font-bold">
              Dados de entrega
            </h1>

            <input
              value={cep}
              onChange={event => {
                setCep(event.target.value)
              }}
              type="number"
              required
              placeholder="CEP"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 mt-1 max-w-lg mx-auto"
            />

            <input
              value={endereco}
              onChange={event => {
                setEndereco(event.target.value)
              }}
              type="text"
              required
              placeholder="Endereço"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 my-5 max-w-lg mx-auto"
            />

            <input
              value={numero}
              onChange={event => {
                setNumero(event.target.value)
              }}
              type="number"
              required
              placeholder="Número"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 mt-1 max-w-lg mx-auto"
            />

            <input
              value={cidade}
              onChange={event => {
                setCidade(event.target.value)
              }}
              type="text"
              required
              placeholder="Cidade"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 my-5 max-w-lg mx-auto"
            />

            <input
              value={estado}
              onChange={event => {
                setEstado(event.target.value)
              }}
              type="text"
              required
              maxLength="2"
              minLength="2"
              placeholder="Estado"
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

export default DadosEntrega