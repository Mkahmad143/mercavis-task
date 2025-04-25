"use client";

import React, { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Card,
  CardBody,
} from "@heroui/react";
import { CalendarMinus2 } from "lucide-react";
import { PiMedalFill } from "react-icons/pi";

export default function Employee() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["This Week"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );

  const employee = {
    total: 154,
    fulltime: 112,
    contract: 112,
    probation: 12,
    wfh: 4,
    top: "Daniel Esbella",
    role: "IOS Developer",
    performance: 99,
    img: "/ep.jpg",
  };

  const fulltimePercent = ((employee.fulltime / employee.total) * 100).toFixed(
    0
  );
  const contractPercent = ((employee.contract / employee.total) * 100).toFixed(
    0
  );
  const probationPercent = (
    (employee.probation / employee.total) *
    100
  ).toFixed(0);
  const wfhPercent = ((employee.wfh / employee.total) * 100).toFixed(0);

  return (
    <Card className=" bg-white shadow-xl w-[18rem] sm:w-[22rem]  rounded-lg h-max mb-6 xl:w-[25rem]">
      <section className="flex items-center justify-between p-4 border-b-1">
        <h1 className="font-semibold text-[1rem]">Employee Status</h1>
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

      <section>
        <article>
          <CardBody className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">Total Employee</span>
              <span className="text-xl font-bold">{employee.total}</span>
            </div>
            <div className="flex h-4 mb-4 overflow-hidden rounded">
              <div
                className="bg-yellow-400"
                style={{ width: `${fulltimePercent}%` }}
              ></div>
              <div
                className="bg-slate-600 "
                style={{ width: `${contractPercent}%` }}
              ></div>
              <div
                className="bg-red-600"
                style={{ width: `${probationPercent}%` }}
              ></div>
              <div
                className="bg-pink-400"
                style={{ width: `${wfhPercent}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-2 mb-6 border-1">
              <div className="p-3 border-r-1 border-b-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-yellow-400">
                  <span className="inline-block w-2 h-2 bg-yellow-400 rounded-sm"></span>{" "}
                  <p> Fulltime ({fulltimePercent}%)</p>
                </div>
                <div className="text-2xl font-bold ">{employee.fulltime}</div>
              </div>
              <div className="p-3 text-right border-b-1">
                <div className="flex items-center justify-end gap-2 text-sm font-semibold text-slate-600">
                  <span className="inline-block w-2 h-2 rounded-sm bg-slate-600"></span>{" "}
                  Contract ({contractPercent}%)
                </div>
                <div className="text-2xl font-bold">{employee.contract}</div>
              </div>
              <div className="p-3 border-r-1">
                <div className="flex items-center gap-1 text-sm font-semibold text-red-600">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-sm"></span>{" "}
                  Probation ({probationPercent}%)
                </div>
                <div className="text-2xl font-bold">{employee.probation}</div>
              </div>
              <div className="p-3 border-t-1">
                <div className="flex items-center justify-end gap-2 text-sm font-semibold text-pink-400">
                  <span className="inline-block w-2 h-2 bg-pink-400 rounded-sm"></span>{" "}
                  WFH ({wfhPercent}%)
                </div>
                <div className="text-2xl font-bold text-right">
                  {employee.wfh}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 text-sm font-semibold text-orange-600">
                Top Performer
              </div>
              <div className="flex items-center justify-between p-2 border border-orange-500 rounded bg-orange-50">
                <div className="flex items-center gap-3">
                  <PiMedalFill className="w-10 h-10 text-orange-600" />
                  <img
                    src={employee.img}
                    alt="pic"
                    className="object-cover w-10 h-10 rounded-full"
                  />

                  <div>
                    <div className="font-semibold">{employee.top}</div>
                    <div className="text-xs text-gray-500">{employee.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Performance</div>
                  <div className="font-bold text-orange-600">
                    {employee.performance}%
                  </div>
                </div>
              </div>
            </div>
            <Button className="w-full h-8 mt-2 text-sm font-medium text-center lg:mt-8 bg-gray-200/30 hover:underline">
              View All Employees
            </Button>
          </CardBody>
        </article>
      </section>
    </Card>
  );
}
