import { prisma } from "@/libs/prisma";
import Image from "next/image";
import TaskCard from "@/components/TaskCard";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import Link from "next/link";
import DeleteTasks from "@/components/DeleteTasks";
import PageWrapper from "./page-wrapper";

async function loadTasks() {
  return await prisma.tasks.findMany();
}

export const dynamic = "force-dynamic";

async function HomePage() {
  const tasks = await loadTasks();

  if (typeof window !== "undefined") {
    return (
      <PageWrapper>
        <section className="container mx-auto  ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-32">
            {" "}
            {tasks.map((task) => (
              <ContextMenu>
                <ContextMenuTrigger>
                  <TaskCard tasks={task} key={task.id} />
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>
                    {" "}
                    <Link href="/new">Crear Tarea</Link>{" "}
                  </ContextMenuItem>
                  <ContextMenuItem>
                    {" "}
                    <Link href={"/tasks/edit/" + task.id}>Actualizar</Link>
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <DeleteTasks params={task.id} />
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            ))}
            <Image
              src={"/esqueleto.webp"}
              alt="intoxicados_logo"
              width={500}
              height={500}
              className="-z-10 absolute -left-64 max-md:-left-0 max-md:top-44 top-28 bottom-0 right-0 "
            />
          </div>
        </section>
      </PageWrapper>
    );
  } else {
    return (
      <PageWrapper>
        <section className="container mx-auto  ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-32">
            {" "}
            {tasks.map((task) => (
              <TaskCard tasks={task} key={task.id} />
            ))}
            <Image
              src={"/esqueleto.webp"}
              alt="intoxicados_logo"
              width={500}
              height={500}
              className="-z-10 absolute -left-64 max-md:-left-0 max-md:top-44 top-28 bottom-0 right-0 "
            />
          </div>
        </section>
      </PageWrapper>
    );
  }
}

export default HomePage;
