import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Shield, Users, Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react"

export default function PelviCenterLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">PelviCenter</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#beneficios" className="text-sm font-medium hover:text-primary transition-colors">
              Beneficios
            </a>
            <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Reserva tu cita</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Cuidamos tu salud íntima, porque tu <span className="text-primary">bienestar importa</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Especialistas en piso pélvico y fisioterapia femenina. Brindamos atención personalizada en un ambiente
                de confianza y profesionalismo.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                Agenda tu evaluación gratuita
              </Button>
            </div>
            <div className="relative">
              <img
                src="/mujer-sonriendo-en-consulta-m-dica--ambiente-profe.png"
                alt="Mujer sonriendo en consulta médica"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Nuestros Servicios Especializados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ofrecemos tratamientos especializados para el bienestar femenino con tecnología de vanguardia
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Terapia de piso pélvico</h3>
                <p className="text-muted-foreground text-pretty">
                  Tratamiento especializado para fortalecer y rehabilitar los músculos del piso pélvico
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Fisioterapia postparto</h3>
                <p className="text-muted-foreground text-pretty">
                  Recuperación integral después del parto para restaurar la funcionalidad corporal
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Rehabilitación uroginecológica</h3>
                <p className="text-muted-foreground text-pretty">
                  Tratamiento especializado para problemas urológicos y ginecológicos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">¿Por qué elegir PelviCenter?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Atención personalizada</h3>
              <p className="text-muted-foreground text-pretty">
                Cada tratamiento se adapta a las necesidades específicas de cada paciente
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Profesionales especializados</h3>
              <p className="text-muted-foreground text-pretty">
                Equipo médico altamente capacitado en fisioterapia del piso pélvico
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ambiente de confianza</h3>
              <p className="text-muted-foreground text-pretty">
                Espacio seguro y cómodo diseñado especialmente para el bienestar femenino
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Lo que dicen nuestras pacientes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 text-pretty">
                  "El tratamiento en PelviCenter cambió mi vida. Después del parto tenía muchas molestias y gracias a su
                  atención profesional pude recuperar mi bienestar completamente."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold">María González</p>
                    <p className="text-sm text-muted-foreground">Paciente</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 text-pretty">
                  "Excelente atención y profesionalismo. Me sentí muy cómoda desde la primera consulta. El ambiente es
                  muy acogedor y el tratamiento fue muy efectivo."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent-foreground font-semibold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ana Rodríguez</p>
                    <p className="text-sm text-muted-foreground">Paciente</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Agenda tu consulta</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Estamos aquí para ayudarte. Contáctanos para más información o agenda tu cita
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Dirección</h3>
                  <p className="text-muted-foreground">Av. Heroínas 123, Cochabamba, Bolivia</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground">+591 70123456</p>
                  <Button variant="outline" className="mt-2 bg-transparent">
                    Contactar por WhatsApp
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@pelvicenter.com</p>
                </div>
              </div>
            </div>
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nombre</label>
                      <Input placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">WhatsApp</label>
                      <Input placeholder="Tu número de WhatsApp" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensaje</label>
                    <Textarea placeholder="Cuéntanos cómo podemos ayudarte..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Enviar consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">PelviCenter</span>
              </div>
              <p className="text-muted-foreground text-pretty">
                Centro especializado en salud femenina y bienestar del piso pélvico en Cochabamba.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Av. Heroínas 123, Cochabamba</p>
                <p>WhatsApp: +591 70123456</p>
                <p>Email: info@pelvicenter.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 PelviCenter Cochabamba. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
