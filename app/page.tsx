import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Brain, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Bienvenidos a AI Secure Consultores</h1>
        <p className="text-xl mb-8">Expertos en ciberseguridad para productos de inteligencia artificial</p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/contacto">Contactar</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/servicios">Conocer Servicios</Link>
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'Auditorías de Seguridad', description: 'Evaluamos la seguridad de tus productos de IA' },
            { icon: Brain, title: 'Implementación Segura', description: 'Asesoramos en la implementación segura de IA' },
            { icon: Users, title: 'Formación', description: 'Capacitamos a tu equipo en ciberseguridad y IA' },
            { icon: Zap, title: 'Soporte Continuo', description: 'Ofrecemos monitoreo y soporte continuo' },
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
            <p>Años de experiencia en ciberseguridad e IA</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Innovación</h3>
            <p>Siempre a la vanguardia de las últimas tecnologías</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Compromiso</h3>
            <p>Dedicados a proteger tus activos digitales</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Últimas Noticias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Nuevo servicio de auditoría de IA', date: '15 de Mayo, 2023' },
            { title: 'Webinar: Seguridad en Chatbots', date: '22 de Mayo, 2023' },
            { title: 'Publicación de whitepaper sobre IA ética', date: '1 de Junio, 2023' },
          ].map((news, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{news.date}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}