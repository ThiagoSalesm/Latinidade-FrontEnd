const destaques = [
  {
    icone: "🌎",
    titulo: "Países",
    texto: "Conheça os países que formam a América do Sul e suas diferentes identidades.",
  },
  {
    icone: "✈️",
    titulo: "Turismo",
    texto: "Descubra destinos incríveis e experiências únicas pelo continente.",
  },
  {
    icone: "🍴",
    titulo: "Gastronomia",
    texto: "Explore os sabores e pratos tradicionais da América Latina.",
  },
  {
    icone: "🎭",
    titulo: "Cultura",
    texto: "Conheça as tradições, manifestações artísticas e histórias da nossa região.",
  },
];

function Destaques() {
  return (
    <section id="destaques" className="py-5">
      <div className="container">

        <div className="section-title text-center mb-4">
          <span>EXPLORE</span>
          <h2>Um continente, muitas histórias</h2>
        </div>

        <p className="intro-text text-center mx-auto mb-5">
          A América do Sul reúne diferentes povos, culturas, paisagens e
          tradições. Conheça um pouco dessa diversidade através da Latinidade.
        </p>

        <div className="row g-4">
          {destaques.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.titulo}>
              <div className="info-card h-100 p-4">

                <div className="card-icon mb-3">
                  {item.icone}
                </div>

                <h3>{item.titulo}</h3>

                <p>
                  {item.texto}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Destaques;