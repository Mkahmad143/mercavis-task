"use client";

import {
  Button,
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { CalendarMinus2 } from "lucide-react";
import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { attendace } from "../DummyData/projectsData";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = ["#00B850", "#0f6170", "#ffc107", "#F44336"];

export default function Attendance() {
  const data = attendace[0];

  const doughnutData: ChartData<"doughnut"> = {
    labels: ["Present", "Late", "Permission", "Absent"],
    datasets: [
      {
        data: [data.present, data.late, data.permisson, data.absent],
        // @ts-ignore
        backgroundColor: COLORS,
        borderWidth: 6,

        borderRadius: 10,
      },
    ],
  };

  const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    rotation: -90,
    cutout: "65%",

    circumference: 180,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  const [selectedKeys, setSelectedKeys] = useState(new Set(["This Week"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );

  return (
    <Card className="bg-white shadow-xl w-[18rem] sm:w-[22rem] xl:w-[25rem] rounded-lg h-[33rem] mb-6">
      <section className="flex items-center justify-between p-4 border-b-1">
        <h1 className="font-semibold text-[1rem]">Attendance</h1>
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="capitalize h-8 rounded-md hover:bg-[#F26522] focus:bg-[#F26522] hover:text-white"
              variant="bordered"
            >
              <CalendarMinus2 size={16} />
              <span className="text-sm">{selectedValue}</span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Single selection example"
            selectedKeys={selectedKeys}
            selectionMode="single"
            variant="flat"
            onSelectionChange={(keys) =>
              setSelectedKeys(new Set(keys as unknown as string[]))
            }
          >
            <DropdownItem key="text">This Month</DropdownItem>
            <DropdownItem key="number">This Week</DropdownItem>
            <DropdownItem key="date">Today</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>
      <CardBody className="flex flex-col items-center justify-center gap-4">
        <div className=" relative w-full flex flex-col items-center justify-center   h-[160px] sm:h-[200px] md:h-[225px] mx-auto">
          <Doughnut
            data={doughnutData}
            options={doughnutOptions}
            width={650}
            height={320}
          />
          <div className="absolute flex flex-col items-center justify-center -bottom-2 lg:bottom-12">
            <p className="text-sm text-gray-400">Total Attendance</p>
            <h2 className="text-lg font-bold">{data.total}</h2>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-2 px-2 ">
          <h1 className="font-semibold ">Status</h1>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-gray-500">
              <span className="w-3 h-3 bg-[#00B850] rounded-full"></span>
              Present
            </span>
            <span>{Math.round((data.present / data.total) * 100)}%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-gray-500">
              <span className="w-3 h-3 bg-[#0f6170] rounded-full"></span>
              Late
            </span>
            <span>{Math.round((data.late / data.total) * 100)}%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-gray-500">
              <span className="w-3 h-3  bg-[#ffc107] rounded-full"></span>
              Permission
            </span>
            <span>{Math.round((data.permisson / data.total) * 100)}%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-gray-500">
              <span className="w-3 h-3 bg-[#F44336] rounded-full "></span>
              Absent
            </span>
            <span>{Math.round((data.absent / data.total) * 100)}%</span>
          </div>
        </div>

        <div className="w-full px-4 py-3 rounded-md bg-gray-200/30">
          <div className="flex items-center gap-1 text-sm">
            <p>Total Absentees</p>
            <div className="flex ml-2 -space-x-3">
              {data.totalAbsent.slice(0, 3).map((person, index) => (
                <img
                  key={index}
                  width={24}
                  height={24}
                  className="w-6 h-6 border-2 border-white rounded-full"
                  src={person.img}
                  alt={person.name}
                />
              ))}
              {data.totalAbsent.length > 3 && (
                <span className="flex items-center justify-center w-6 h-6 text-xs text-white bg-orange-500 rounded-full">
                  +{data.totalAbsent.length - 3}
                </span>
              )}
            </div>
            <span className="ml-auto text-xs text-orange-500 underline cursor-pointer lg:text-base">
              View Details
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
