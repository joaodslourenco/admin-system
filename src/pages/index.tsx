import Layout from '../components/template/Layout'
import Clientes from './clientes'
import Estoque from './estoque'

export default function Home() {
  return (
    <div>
      <Layout
        titulo="Página Inicial"
        subtitulo="Estamos construindo um template"
      >
        <h1>conteúdo</h1>
        <div className="flex">
          <Estoque />
          <Clientes />
        </div>
      </Layout>
    </div>
  )
}
