import { assets } from '../utils/assets'

const Header = (): JSX.Element => {
  return (
    <header className={'w-full h-16 px-3 flex items-center justify-between bg-primaryRed1'}>
      <h1 className="text-3xl font-bold text-white">
        Mesas
      </h1>
      <a href='/config'>
        <img
        className="w-8 h-8 ml-auto"
        src={assets.gear}
        alt="Configuración"
        />
      </a>
    </header>
  )
}

export default Header
