"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

type Calendar01Props = {
  className?: string
  defaultDate?: Date
}

export default function CustomCalendar ({
  className,
  defaultDate = new Date(),
}: Calendar01Props) {
  const [date, setDate] = React.useState<Date | undefined>(defaultDate)

  return (
    <Card className="border-0 p-0 bg-[#2A2B30] gap-0">
      <CardHeader className="p-0 gap-0">
        <CardTitle className="p-4 font-bold text-2xl rounded-lg">Calendar Filter</CardTitle>
      </CardHeader>
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        className={cn("shadow-sm", className)}
      />
    </Card>
  )
}
