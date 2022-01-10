import { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'
import { IconeAtencao, IconeGoogle } from '../components/icons'

export default function Autenticacao() {
  const [erro, setErro] = useState(null)
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function submeter() {
    if (modo === 'login') {
      console.log('login')
      exibirErro('Ocorreu um erro no login')
    } else {
      console.log('Ocorreu um erro no cadastro')
      exibirErro('Ocorreu um erro no cadastro')
    }
  }

  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg)
    setTimeout(() => setErro(null), tempoEmSegundos * 1000)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 lg:1/3 m-10 items-center">
        <h1 className="text-xl font-bold mb-5">
          {modo === 'login'
            ? 'Entre com sua conta'
            : 'Cadastre-se na plataforma'}
        </h1>

        {erro ? (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
            {IconeAtencao}
            <span className="ml-3">{erro}</span>
          </div>
        ) : null}

        <AuthInput
          tipo="email"
          label="E-mail"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          tipo="password"
          label="Senha"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />
        <AuthInput
          tipo="password"
          label="Confirme sua senha"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
          naoRenderizarQuando={modo === 'login'}
        />
        <button
          onClick={submeter}
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6"
        >
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={submeter}
          className="w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 flex items-center justify-center"
        >
          <span className="mr-2">{IconeGoogle}</span>Entrar com Google
        </button>

        {modo === 'login' ? (
          <p className="mt-8">
            Novo por aqui? <span className="hidden">''</span>
            <a
              href=""
              onClick={() => setModo('cadastro')}
              className='className=" text-blue-500 hover:text-blue-700 font-semibold cursor-pointer'
            >
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade? <span className="hidden">''</span>
            <a
              onClick={() => setModo('login')}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              Entre com suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
