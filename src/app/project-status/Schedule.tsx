"use client";

import { Button, Card } from "@heroui/react";
import { schedule } from "../DummyData/ScheduleData";
import { article } from "framer-motion/client";
import { CalendarMinus2, Timer } from "lucide-react";

export default function Schedule() {
  return (
    <Card className="bg-white shadow-xl w-[18rem] sm:w-[22rem] xl:w-[25rem] rounded-lg h-[29rem] mb-6">
      <section className="flex items-center justify-between p-4 border-b-1">
        <h1 className="font-semibold text-[1rem]">Schedules</h1>
        <Button className="capitalize h-8 rounded-md hover:bg-[#F26522] focus:bg-[#F26522] hover:text-white">
          <span className="text-sm">View All</span>
        </Button>
      </section>
      <section className="flex flex-col gap-4 p-2 mt-2">
        {schedule.map(({ id, job, date, time, candidates }) => {
          const remainingMembers = candidates.length - 5;
          return (
            <article key={id} className="p-3 rounded-md bg-slate-200/30">
              <div className="flex flex-col gap-1 pb-3 space-y-2 border-b-1">
                <h3 className="px-2 py-0.5 rounded-md text-xs text-white bg-gray-700 w-max">
                  {job}
                </h3>
                <h1 className="text-sm font-semibold">
                  Interview Candidates - {job}
                </h1>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <h1 className="flex gap-1">
                    <CalendarMinus2 size={14} />
                    {date}
                  </h1>
                  <h1 className="flex gap-1">
                    <Timer size={14} />
                    {time}
                  </h1>
                </div>
              </div>
              {/* join meeting line */}
              <section className="flex items-center justify-between pt-2 ">
                <div className="flex items-center -space-x-3">
                  {candidates.slice(0, 5).map((candidate, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 -ml-2 rounded-full first:ml-0"
                    >
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
                        alt=""
                      />
                    </div>
                  ))}
                  {remainingMembers > 0 && (
                    <div className="flex items-center justify-center w-6 h-6 -ml-2 text-xs font-medium text-white rounded-full bg-[#F37438]">
                      +{remainingMembers}
                    </div>
                  )}
                </div>
                <button className="px-2 py-1 bg-[#F37438] text-[.55rem] text-white rounded-md">
                  Join Meeting
                </button>
              </section>
            </article>
          );
        })}
      </section>{" "}
    </Card>
  );
}
