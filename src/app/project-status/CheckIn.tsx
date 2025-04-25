"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Card,
} from "@heroui/react";
import { IoIosArrowDown } from "react-icons/io";

import { useMemo, useState } from "react";
import { CalendarMinus2, TimerResetIcon } from "lucide-react";
import { checkin, Late } from "../DummyData/EmployeeData";
export default function CheckIn() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["This Week"]));
  const [selectedDKeys, setSelectedDKeys] = useState(new Set(["All"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );

  const selectedDValue = useMemo(
    () => Array.from(selectedDKeys).join(", ").replace(/_/g, ""),
    [selectedDKeys]
  );
  return (
    <Card className="bg-white shadow-xl w-[18rem] sm:w-[22rem] xl:w-[25rem] rounded-lg h-[33rem] mb-6">
      <section className="flex items-center justify-between p-4 border-b-1">
        <h1 className="font-semibold text-[1rem]">Clock In/Out</h1>
        <div className="flex items-center ">
          <Dropdown>
            <DropdownTrigger>
              <Button className="capitalize h-8 bg-transparent rounded-md hover:bg-[#F26522] focus:bg-[#F26522] hover:text-white">
                <span className="text-sm">{selectedDValue}</span>
                <IoIosArrowDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Single selection example"
              selectedKeys={selectedDKeys}
              selectionMode="single"
              variant="flat"
              onSelectionChange={(keys) =>
                setSelectedDKeys(new Set(keys as unknown as string[]))
              }
            >
              <DropdownItem key="text">Finance</DropdownItem>
              <DropdownItem key="number">Development</DropdownItem>
              <DropdownItem key="date">Marketing</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="capitalize h-8 rounded-md hover:bg-[#F26522] focus:bg-[#F26522] hover:text-white"
                variant="bordered"
              >
                <CalendarMinus2 size={16} />
                <span className="text-xs">{selectedValue}</span>
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
        </div>
      </section>

      <section className="flex flex-col gap-4 ">
        {checkin.map(({ id, name, role, checkin, img }) => (
          <article
            key={id}
            className="flex justify-between px-4 py-3 mx-4 mt-2 space-y-4 rounded-md border-1"
          >
            <div className="flex items-center gap-2">
              <img src={img} alt="" className="w-8 h-8 rounded-full " />
              <div>
                <h1 className="text-sm ">{name}</h1>
                <p className="text-xs ">{role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p>
                <TimerResetIcon size={14} />
              </p>
              <p className="inline-flex items-center gap-3 px-1 text-xs text-white bg-[#03C95A] rounded-md">
                <span className="inline-block w-1 h-1 translate-x-1 bg-white rounded-full"></span>
                {checkin}
              </p>
            </div>
          </article>
        ))}
      </section>
      <section className="mt-6 mb-auto">
        <h1 className="ml-4 font-semibold ">Late</h1>
        {Late.map(({ id, name, role, checkin, img, est }) => (
          <article
            key={id}
            className="flex justify-between px-4 py-3 mx-4 mt-2 space-y-4 rounded-md border-1"
          >
            <div className="flex items-center gap-2">
              <img src={img} alt="" className="w-8 h-8 rounded-full " />
              <div>
                <h1 className="flex items-center gap-1 text-sm">
                  {name}{" "}
                  <span className="hidden  bg-[#03C95A] rounded-md sm:flex px-1 gap-1 text-xs text-white">
                    <TimerResetIcon size={14} /> {est}
                  </span>
                </h1>
                <p className="text-xs ">{role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p>
                <TimerResetIcon size={14} />
              </p>
              <p className="inline-flex items-center gap-3 px-1 text-xs text-white bg-red-600 rounded-md">
                <span className="inline-block w-1 h-1 translate-x-1 bg-white rounded-full"></span>
                {checkin}
              </p>
            </div>
          </article>
        ))}
      </section>
      <Button className="h-8 mx-4 mb-4 text-sm font-medium text-center w-ful lg:mt-8 bg-gray-200/30 hover:underline">
        View All Attendance
      </Button>
    </Card>
  );
}
