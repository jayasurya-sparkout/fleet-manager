'use client';

import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function RobotDetailPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const image = searchParams.get("image");
  const sequenceId = searchParams.get("sequenceId");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white">{name}</h1>
      <p className="text-[#B2B9CA] mt-2">Robot ID: {id}</p>
      <p className="text-[#B2B9CA] mt-2">Sequence: {sequenceId}</p>
      {image && (
        <Image
          src={image}
          alt={name || "Robot"}
          width={150}
          height={150}
          className="rounded-lg mt-4"
        />
      )}
    </div>
  );
}
