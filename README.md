# 🌸 PelviCenter Landing Page

Este es el repositorio del landing page prueba de **PelviCenter**, desarrollado con **Next.js** y **TailwindCSS**.  
El proyecto incluye secciones como **Inicio, Servicios, Nuestro Equipo, Contacto y Ubicación en Google Maps**.

**DATO:** Todo el proyecto esta en la rama de LandingPage, todos los pasos a seguir se recomienta estar en la rama correspondiente.
---

## 1. Requisitos previos

Antes de comenzar, necesitas tener instalados en tu computadora:

- [Node.js (versión 18 o superior)](https://nodejs.org/)  
- [Git](https://git-scm.com/) (para clonar repositorios de GitHub)

Para comprobar si ya los tienes instalados, abre la terminal (CMD, PowerShell o Git Bash) y ejecuta:

```bash
node -v
```
Tambien:
```bash
git --version
```
Si te aparece un número de versión, significa que ya están instalados ✅.

##  2. Descargar el proyecto

Tienes dos formas de obtener el código:

- **Opción A:** Clonar desde GitHub
bash
Copiar código
```bash
git clone https://github.com/JennyKCP/Pelvicenter.github.io.git
```
Y luego te diriges a la carpeta:
```bash
cd Pelvicenter.github.io-LandingPage
```

- **Opción B:** Descargar ZIP

  - Ve al repositorio en GitHub.
  - Haz clic en el botón verde Code → Download ZIP.
  - Extrae el archivo en tu computadora.
  - Abre la carpeta en tu editor de código (ejemplo: VS Code).

## 3. Instalar dependencias

Una vez dentro de la carpeta del proyecto, instala las librerías necesarias con:

```bash
npm install
```
Esto descargará todo lo que el proyecto necesita para funcionar.

## 4. Iniciar el servidor de desarrollo

Ejecuta(Crtl + J):

```bash
npm run dev
```

Esto levantará un servidor local en tu computadora.
Abre tu navegador y entra en:

- http://localhost:3000

Ahí verás la landing page en vivo 🎉.

## 5. Estructura del proyecto

El proyecto está organizado en carpetas para que sea fácil modificarlo:

```text
Pelvicenter.github.io-LandingPage/
│── components/       # Componentes reutilizables (Navbar, Footer, Contacto, Equipo, etc.)
│── public/           # Imágenes y archivos estáticos
│── styles/           # Estilos globales (Tailwind)
│── pages/            # Rutas principales (Next.js)
│── package.json      # Configuración del proyecto
```

✨ Componentes importantes:

  - components/Contact.js → Sección de contacto, redes sociales y mapa.
  - components/Equipo.js → Información del equipo.
  - components/Hero.js → Banner principal de bienvenida.
  - components/Servicios.js → Listado de servicios.

## 6. Personalización

Puedes editar textos e imágenes directamente en los archivos de components/.
  
  - Cambiar imágenes → colócalas en la carpeta /public y actualiza la ruta en el componente.
  - Cambiar colores → en tailwind.config.js puedes modificar la paleta de colores.
  - Cambiar redes sociales o contacto → edita components/Contact.js.


👩‍💻 Autor
Landing page desarrollada para PelviCenter por JennyKCP.
