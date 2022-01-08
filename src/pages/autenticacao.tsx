import { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'

export default function Autenticacao() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <div>
      <h1>Autenticação</h1>
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
    </div>
  )
}
