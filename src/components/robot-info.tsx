'use client';

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

type RobotsInfoProps = {
    robotName: string;
    imagePath: string;
    seqId: number;
};

export function RobotInfo({
    robotName,
    imagePath,
    seqId
}: RobotsInfoProps) {

    return (
        <Card
            key={seqId}
            className={`border-0 p-0 shadow-md bg-[#2A2B30] cursor-pointer block`}
        >
            <div className="p-4 font-bold text-2xl rounded-lg">
                Robot Info
            </div>
            <div className="flex gap-6 w-fulll bg-[#212227] p-4 border-t-0 rounded-b-lg">
                <div>
                    <Image
                        src={imagePath}
                        alt={`Robot`}
                        width={80}
                        height={80}
                        className="rounded-md object-contain"
                    />
                </div>
                <CardHeader className="w-full p-0">
                    <CardTitle className="text-lg">Robot {robotName}</CardTitle>
                    <CardDescription>Sequence ID: {seqId}</CardDescription>
                </CardHeader>
            </div>
        </Card>
    )

}