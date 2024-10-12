import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Secure Consultores</h3>
            <p className="text-muted-foreground">
              Consultoría de ciberseguridad especializada en productos generados con inteligencia artificial.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/servicios" className="text-muted-foreground hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link href="/recursos" className="text-muted-foreground hover:text-primary transition-colors">Recursos</Link></li>
              <li><Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-muted-foreground">Email: info@aisecure.com</p>
            <p className="text-muted-foreground">Teléfono: +34 123 456 789</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI Secure Consultores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;