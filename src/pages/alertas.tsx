import Layout from '../components/template/Layout'

import useAppData from '../data/hook/useAppData'

export default function notificacoes() {
  const { alternarTema } = useAppData()

  return (
    <div>
      <Layout
        titulo="Alertas"
        subtitulo="Aqui você vai gerenciar suas notificações."
      >
        <button onClick={alternarTema}>Alternar</button>
      </Layout>
    </div>
  )
}
