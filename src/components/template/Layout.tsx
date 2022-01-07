import useAppData from '../../data/hook/useAppData'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import MenuLateral from './MenuLateral'

interface LayoutProps {
  titulo: string
  subtitulo: string
  children?: any
}

export default function Layout(props: LayoutProps) {
  const { tema } = useAppData()

  return (
    <div className={`flex h-screen w-screen ${tema}`}>
      <MenuLateral />
      <div className={`flex flex-col w-full bg-gray-300 dark:bg-gray-800 p-7`}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  )
}
