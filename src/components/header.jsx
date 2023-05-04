import logo from '/logo.png'


function Header() {


  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="" className="logo" />
      </div>

      <nav>
        <a href="/" id='link-home'>HOME</a>
        <a href="/produtos" id='link-produtos'>PRODUTOS</a>
        <a href="/login" id='link-login'>LOGIN</a>
      </nav>
    </header>
  );
}

export {Header};
