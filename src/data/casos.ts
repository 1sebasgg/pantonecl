export interface Caso {
  id: number;
  title: string;
  category: string;
  image?: string;
  year?: number;
  location?: string;
}

export const MOCK_CASOS: Caso[] = [
  {
    id: 1,
    title: "Edificio Consorcio",
    category: "Edificios",
    image: "/casos/Edificio Consorcio.webp",
    year: 1990,
    location: "Borja Huidobro + Enrique Browne, Las Condes"
  },
  {
    id: 2,
    title: "Casa Klotz",
    category: "Casas",
    image: "/casos/Casa Klotz.webp",
    year: 1991,
    location: "Mathias Klotz, Tongoy"
  },
  {
    id: 3,
    title: "Pabellón de Chile Expo Sevilla",
    category: "Cultural",
    image: "/casos/Pabellón Exposición de Sevilla.webp",
    year: 1992,
    location: "Germán del Sol + José Cruz, Sevilla"
  },
  {
    id: 4,
    title: "Condominio Golf de Manquehue",
    category: "Casas",
    image: "/casos/Condominio Golf de Manquehue.webp",
    year: 1993,
    location: "Cristián Undurraga, Ana Devés, Lo Barnechea"
  },
  {
    id: 5,
    title: "Casa El Cóndor",
    category: "Casas",
    image: "/casos/Casa el Cóndor.webp",
    year: 1993,
    location: "Christian de Groote + Camila del Fierro, Vitacura"
  },
  {
    id: 6,
    title: "Hotel Explora Patagonia",
    category: "Hotel",
    image: "/casos/Explora Patagonia.webp",
    year: 1995,
    location: "Germán del Sol + José Cruz, Torres del Paine"
  },
  {
    id: 7,
    title: "Edificio Banmédica",
    category: "Edificios",
    image: "/casos/Edificio Banmédica.webp",
    year: 1996,
    location: "Borja Huidobro + A4 Arquitectos, Las Condes"
  },
  {
    id: 8,
    title: "Casa Do",
    category: "Casas",
    image: "/casos/Casa Do.webp",
    year: 2001,
    location: "Cazú Zegers, Los Vilos"
  },
  {
    id: 9,
    title: "Casa Bahía Azul",
    category: "Casas",
    image: "/casos/Casa Bahía Azul.webp",
    year: 2002,
    location: "Cecilia Puga, Los Vilos"
  },
  {
    id: 10,
    title: "Centro Cultural Matucana 100",
    category: "Cultural",
    image: "/casos/Centro Cultural Matucana 100.webp",
    year: 2002,
    location: "Martín Hurtado Arquitectos Asociados, Estación Central"
  },
  {
    id: 11,
    title: "Casa Poli",
    category: "Casas",
    image: "/casos/Casa Poli.webp",
    year: 2005,
    location: "Pezo von Ellrichshausen, Concepción"
  },
  {
    id: 12,
    title: "Torres Siamesas",
    category: "Edificios",
    image: "/casos/Torres Siamesas.webp",
    year: 2005,
    location: "Alejandro Aravena + Ricardo Torrejón + Charles Murray + Alfonso Montero, San Joaquín"
  },
  {
    id: 13,
    title: "Edificio MOPTT La Serena",
    category: "Edificios",
    image: "/casos/Edificio MOPTT La Serena.webp",
    year: 2005,
    location: "Teodoro Fernández Arquitectos, La Serena"
  },
  {
    id: 14,
    title: "Municipalidad de Vitacura",
    category: "Institucional",
    image: "/casos/Municipalidad de Vitacura.webp",
    year: 2006,
    location: "Iglesis Prat Arquitectos, Vitacura"
  },
  {
    id: 15,
    title: "Casa Chilena 1 y 2",
    category: "Casas",
    image: "/casos/Casa Chilena 1 y 2.webp",
    year: 2006,
    location: "Smiljan Radic, Rancagua"
  },
  {
    id: 16,
    title: "Restaurant Mestizo",
    category: "Institucional",
    image: "/casos/Restaurant Mestizo.webp",
    year: 2007,
    location: "Smiljan Radic, Vitacura"
  },
  {
    id: 17,
    title: "Duoc Eliodoro Yáñez",
    category: "Institucional",
    image: "/casos/Duoc Eliodoro Yañez.webp",
    year: 2007,
    location: "Sabbagh Arquitectos, Providencia"
  },
  {
    id: 18,
    title: "Centro Cultural Gabriela Mistral",
    category: "Cultural",
    image: "/casos/Centro Cultural Gabriela Mistral.webp",
    year: 2008,
    location: "Cristián Fernández Arquitectos + Lateral Arquitectura y diseño, Santiago"
  },
  {
    id: 19,
    title: "Capilla del Retiro",
    category: "Cultural",
    image: "/casos/Capilla del Retiro.webp",
    year: 2009,
    location: "Undurraga Devés Arquitectos, Calle Larga"
  },
  {
    id: 20,
    title: "Termas Geométricas",
    category: "Cultural",
    image: "/casos/Termas Geométricas.webp",
    year: 2009,
    location: "Germán del Sol, Coñaripe"
  },
  {
    id: 21,
    title: "Edificio Cruz del Sur",
    category: "Edificios",
    image: "/casos/Edificio Cruz del Sur.webp",
    year: 2009,
    location: "Izquierdo Lehmann Arquitectos, Las Condes"
  },
  {
    id: 22,
    title: "Casa Cien",
    category: "Casas",
    image: "/casos/Casa Cien.webp",
    year: 2011,
    location: "Pezo Von Ellrichshausen, Concepción"
  },
  {
    id: 23,
    title: "Casa MAVA",
    category: "Casas",
    image: "/casos/Casa MAVA.webp",
    year: 2011,
    location: "Pezo von Ellrichshausen, Zapallar"
  },
  {
    id: 24,
    title: "Parque Cultural Valparaíso",
    category: "Cultural",
    image: "/casos/Parque cultural de Valparaíso.webp",
    year: 2011,
    location: "HLPS, Valparaíso"
  },
  {
    id: 25,
    title: "Casa Oruga",
    category: "Casas",
    image: "/casos/Casa Oruga.webp",
    year: 2012,
    location: "Sebastián Irarrázaval, Lo Barnechea"
  },
  {
    id: 26,
    title: "Casa Gago",
    category: "Casas",
    image: "/casos/Casa Gago.webp",
    year: 2013,
    location: "Pezo von Ellrichshausen, San Pedro de La Paz"
  },
  {
    id: 27,
    title: "Casa para el Poema del Ángulo Recto",
    category: "Casas",
    image: "/casos/Casa para el Poema del Ángulo Recto.webp",
    year: 2013,
    location: "Smiljan Radic, Vilches"
  },
  {
    id: 28,
    title: "Pabellón de Cuatro Usos",
    category: "Cultural",
    image: "/casos/Pabellón de Cuatro Usos.webp",
    year: 2014,
    location: "Pezo von Ellrichshausen, Concepción"
  },
  {
    id: 29,
    title: "Centro de Innovación UC",
    category: "Institucional",
    image: "/casos/Centro de innovación UC.webp",
    year: 2014,
    location: "Alejandro Aravena, San Joaquín"
  },
  {
    id: 30,
    title: "Edificio BCI",
    category: "Edificios",
    image: "/casos/Edificio BCI.webp",
    year: 2015,
    location: "Borja Huidobro + A4 Arquitectos, Las Condes"
  },
  {
    id: 31,
    title: "Biblioteca Pública de Constitución",
    category: "Cultural",
    image: "/casos/Biblioteca Pública de Constitución.webp",
    year: 2015,
    location: "Sebastián Irarrázaval, Constitución"
  },
  {
    id: 32,
    title: "Cabaña Shangrila",
    category: "Casas",
    image: "/casos/Cabaña Shangrila.webp",
    year: 2016,
    location: "DDRA + Magdalena Besomi, Pinto"
  },
  {
    id: 33,
    title: "Municipalidad de Lo Barnechea",
    category: "Institucional",
    image: "/casos/Municipalidad Lo Barnechea.webp",
    year: 2017,
    location: "Gonzalo Mardones V Arquitectos, Lo Barnechea"
  },
  {
    id: 34,
    title: "Parroquia Todos los Santos",
    category: "Cultural",
    image: "/casos/Parroquia Todos los Santos.webp",
    year: 2018,
    location: "Gonzalo Mardones V Arquitectos, Talcahuano"
  },
  {
    id: 35,
    title: "Casa de Vidrio",
    category: "Casas",
    image: "/casos/Casa de Vidrio.webp",
    year: 2018,
    location: "Max Núñez, Pirque"
  },
  {
    id: 36,
    title: "Casa H",
    category: "Casas",
    image: "/casos/Casa H.webp",
    year: 2018,
    location: "Felipe Assadi Arquitectos, Zapallar"
  },
  {
    id: 37,
    title: "Centro de Innovación INES",
    category: "Institucional",
    image: "/casos/Centro de Innovación Inés.webp",
    year: 2018,
    location: "Pezo Von Ellrichshausen, Concepción"
  },
  {
    id: 38,
    title: "Casa Ocho Quebradas",
    category: "Casas",
    image: "/casos/Casa Ocho Quebradas.webp",
    year: 2018,
    location: "ELEMENTAL, Los Vilos"
  },
  {
    id: 39,
    title: "Casa Prisma",
    category: "Casas",
    image: "/casos/Casa Prisma.webp",
    year: 2018,
    location: "Smiljan Radic, Congullío"
  },
  {
    id: 40,
    title: "Casa Malalcahuello",
    category: "Casas",
    image: "/casos/Casa Malalcahuello.webp",
    year: 2019,
    location: "GAAA, Malalcahuello"
  },
  {
    id: 41,
    title: "Facultad de Economía y Administración USACH",
    category: "Institucional",
    image: "/casos/Facultad de Economía y Administración USACH.webp",
    year: 2021,
    location: "Marsino Arquitectura, Santiago"
  },
  {
    id: 42,
    title: "Teatro Municipal de Constitución",
    category: "Cultural",
    image: "/casos/Teatro Municipal de Constitución.webp",
    year: 2023,
    location: "Alejandro Aravena + ELEMENTAL, Constitución"
  },
  {
    id: 43,
    title: "Museo Regional de Atacama",
    category: "Cultural",
    image: "/casos/Museo Regional de Atacama.webp",
    year: 2024,
    location: "Max Núñez, Copiapó"
  },
];
