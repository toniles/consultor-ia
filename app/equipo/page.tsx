import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Ana Rodríguez',
    role: 'CEO y Especialista en IA',
    bio: 'Con más de 15 años de experiencia en IA y ciberseguridad, Ana lidera nuestra visión de un futuro digital seguro.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Carlos Méndez',
    role: 'CTO',
    bio: 'Experto en arquitecturas de seguridad para IA, Carlos asegura que nuestras soluciones estén a la vanguardia tecnológica.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Laura Fernández',
    role: 'Directora de Investigación',
    bio: 'PhD en Ciencias de la Computación, Laura lidera nuestros esfuerzos de investigación en seguridad de IA.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Miguel Torres',
    role: 'Líder de Consultoría',
    bio: 'Con una amplia experiencia en consultoría, Miguel asegura que nuestros clientes reciban el mejor asesoramiento posible.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

export default function Equipo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestro Equipo</h1>
      <p className="text-xl text-center mb-12">
        Contamos con un equipo de expertos dedicados a la seguridad en IA y ciberseguridad.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Innovación</h3>
            <p>Buscamos constantemente nuevas formas de mejorar la seguridad en IA.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Integridad</h3>
            <p>Actuamos con honestidad y transparencia en todo lo que hacemos.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Excelencia</h3>
            <p>Nos esforzamos por ofrecer el más alto nivel de calidad en nuestros servicios.</p>
          </div>
        </div>
      </section>
    </div>
  );
}