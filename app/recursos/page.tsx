"use client"

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FileText, Video, Calendar } from 'lucide-react';

const resources = {
  blog: [
    { title: 'Tendencias en Ciberseguridad para IA en 2023', date: '10 de Mayo, 2023' },
    { title: 'Cómo proteger tus modelos de IA contra ataques adversarios', date: '5 de Mayo, 2023' },
    { title: 'Ética en IA: Consideraciones de seguridad', date: '1 de Mayo, 2023' },
  ],
  whitepapers: [
    { title: 'Guía completa de seguridad para sistemas de IA', description: 'Un análisis profundo de las mejores prácticas de seguridad en IA.' },
    { title: 'Protección de datos en el entrenamiento de modelos de IA', description: 'Estrategias para asegurar la privacidad de los datos en el proceso de entrenamiento.' },
    { title: 'Auditoría de seguridad para chatbots y asistentes virtuales', description: 'Metodología detallada para evaluar la seguridad de asistentes de IA.' },
  ],
  webinars: [
    { title: 'Introducción a la Ciberseguridad en IA', date: '15 de Junio, 2023', time: '18:00 CEST' },
    { title: 'Detección de Amenazas en Sistemas de IA', date: '22 de Junio, 2023', time: '17:00 CEST' },
    { title: 'Implementación Segura de Modelos de IA en Producción', date: '29 de Junio, 2023', time: '19:00 CEST' },
  ]
};

export default function Recursos() {
  const [activeTab, setActiveTab] = useState('blog');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Recursos</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="blog">
            <FileText className="w-5 h-5 mr-2" />
            Blog
          </TabsTrigger>
          <TabsTrigger value="whitepapers">
            <FileText className="w-5 h-5 mr-2" />
            Whitepapers
          </TabsTrigger>
          <TabsTrigger value="webinars">
            <Video className="w-5 h-5 mr-2" />
            Webinars
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="blog">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.blog.map((post, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>Leer más</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="whitepapers">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.whitepapers.map((whitepaper, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{whitepaper.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{whitepaper.description}</CardDescription>
                  <Button>Descargar PDF</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="webinars">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.webinars.map((webinar, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{webinar.title}</CardTitle>
                  <CardDescription>
                    <Calendar className="inline-block w-4 h-4 mr-2" />
                    {webinar.date} - {webinar.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>Registrarse</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}