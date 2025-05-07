import logo from '../../assets/wizybot-logo.png'

const Header = () => {
  return (
    <header className='container mx-auto flex justify-between items-center p-4   shadow-sm'>
      <div className='flex-shrink-0'>
        <a href='/'>
          <img src={logo} alt='WizyBot' className='h-10' />
        </a>
      </div>
      <nav className='hidden sm:block bg-gradient-to-b from-gray-900 to-stone-950 text-white  px-4 py-2 rounded-2xl'>
        <div className='max-w-7xl mx-auto  '>
          <div className='flex gap-6 text-sm font-medium'>
            <a href='#'>Inicio</a>
            <a href='#'>Chatbot</a>
            <a href='#'>Nosotros</a>
            <a href='#'>Producto</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
