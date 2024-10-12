import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SobreNosotros() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nosotros</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="mb-4">
            AI Secure Consultores nació en 2018 de la visión de un grupo de expertos en ciberseguridad e inteligencia artificial. Identificamos la creciente necesidad de servicios especializados en seguridad para productos de IA y decidimos llenar ese vacío en el mercado.
          </p>
          <p>
            Desde entonces, hemos crecido hasta convertirnos en líderes en el campo, trabajando con empresas de todos los tamaños para asegurar sus innovaciones en IA.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Equipo de AI Secure Consultores"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Nuestra Misión y Visión</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Proporcionar servicios de ciberseguridad de vanguardia para productos de IA, garantizando la integridad, confidencialidad y disponibilidad de los sistemas de nuestros clientes.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ser reconocidos globalmente como los líderes indiscutibles en seguridad para IA, impulsando la innovación segura y ética en el campo de la inteligencia artificial.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Nuestro Enfoque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Innovación Continua</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Nos mantenemos a la vanguardia de las últimas tendencias en IA y ciberseguridad para ofrecer soluciones innovadoras.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enfoque Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Adaptamos nuestros servicios a las necesidades específicas de cada cliente, reconociendo que cada proyecto de IA es único.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ética y Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Promovemos el desarrollo y uso ético de la IA, considerando siempre el impacto social y ético de nuestras soluciones.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Nuestros Logros</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>Más de 100 auditorías de seguridad en productos de IA realizadas con éxito</li>
          <li>Reconocidos como "Consultores de Seguridad en IA del Año" por TechSecurity Magazine en 2022</li>
          <li>Colaboraciones con instituciones académicas líderes en investigación de seguridad en IA</li>
          <li>Desarrollo de herramientas de código abierto para la evaluación de seguridad en modelos de IA</li>
        </ul>
      </section>
    </div>
  );
}