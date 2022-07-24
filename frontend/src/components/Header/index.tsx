import logo from '../../assests/img/logo.svg'

import './style.css'

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="dsmeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por 
          <a href="https://github.com/Alexdevsoft"> Alexsandro Almeida</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
