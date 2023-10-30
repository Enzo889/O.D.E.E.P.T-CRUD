"use client";
import React from "react";
import { useRouter } from "next/navigation";

function DeleteTasks({ params }) {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`/api/tasks/${params}`, {
      method: "DELETE",
    });
    router.refresh();
  };

  return (
    <div onClick={handleDelete} className="text-red-500">
      Eliminar
    </div>
  );
}

export default DeleteTasks;
