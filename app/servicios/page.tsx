"use client"

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Brain, Users, Zap } from 'lucide-react';

const services = [
  {
    id: 'auditorias',
    title: 'Auditorías de Seguridad para Productos de IA',
    icon: Shield,
    description: 'Evaluamos exhaustivamente la seguridad de tus productos de IA para identificar vulnerabilidades y proponer soluciones.',
    benefits: [
      'Identificación de vulnerabilidades críticas',
      'Recomendaciones personalizadas',
      'Cumplimiento normativo',
      'Mejora de la confianza del cliente'
    ],
    process: [
      'Análisis inicial',
      'Pruebas de penetración',
      'Evaluación de algoritmos',
      'Informe detallado',
      'Plan de acción'
    ]
  },
  {
    id: 'implementacion',
    title: 'Asesoramiento en Implementación Segura de IA',
    icon: Brain,
    description: 'Guiamos a tu equipo en la implementación segura de soluciones de IA, asegurando las mejores prácticas desde el diseño.',
    benefits: [
      'Diseño seguro desde el inicio',
      'Reducción de riesgos',
      'Optimización de recursos',
      'Escalabilidad segura'
    ],
    process: [
      'Evaluación de requisitos',
      'Diseño de arquitectura segura',
      'Implementación guiada',
      'Pruebas de seguridad',
      'Revisión y mejora continua'
    ]
  },
  {
    id: 'formacion',
    title: 'Formación y Capacitación',
    icon: Users,
    description: 'Ofrecemos programas de formación personalizados para que tu equipo esté al día en ciberseguridad y IA.',
    benefits: [
      'Personal altamente capacitado',
      'Reducción de errores humanos',
      'Cultura de seguridad',
      'Adaptación a nuevas amenazas'
    ],
    process: [
      'Evaluación de necesidades',
      'Diseño del programa',
      'Sesiones teóricas y prácticas',
      'Evaluación y certificación',
      'Seguimiento y actualización'
    ]
  },
  {
    id: 'monitoreo',
    title: 'Monitoreo y Soporte Continuo',
    icon: Zap,
    description: 'Proporcionamos vigilancia constante y soporte inmediato para mantener tus sistemas de IA seguros en todo momento.',
    benefits: [
      'Detección temprana de amenazas',
      'Respuesta rápida a incidentes',
      'Actualizaciones de seguridad',
      'Paz mental'
    ],
    process: [
      'Implementación de sistemas de monitoreo',
      'Vigilancia 24/7',
      'Análisis de logs y alertas',
      'Respuesta a incidentes',
      'Informes periódicos'
    ]
  }
];

export default function Servicios() {
  const [activeTab, setActiveTab] = useState('auditorias');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <TabsTrigger key={service.id} value={service.id} className="text-sm lg:text-base">
              <service.icon className="w-5 h-5 mr-2" />
              {service.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {services.map((service) => (
          <TabsContent key={service.id} value={service.id}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <service.icon className="w-8 h-8 mr-4 text-primary" />
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Beneficios</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Proceso</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      {service.process.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}