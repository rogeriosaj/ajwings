import Image from "next/image";
import Link from "next/link";
import { getFeaturedPackages } from "@/features/pacotes/data/packages";

const packages = getFeaturedPackages();

export function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <section id="home" className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80" alt="Beautiful destination" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold text-serif text-white mb-6 drop-shadow-lg">
            A Jornada da Sua Vida Começa Aqui
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 font-sans max-w-2xl drop-shadow-md">
            Descubra o mundo através de um luxo autêntico e inesquecível.
          </p>
          <Link href="#pacotes" className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-md text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-xl">
            Ver Destinos
          </Link>
        </div>
      </section>

      <section id="sobre" className="py-24 bg-surface relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80" alt="Sobre a AJ Wings" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2 flex flex-col items-start text-left">
            <span className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Nossa Herança</span>
            <h2 className="text-4xl md:text-5xl text-serif font-bold mb-6 text-on-surface">A Caravana Moderna</h2>
            <p className="text-lg opacity-80 mb-6 leading-relaxed max-w-lg">
              Na AJ Wings, acreditamos que viajar não é apenas ir de um ponto A para um ponto B. É sobre a herança que você descobre ao longo do caminho. Combinamos o peso estrutural da hospitalidade clássica com a fluidez moderna.
            </p>
            <p className="text-lg opacity-80 leading-relaxed max-w-lg">
              Nossa missão é curar experiências em destinos exóticos com o máximo de luxo, transformando sua viagem em uma verdadeira caravana moderna.
            </p>
          </div>
        </div>
      </section>

      <section id="pacotes" className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-serif font-bold mb-4 text-on-surface">Descubra Nossos Pacotes</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Jornadas cuidadosamente elaboradas para proporcionar conforto supremo e imersão cultural.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Link href={`/pacotes/${pkg.id}`} key={pkg.id} className="group bg-surface flex flex-col rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={pkg.image} alt={pkg.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-secondary-container text-on-surface px-3 py-1 rounded-full text-xs font-bold uppercase shadow-md">
                    Novo
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-surface-container-highest">
                  <h3 className="text-2xl font-bold text-serif mb-2">{pkg.title}</h3>
                  <p className="opacity-70 mb-6">{pkg.duration}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-primary font-bold text-xl">{pkg.price}</span>
                    <span className="text-secondary font-bold text-sm border-b-2 border-secondary group-hover:border-transparent transition-colors pb-1">
                      Detalhes
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl text-serif font-bold mb-6 text-on-surface">Pronto para Voar?</h2>
          <p className="text-lg opacity-80 mb-12">
            Deixe-nos cuidar de todos os detalhes. Entre em contato com nossos consultores de viagem.
          </p>

          <form className="bg-surface-container-highest p-8 md:p-12 rounded-xl shadow-xl flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold opacity-80">Nome Completo</label>
              <input type="text" placeholder="Seu nome" className="bg-transparent border-b-2 border-on-surface/20 focus:border-primary outline-none py-2 transition-colors duration-300" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold opacity-80">Email</label>
              <input type="email" placeholder="seu@email.com" className="bg-transparent border-b-2 border-on-surface/20 focus:border-primary outline-none py-2 transition-colors duration-300" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold opacity-80">Mensagem</label>
              <textarea placeholder="Como podemos ajudar?" rows={3} className="bg-transparent border-b-2 border-on-surface/20 focus:border-primary outline-none py-2 transition-colors duration-300 resize-none"></textarea>
            </div>
            <button type="button" className="mt-4 bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-md font-bold hover:scale-[1.02] transition-transform shadow-lg">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
