import PageWrapper from "../page-wrapper";

function AboutPage() {
  return (
    <PageWrapper>
      <section className="container mx-auto mt-32 mb-12">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            OTRO DIA EN EL PLANETA TIERRA
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            ¡Bienvenido a &quot;Otro Día en el Planeta Tierra&quot;! Este
            proyecto es el resultado de un desafío académico que mi profesor de
            Base de Datos nos propuso. La meta principal era aprender y aplicar
            la metodología CRUD, un enfoque esencial en el desarrollo de
            aplicaciones y sistemas de gestión de bases de datos.
          </p>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Metodología CRUD
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Es un acrónimo que se utiliza en el desarrollo de aplicaciones y
            sistemas de gestión de bases de datos para describir las{" "}
            <a
              href="https://developer.mozilla.org/es/docs/Glossary/CRUD"
              className="font-medium text-primary underline underline-offset-4"
            >
              cuatro operaciones fundamentales
            </a>
            : que se pueden realizar en datos almacenados.
          </p>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            &quot;CRUD (Create, Read, Update, Delete)&quot;
          </blockquote>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Como lo Aplique
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Para llevar a cabo este desafío, elegimos utilizar las siguientes
            tecnologías:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Prisma: Con esta herramienta, simplificamos la interacción con la
              base de datos, permitiéndonos crear, leer, actualizar y eliminar
              datos de manera efectiva.
            </li>
            <li>
              PostgreSQL con alojamiento en Vercel: Optamos por PostgreSQL como
              sistema de gestión de bases de datos, alojado en Vercel, lo que
              nos garantizó un almacenamiento eficiente y seguro de la
              información. Además, realizamos un deploy exitoso en Vercel para
              asegurar la disponibilidad de nuestro proyecto en línea.
            </li>
            <li>
              Next.js: Este se convirtió en nuestro marco principal para el
              desarrollo de la página web, proporcionando una base sólida para
              crear una experiencia de usuario fluida.
            </li>
            <li>
              Tailwind CSS: Utilizamos Tailwind CSS para dar estilo a nuestras
              páginas, creando un diseño atractivo y moderno.
            </li>
          </ul>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            El Enfoque del Proyecto
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Como resultado de nuestro trabajo, creamos un CRUD centrado en la
            gestión de tareas, al mismo tiempo que le dimos un toque distintivo
            al enmarcarlo en el contexto temático del álbum &quot;Otro Día en el
            Planeta Tierra&quot; de la banda &quot;Los Intoxicados&quot;. Esta
            elección le dio un toque especial y atractivo a nuestro proyecto.
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Mi Aprendizaje Personal
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            A lo largo del proceso de desarrollo de esta página web, adquirí una
            serie de habilidades y conocimientos valiosos. Algunos de los
            aspectos destacados incluyeron:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Implementación de Dark Mode: Aprendí a incorporar el modo oscuro
              en la página, mejorando la experiencia del usuario en diferentes
              condiciones de iluminación.
            </li>
            <li>
              Uso de la librería de componentes Shadcn UI: Exploré la
              integración de esta librería para enriquecer la interfaz de
              usuario y hacerla más atractiva y funcional.
            </li>
            <li>
              Utilización de la librería de audio Howler: Aprendí a incorporar
              audio en la página, lo que puede ser valioso para proyectos
              futuros que requieran elementos sonoros.
            </li>
            <li>
              Mejor desempeño en Next.js: Gané experiencia en el uso eficiente
              de Next.js para crear aplicaciones web de alto rendimiento y
              responsivas.
            </li>
          </ul>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Estoy agradecido por la oportunidad de haber llevado a cabo este
            proyecto y espero que encuentres útil y entretenido &quot;Otro Día
            en el Planeta Tierra&quot;. Estoy emocionado por futuros proyectos y
            las lecciones que aún tengo por aprender. ¡Gracias por visitar mi
            página!.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">Con cariño,</p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Enzo Bustamante
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}

export default AboutPage;
