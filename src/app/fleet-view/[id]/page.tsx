'use client';

import { useParams, useSearchParams } from "next/navigation";
import { RobotInfo } from "@/components/robot-info";
import CustomCalander from "@/components/custom-calendar";

export default function RobotDetailPage() {
  
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const image = searchParams.get("image");
  const sequenceId = searchParams.get("sequenceId");
  if (!name || !sequenceId || !image) return <p>No robot found</p>;


  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <RobotInfo
          robotName={name}
          seqId={Number(sequenceId)}
          imagePath={image}
        />
        <div className="w-full pt-6">
          <CustomCalander className="w-full bg-[#212227] border-0 border-t-0 rounded-b-lg" />
        </div>
      </div>
    </div>
  );
}
