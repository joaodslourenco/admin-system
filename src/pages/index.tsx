import Cabecalho from '../components/template/Cabecalho'
import Layout from '../components/template/Layout'
import MenuLateral from '../components/template/MenuLateral'

export default function Home() {
  return (
    <div>
      <Layout
        titulo="Página Inicial"
        subtitulo="Estamos construindo um template"
      >
        <h1>conteúdo</h1>
      </Layout>
    </div>
  )
}
