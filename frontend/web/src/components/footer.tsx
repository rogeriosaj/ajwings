import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low text-on-surface py-12 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-serif text-primary mb-4">AJ Wings</h3>
          <p className="text-sm opacity-80 max-w-sm">
            Descubra o mundo através de jornadas que misturam a herança cultural e aventuras luxuosas. Seu próximo destino aguarda.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-serif">Navegação</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link href="/#home" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/#sobre" className="hover:text-primary transition-colors">Sobre</Link></li>
            <li><Link href="/#pacotes" className="hover:text-primary transition-colors">Pacotes</Link></li>
            <li><Link href="/#contato" className="hover:text-primary transition-colors">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-serif">Contato</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Email: contato@ajwings.com.br</li>
            <li>Telefone: +55 (11) 99999-9999</li>
            <li>Endereço: Av. Paulista, 1000 - São Paulo, SP</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-on-surface/10 text-center text-sm opacity-60">
        &copy; {new Date().getFullYear()} AJ Wings Turismo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
