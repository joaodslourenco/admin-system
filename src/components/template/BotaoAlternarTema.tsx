import { IconeLua, IconeSol } from '../icons'

interface BotaoAlternarTemaProps {
  tema: string
  alternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
  return props.tema === 'dark' ? (
    <div
      onClick={props.alternarTema}
      className={`hidden sm:flex items-center cursor-pointer bg-gradient-to-r from-yellow-300 to-yellow-600 h-8 w-14 lg:w-24 p-1 rounded-full`}
    >
      <div className="flex items-center justify-center bg-white text-yellow-400 rounded-full h-6 w-6 p-0.5 mr-3.5">
        {IconeSol}
      </div>
      <div className={`hidden lg:flex items-center text-white text-sm`}>
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.alternarTema}
      className={`hidden sm:flex items-center justify-end cursor-pointer bg-gradient-to-r from-gray-500 to-gray-900 h-8 w-14 lg:w-24 p-1 rounded-full`}
    >
      <div className={`hidden lg:flex items-center text-gray-300 text-sm`}>
        <span>Escuro</span>
      </div>
      <div className="flex items-center justify-center bg-black text-yellow-300 rounded-full h-6 w-6 p-0.5 ml-2">
        {IconeLua}
      </div>
    </div>
  )
}
