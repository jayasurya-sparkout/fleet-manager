'use client';

import { TabsComponent } from "@/components/TabsComponent";
import { List, Map } from "lucide-react";
import { RobotsList } from "@/components/robots-list";

export function FleetOverView() {
  const tabs = [
    {
      value: "list",
      label: "List",
      content: <RobotsList layout="list" />,
      hasIcon: true,
      icon: List,
      tabsComponentClass: "w-full"
    },
    {
      value: "map",
      label: "Map",
      content: <RobotsList layout="map" />,
      hasIcon: true,
      icon: Map,
      tabsComponentClass: "w-1/2 bg-[#212227] p-6 border-0 rounded-4xl overflow-hidden max-h-[500px] h-full ml-[30px]",
      isContentFullWidth: true
    },
  ];

  return (
    <TabsComponent defaultValue="list" tabs={tabs}>
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">Robot Fleet Overview</h1>
          <p className="text-[#B2B9CA] text-lg">
            Real time data, diagnostics, control and performance.
          </p>
        </div>
      </div>
    </TabsComponent>
  );
}
