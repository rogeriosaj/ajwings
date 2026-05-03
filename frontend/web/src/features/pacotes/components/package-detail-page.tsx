import Image from "next/image";
import { DatePicker } from "@/components/date-picker";
import type { TravelPackage } from "@/features/pacotes/data/packages";

type PackageDetailPageProps = {
  pkg: TravelPackage;
};

export function PackageDetailPage({ pkg }: PackageDetailPageProps) {
  return (
    <div className="flex flex-col w-full pb-24">
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
