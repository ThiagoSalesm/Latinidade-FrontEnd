function Footer() {
  return (
    <footer className="py-5">
      <div className="container text-center">

        <h2>
          LATINIDADE
        </h2>

        <p>
          Descobrindo a América do Sul.
        </p>

        <div className="footer-links d-flex justify-content-center flex-wrap gap-4">
          <a href="#inicio">Início</a>
          <a href="#destaques">Destaques</a>
          <a href="#turismo">Turismo</a>
        </div>

        <p className="copyright mt-4 pt-3 mb-0">
          2026 Latinidade - Projeto Front-End
        </p>

      </div>
    </footer>
  );
}

export default Footer;