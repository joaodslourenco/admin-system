import MenuItem from './MenuItem'
import { IconeAjustes, IconeHome, IconeNotificacoes } from '../icons'

export default function MenuLateral() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" texto="Início" icone={IconeHome} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem
          url="/notificacoes"
          texto="Notificações"
          icone={IconeNotificacoes}
        />
      </ul>
    </aside>
  )
}
