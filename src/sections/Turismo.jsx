const destinos = [
  {
    pais: "Brasil",
    destino: "Rio de Janeiro",
    imagem: "/img/turismo/1. Brasil  Rio de Janeiro.jpg",
    descricao:
      "Conheça praias famosas, o Cristo Redentor e uma das cidades mais vibrantes da América do Sul.",
  },
  {
    pais: "Peru",
    destino: "Machu Picchu",
    imagem: "/img/turismo/Peru  Machu Picchu.jpg",
    descricao:
      "Explore a antiga cidade Inca cercada pelas montanhas dos Andes.",
  },
  {
    pais: "Chile",
    destino: "Deserto do Atacama",
    imagem: "/img/turismo/3. Chile  Deserto do Atacama.jpg",
    descricao:
      "Descubra paisagens incríveis, vulcões, lagoas e um dos céus mais limpos do mundo.",
  },
  {
    pais: "Argentina",
    destino: "Buenos Aires",
    imagem: "/img/turismo/Argentina  Buenos Aires.jpg",
    descricao:
      "Conheça a capital argentina, famosa pela arquitetura, pelo tango e pela gastronomia.",
  },
  {
    pais: "Colômbia",
    destino: "Cartagena",
    imagem: "/img/turismo/Colômbia  Cartagena.jpg",
    descricao:
      "Explore uma cidade histórica com arquitetura colonial, praias e muita cultura.",
  },
  {
    pais: "Bolívia",
    destino: "Salar de Uyuni",
    imagem: "/img/turismo/6. Bolívia Salar de Uyuni.jpg",
    descricao:
      "Visite o maior deserto de sal do mundo e suas paisagens impressionantes.",
  },
  {
    pais: "Equador",
    destino: "Ilhas Galápagos",
    imagem: "/img/turismo/Equador Ilhas Galápagos.jpg",
    descricao:
      "Conheça um arquipélago único, famoso por sua biodiversidade e natureza preservada.",
  },
  {
    pais: "Guiana",
    destino: "Kaieteur Falls",
    imagem: "/img/turismo/Guiana Kaieteur Falls.jpg",
    descricao:
      "Admire uma das maiores quedas-d'água do mundo em meio à floresta amazônica.",
  },
  {
    pais: "Paraguai",
    destino: "Assunção",
    imagem: "/img/turismo/Paraguai  Assunção.jpg",
    descricao:
      "Conheça a capital paraguaia e sua mistura de história, cultura e vida urbana.",
  },
  {
    pais: "Suriname",
    destino: "Paramaribo",
    imagem: "/img/turismo/Suriname  Paramaribo.jpg",
    descricao:
      "Explore a capital do Suriname, marcada pela diversidade cultural e arquitetura histórica.",
  },
  {
    pais: "Uruguai",
    destino: "Punta del Este",
    imagem: "/img/turismo/Uruguai Punta del Este.jpg",
    descricao:
      "Aproveite praias, paisagens e um dos destinos turísticos mais famosos do Uruguai.",
  },
  {
    pais: "Venezuela",
    destino: "Salto Ángel",
    imagem: "/img/turismo/Venezuela Salto Ángel.jpg",
    descricao:
      "Conheça a maior queda-d'água do mundo, localizada em uma região de natureza exuberante.",
  },
];

function Turismo() {
  return (
    <section id="turismo" className="py-5">
      <div className="container">

        <div className="page-header text-center mb-5">
          <span>AMÉRICA DO SUL</span>

          <h1>Destinos incríveis</h1>

          <p>
            Descubra lugares fascinantes e experiências únicas por toda a
            América do Sul.
          </p>
        </div>

        <div className="row g-4">

          {destinos.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.destino}>

              <div className="tourism-card h-100">

                <div className="tourism-image">
                  <img
                    src={item.imagem}
                    alt={item.destino}
                  />
                </div>

                <div className="tourism-content p-4">

                  <span>{item.pais}</span>

                  <h2 className="mt-2">
                    {item.destino}
                  </h2>

                  <p className="mt-3">
                    {item.descricao}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Turismo;