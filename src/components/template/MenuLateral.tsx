import MenuItem from './MenuItem'
import { IconeAjustes, IconeHome, IconeLogout, IconeAlertas } from '../icons'
import Logo from './Logo'
import useAuth from '../../data/hook/useAuth'

export default function MenuLateral() {
  const { logout } = useAuth()

  return (
    <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
      <div
        className={`h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col items-center justify-center`}
      >
        <Logo />
      </div>

      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={IconeHome} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/alertas" texto="Alertas" icone={IconeAlertas} />
      </ul>
      <ul>
        <MenuItem
          texto="Sair"
          icone={IconeLogout}
          onClick={logout}
          className="text-red-500 dark:text-red-400 hover:bg-red-500 hover:text-white dark:hover:text-white"
        />
      </ul>
    </aside>
  )
}
