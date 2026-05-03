import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DatePicker } from "@/components/date-picker";


// Mock data, in a real app this would be fetched from an API or DB
const packagesData = {
  "turquia-dos-sonhos": {
    title: "Turquia dos Sonhos",
    duration: "10 Dias / 9 Noites",
    price: "R$ 9.500",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&q=80",
    description: "10 dias entre culturas, cores e paisagens únicas com a AJ Wings. Embarque em uma jornada mágica entre o oriente e o ocidente passando por Istambul, Capadócia, Pamukkale, Éfeso e Esmirna.",
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
      "Experiências culturais (banhos turcos, jantar típico)"
    ]
  },
  "paris-charme": {
    title: "O Charme de Paris",
    duration: "7 Dias / 6 Noites",
    price: "R$ 8.200",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600&q=80",
    description: "Descubra o charme de Paris conosco! Viagem inesquecível para a Cidade Luz com hospedagem de luxo e passeios pelas paisagens mais românticas do mundo.",
    itinerary: [
      { day: "Chegada", desc: "Check-in em hotel de luxo." },
      { day: "Torre Eiffel e Sena", desc: "Passeio icônico." },
      { day: "Museus e Arte", desc: "Passeios culturais inesquecíveis." },
    ],
    included: [
      "Hospedagem de luxo",
      "Passeios incríveis",
      "Experiências inesquecíveis"
    ]
  },
  "maldivas-sonhos": {
    title: "Maldivas dos Sonhos",
    duration: "10 Dias",
    price: "R$ 15.000",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80",
    description: "10 dias no paraíso com a AJ Wings. Deixe-se levar pelas águas cristalinas e paisagens paradisíacas das Maldivas em resorts sobre o mar.",
    itinerary: [
      { day: "Chegada", desc: "Traslado de lancha ou hidroavião para o resort." },
      { day: "Dias Livres", desc: "Tempo para relaxar, mergulhar, fazer snorkel ou curtir um spa." },
    ],
    included: [
      "Hospedagem em bangalôs ou resorts de luxo sobre o mar",
      "Traslados de lancha ou hidroavião",
      "Café da manhã incluso (opção: meia pensão ou all inclusive)",
      "Tempo livre para atividades aquáticas e spa"
    ]
  },
  "egito-magico": {
    title: "Egito Mágico",
    duration: "10 Dias / 9 Noites",
    price: "R$ 8.800",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1600&q=80",
    description: "10 dias de história e mistério com a AJ Wings. Explore os tesouros das civilizações antigas em uma viagem incrível cruzando o Nilo.",
    itinerary: [
      { day: "Cairo", desc: "Visitas às Pirâmides e Esfinge." },
      { desc: "Passeio por templos grandiosos.", day: "Luxor" },
      { day: "Aswan e Cruzeiro", desc: "Navegação pelo Rio Nilo." },
    ],
    included: [
      "Cairo - Luxor - Aswan - Cruzeiro pelo Nilo",
      "Visitas às Pirâmides, Esfinge, Templos de Karnak e Vale dos Reis",
      "Acompanhamento de guia local",
      "Suporte em português e experiências culturais"
    ]
  },
  "descubra-italia": {
    title: "Descubra a Itália",
    duration: "10 Dias / 9 Noites",
    price: "R$ 11.500",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=80",
    description: "10 Dias inesquecíveis! Viva uma experiência única entre história, arte, moda e gastronomia conhecendo Roma, Florença, Veneza e Milão.",
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
      "Suporte em português"
    ]
  },
  "dubai-luxo": {
    title: "Dubai de Luxo",
    duration: "7 Dias",
    price: "R$ 12.000",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80",
    description: "Mergulhe no futuro sem deixar para trás o luxo e a tradição em 7 dias inesquecíveis com a AJ Wings.",
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
      "Suporte completo em português"
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(packagesData).map((id) => ({
    id: id,
  }));
}

export default async function PackageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const pkg = packagesData[resolvedParams.id as keyof typeof packagesData];

  if (!pkg) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Hero Header */}
      <div className="relative w-full h-[60vh] md:h-[70vh] mb-12">
        <Image src={pkg.image} alt={pkg.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full container mx-auto px-6 pb-12">
          <div className="inline-block bg-secondary-container text-on-surface px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow-md mb-4">
            Em Destaque
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-serif text-white drop-shadow-lg">
            {pkg.title}
          </h1>
          <p className="text-xl text-white/90 mt-2 font-medium flex items-center gap-2">
            <span>{pkg.duration}</span>
            <span className="opacity-50">•</span>
            <span>Aventura de Luxo</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        {/* Left Column: Content (65%) */}
        <div className="lg:col-span-8 space-y-16">
          <section>
            <h2 className="text-3xl font-bold text-serif text-on-surface mb-6">Sobre a Jornada</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              {pkg.description}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-serif text-on-surface mb-6">O que está incluído</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {pkg.included.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-surface-container-low p-4 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    ✓
                  </div>
                  <span className="font-medium opacity-90">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-serif text-on-surface mb-8">Itinerário</h2>
            <div className="space-y-6">
              {pkg.itinerary.map((item, idx) => (
                <div key={idx} className="flex gap-6 group hover:bg-surface-container-low p-4 -ml-4 rounded-xl transition-colors duration-300">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary text-sm shadow-sm">
                      {idx + 1}
                    </div>
                    {idx !== pkg.itinerary.length - 1 && (
                      <div className="w-0.5 h-full bg-surface-container-highest mt-2" />
                    )}
                  </div>
                  <div className="flex flex-col justify-center pb-8">
                    <h3 className="font-bold text-lg mb-1">{item.day}</h3>
                    <p className="opacity-80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Booking Card (35%) */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-surface-container-highest rounded-2xl p-8 shadow-[0_16px_48px_-12px_rgba(27,28,25,0.1)]">
            <div className="flex items-baseline gap-2 mb-6 border-b-2 border-on-surface/5 pb-6">
              <span className="text-4xl font-bold text-primary">{pkg.price}</span>
              <span className="opacity-60 text-sm">/ por pessoa</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <DatePicker label="Data de Partida" />
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold opacity-80 text-on-surface">Número de Pessoas</label>
                <select className="bg-surface rounded-lg px-4 py-3 border-none outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                  <option>1 Viajante</option>
                  <option>2 Viajantes</option>
                  <option>3 Viajantes</option>
                  <option>4+ Viajantes</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-primary-foreground py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-primary/20 flex justify-center items-center gap-2">
              Reservar Agora
            </button>
            <p className="text-center text-xs opacity-50 mt-4">
              Não cobraremos nada no momento. Você será direcionado para contato.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
