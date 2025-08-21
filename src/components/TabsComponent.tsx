'use client';

import { LucideIcon } from "lucide-react";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { ReactNode } from "react";
import { Search, ChevronDown, List, Map } from "lucide-react";

type Tab = {
  value: string;
  label: string;
  content: ReactNode;
  hasIcon?: boolean;
  icon?: LucideIcon;
  iconClass?: string;
  tabsComponentClass?: string;
  isContentFullWidth?: boolean;
};

type TabsComponentProps = {
  defaultValue: string;
  tabs: Tab[];
  children: ReactNode;
};

export function TabsComponent({ defaultValue, tabs, children }: TabsComponentProps) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full h-full">
      <div className="flex items-end justify-between">
        {children}

        <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
            <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                <input
                    type="text"
                    placeholder="Search Robots"
                    className="w-full rounded-lg border-2 border-[#313447] pl-10 pr-3 py-3 text-lg focus:border-[#313447] focus:ring-1 focus:ring-[#313447] outline-none"
                />
            </div>
            <div className="flex items-center gap-4 px-4 py-3 border-2 border-[#45464E] rounded-xl cursor-pointer transition-all hover:shadow-md">
                <span className="text-[#949BAC]">All Hardware</span>
                <ChevronDown
                    size={20}
                    className="transition-transform duration-300 hover:rotate-180 text-[#949BAC]"
                />
            </div>
        </div>

        <TabsList className="p-2 h-full">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="cursor-pointer p-2 data-[state=active]:bg-[#4CAF5033] data-[state=active]:border-[#4CAF50] data-[state=active]:text-[#4CAF50] dark:data-[state=active]:bg-[#2E7D3233] dark:data-[state=active]:border-[#81C784] dark:data-[state=active]:text-[#81C784]">
              {tab.hasIcon && tab.icon ? (
                <div className="flex flex-nowrap gap-3 items-center">
                    <span className="iconWrap">
                        <tab.icon className={`${tab.iconClass ? tab.iconClass : "w-4 h-4"}`} />
                    </span>
                    <span className="iconLabel">
                        {tab.label}
                    </span>
                </div>
              ) : (
                tab.label
              )}
            </TabsTrigger>
          ))}
        </TabsList>
        </div>
      </div>

      <div className={`my-6 h-full  ${tabs.map((tab) => (tab.isContentFullWidth ? "" : ""))}`}>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className={`${tab.isContentFullWidth ? tab.tabsComponentClass : ""}`}>
            <Card className={`bg-[#212227] p-0 border-0 rounded-4xl ${tab.isContentFullWidth ? "overflow-y-scroll thin-scrollbar h-full" : "p-6"}`}>
              <CardContent className="p-2">{tab.content}</CardContent>
            </Card>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
