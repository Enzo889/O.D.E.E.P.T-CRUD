"use client";
import { useRouter } from "next/navigation";

function TaskCard({ tasks }) {
  const router = useRouter();

  return (
    <section>
      <div
        className=" border bg-white dark:bg-black  border-black dark:border-white p-3 hover:bg-gray-300 dark:hover:bg-gray-950 hover:cursor-pointer "
        onClick={() => {
          router.push("/tasks/edit/" + tasks.id);
        }}
      >
        <h3 className="font-bold text-2xl mb-2">{tasks.tittle}</h3>
        <p>{tasks.description}</p>
        <p>{new Date(tasks.createdAt).toLocaleDateString()}</p>
      </div>
    </section>
  );
}

export default TaskCard;
