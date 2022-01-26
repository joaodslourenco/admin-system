import Layout from '../components/template/Layout'
import Clientes from './clientes'
import Estoque from './estoque'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Layout
        titulo="Página Inicial"
        subtitulo="Estamos construindo um template"
      >
        <h1>conteúdo</h1>
        <div className="flex ">
          <div
            className="bg-gradient-to-r from-blue-700 to-purple-900 p-5 rounded-md mr-5 hover:cursor-pointer"
            onClick={() => router.push('/estoque')}
          >
            Estoque
          </div>
          <div
            className="bg-gradient-to-r from-blue-700 to-purple-900 p-5 rounded-md hover:cursor-pointer"
            onClick={() => router.push('/clientes')}
          >
            Clientes
          </div>
        </div>
      </Layout>
    </div>
  )
}
