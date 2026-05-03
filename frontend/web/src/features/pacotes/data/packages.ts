export type ItineraryItem = {
  day: string;
  desc: string;
};

export type TravelPackage = {
  id: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  itinerary: ItineraryItem[];
  included: string[];
  featuredDuration: string;
  featuredImage: string;
};

const packages: TravelPackage[] = [
  {
    id: "turquia-dos-sonhos",
    title: "Turquia dos Sonhos",
    duration: "10 Dias / 9 Noites",
    featuredDuration: "10 Dias",
    price: "R$ 9.500",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&q=80",
    featuredImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    description:
      "10 dias entre culturas, cores e paisagens únicas com a AJ Wings. Embarque em uma jornada mágica entre o oriente e o ocidente passando por Istambul, Capadócia, Pamukkale, Éfeso e Esmirna.",
    itinerary: [
      { day: "Istambul", desc: "Chegada e passeios culturais guiados na cidade." },
      { day: "Capadócia", desc: "Passeio de balão (opcional) e vivência local." },
      { day: "Pamukkale", desc: "Visita às piscinas termais e paisagens únicas." },
      { day: "Éfeso e Esmirna", desc: "Imersão na história antiga." },
    ],
    included: [
      "Hospedagem em hotéis 4 e 5 estrelas",
      "Passeios guiados pelas regiões visitadas",
      "Passeio de balão na Capadócia (opcional)",
      "Experiências culturais (banhos turcos, jantar típico)",
    ],
  },
  {
    id: "paris-charme",
    title: "O Charme de Paris",
    duration: "7 Dias / 6 Noites",
    featuredDuration: "7 Dias",
    price: "R$ 8.200",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600&q=80",
    featuredImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600&q=80",
    description:
      "Descubra o charme de Paris conosco! Viagem inesquecível para a Cidade Luz com hospedagem de luxo e passeios pelas paisagens mais românticas do mundo.",
    itinerary: [
      { day: "Chegada", desc: "Check-in em hotel de luxo." },
      { day: "Torre Eiffel e Sena", desc: "Passeio icônico." },
      { day: "Museus e Arte", desc: "Passeios culturais inesquecíveis." },
    ],
    included: [
      "Hospedagem de luxo",
      "Passeios incríveis",
      "Experiências inesquecíveis",
    ],
  },
  {
    id: "maldivas-sonhos",
    title: "Maldivas dos Sonhos",
    duration: "10 Dias",
    featuredDuration: "10 Dias",
    price: "R$ 15.000",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80",
    featuredImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    description:
      "10 dias no paraíso com a AJ Wings. Deixe-se levar pelas águas cristalinas e paisagens paradisíacas das Maldivas em resorts sobre o mar.",
    itinerary: [
      { day: "Chegada", desc: "Traslado de lancha ou hidroavião para o resort." },
      { day: "Dias Livres", desc: "Tempo para relaxar, mergulhar, fazer snorkel ou curtir um spa." },
    ],
    included: [
      "Hospedagem em bangalôs ou resorts de luxo sobre o mar",
      "Traslados de lancha ou hidroavião",
      "Café da manhã incluso (opção: meia pensão ou all inclusive)",
      "Tempo livre para atividades aquáticas e spa",
    ],
  },
  {
    id: "egito-magico",
    title: "Egito Mágico",
    duration: "10 Dias / 9 Noites",
    featuredDuration: "10 Dias",
    price: "R$ 8.800",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1600&q=80",
    featuredImage: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&q=80",
    description:
      "10 dias de história e mistério com a AJ Wings. Explore os tesouros das civilizações antigas em uma viagem incrível cruzando o Nilo.",
    itinerary: [
      { day: "Cairo", desc: "Visitas às Pirâmides e Esfinge." },
      { day: "Luxor", desc: "Passeio por templos grandiosos." },
      { day: "Aswan e Cruzeiro", desc: "Navegação pelo Rio Nilo." },
    ],
    included: [
      "Cairo - Luxor - Aswan - Cruzeiro pelo Nilo",
      "Visitas às Pirâmides, Esfinge, Templos de Karnak e Vale dos Reis",
      "Acompanhamento de guia local",
      "Suporte em português e experiências culturais",
    ],
  },
  {
    id: "descubra-italia",
    title: "Descubra a Itália",
    duration: "10 Dias / 9 Noites",
    featuredDuration: "10 Dias",
    price: "R$ 11.500",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=80",
    featuredImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=80",
    description:
      "10 Dias inesquecíveis! Viva uma experiência única entre história, arte, moda e gastronomia conhecendo Roma, Florença, Veneza e Milão.",
    itinerary: [
      { day: "Roma", desc: "Imersão na história antiga." },
      { day: "Florença", desc: "Arte e renascimento." },
      { day: "Veneza", desc: "Passeios guiados pelos canais." },
      { day: "Milão", desc: "Moda e compras." },
    ],
    included: [
      "Hospedagem confortável em hotéis selecionados",
      "Traslados e passeios guiados",
      "Tempo livre para explorar, fazer compras e saborear a culinária",
      "Suporte em português",
    ],
  },
  {
    id: "dubai-luxo",
    title: "Dubai de Luxo",
    duration: "7 Dias",
    featuredDuration: "7 Dias",
    price: "R$ 12.000",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80",
    featuredImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    description:
      "Mergulhe no futuro sem deixar para trás o luxo e a tradição em 7 dias inesquecíveis com a AJ Wings.",
    itinerary: [
      { day: "Dubai", desc: "Passeios no Burj Khalifa e Dubai Marina." },
      { day: "Deserto", desc: "Safari no deserto com jantar típico." },
      { day: "Compras", desc: "Visita aos soks e maiores shoppings do mundo." },
    ],
    included: [
      "Hospedagem em hotéis 4 ou 5 estrelas",
      "Passeios principais (Burj Khalifa, Marina, Soks)",
      "Safari no deserto com jantar típico",
      "Tempo livre para compras",
      "Suporte completo em português",
    ],
  },
];

export function getPackageById(id: string) {
  return packages.find((pkg) => pkg.id === id) ?? null;
}

export function getPackageStaticParams() {
  return packages.map((pkg) => ({ id: pkg.id }));
}

export function getFeaturedPackages() {
  return packages.map(({ id, title, featuredDuration, price, featuredImage }) => ({
    id,
    title,
    duration: featuredDuration,
    price,
    image: featuredImage,
  }));
}
