"use client";
import Link from "next/link";
import PageWrapper from "./page-wrapper";

function NotFound() {
  return (
    <PageWrapper>
      <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
        <div className="text-center ">
          <h1 className="text-4xl font-bold uppercase">
            El url que acaba de ingresar no es valido o no existe en este sitio.
            Por favor introduce el url bien o apietra donde dice{" "}
            <strong>inicio</strong> y regresa a la pagina principal del sitio
            web.
          </h1>
          <Link
            href="/"
            className=" text-5xl font-extrabold hover:text-rose-700 cursor-pointer hover:blur-sm hover:line-through"
          >
            INICIO
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}

export default NotFound;
