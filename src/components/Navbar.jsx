function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menuPrincipal">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link active" href="#inicio">
                  Início
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#destaques">
                  Destaques
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#turismo">
                  Turismo
                </a>
              </li>

            </ul>

          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;