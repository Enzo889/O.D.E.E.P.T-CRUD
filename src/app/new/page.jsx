"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PageWrapper from "../page-wrapper";

function NewPage({ params }) {
  const router = useRouter();
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTittle(data.tittle);
          setDescription(data.description);
        });
    }
  }, [params.id]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ tittle, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ tittle, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    }

    router.refresh();
    router.push("/");
  };

  return (
    <PageWrapper>
      <div className="h-screen flex justify-center items-center ">
        <form
          className="border border-black dark:border-white bg-white dark:bg-black p-10 lg:w-1/4 md:w-1/2"
          onSubmit={onSubmit}
        >
          <label htmlFor="tittle" className="font-bold text-sm">
            Titulo de la tarea
          </label>
          <input
            type="text"
            id="tittle"
            className="border border-gray-400 p-2 mb-4 w-full text-black"
            placeholder="Titulo"
            onChange={(e) => setTittle(e.target.value)}
            value={tittle}
          />

          <label htmlFor="description" className="font-bold text-sm">
            Descripcion de la tarea
          </label>
          <textarea
            rows="3"
            id="description"
            className="border border-gray-400 p-2 mb-4 w-full text-black"
            placeholder="Describe tu tarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <div className="flex justify-between">
            <button
              id="btn"
              type="submit"
              className="bg-black hover:bg-gray-800 text-white dark:text-black dark:bg-white dark:hover:bg-gray-200 font-bold py-2 px-4 rounded "
            >
              {params.id ? "Actualizar" : "Crear"}
            </button>
            {params.id && (
              <AlertDialog>
                <AlertDialogTrigger className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Eliminar
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      ¿Estás absolutamente seguro?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta acción no se puede deshacer. Esta acción eliminará
                      permanentemente tu tarea del servidor.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>
                      <button
                        type="button"
                        onClick={async () => {
                          const res = await fetch(`/api/tasks/${params.id}`, {
                            method: "DELETE",
                          });
                          const data = await res.json();
                          router.refresh();
                          router.push("/");
                        }}
                      >
                        Eliminar
                      </button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </form>
        <Image
          src={"/tierraa.webp"}
          alt="intoxicados_logo"
          width={1000}
          height={500}
          className="-z-10 absolute  h-screen  max-md:hidden  bottom-0 right-0"
        />

        <Image
          src={"/sky.webp"}
          alt="intoxicados_logo"
          width={1000}
          height={500}
          className="-z-10 absolute h-screen max-md:hidden -scale-x-[1] scale-y-[.9] top-0 left-0"
        />
      </div>
    </PageWrapper>
  );
}
export default NewPage;
