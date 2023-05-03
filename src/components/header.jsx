import logo from '/logo.png'


function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="" className="logo" />
      </div>

      <nav>
        <a href="/" className='selecionada'>HOME</a>
        <a href="/produtos" className=''>PRODUTOS</a>
        <a href="/login" className=''>LOGIN</a>
      </nav>
    </header>
  );
}

export {Header};
