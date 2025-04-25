import { ArrowRight, Timer, Video } from "lucide-react";
import React from "react";
import { date, meeting } from "../DummyData/CalenderData";
import { Button } from "@heroui/react";

const Calender = () => {
  const currentdate = new Date().getDate();

  return (
    <>
      <main className="bg-white shadow-xl w-full max-w-md  sm:max-w-full lg:max-w-[37.5rem] rounded-lg h-max sm:h-[24rem] ">
        <div className="relative flex items-center justify-between p-4 mr-auto">
          <h1 className="font-semibold text-[1rem]">Calender</h1>
          <button className="inline-flex items-center justify-between px-4 py-2 text-sm rounded-md bg-gray-400/20">
            Report{" "}
            <ArrowRight
              strokeWidth={0.5}
              className=" text-[.8rem] text-gray-600 ml-2"
            />
          </button>
          <span className="w-1 h-7 left-0 bg-[#009DB5] absolute"></span>
        </div>
        <section className="overflow-x-scroll md:mx-5 scrollbar">
          <div className="flex gap-4 md:gap-6 my-7 md:my-3">
            {date.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-1/7 h-1/7"
              >
                <article className="space-y-4 text-center">
                  <p className="p-1 text-gray-400">{item.day}</p>
                  <p
                    className={`text-gray-800 px-3 py-2 rounded-xl font-semibold   ${
                      currentdate == Number(item.date)
                        ? "bg-[#009DB5] shadow-lg shadow-blue-500 text-white "
                        : ""
                    }`}
                  >
                    {item.date}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </section>
        <section className="py-8 mt-6 overflow-x-scroll scrollbar md:mx-5 md:py-0">
          {meeting.map((item, index) => (
            <article
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-200 w-max h-1/7"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt=""
                  className="object-cover w-10 h-10 rounded-lg"
                />
                <div className="flex flex-col">
                  <h1 className="font-semibold text -gray-800">{item.title}</h1>
                  <div className="flex items-center gap-2">
                    <Video size={20} strokeWidth={0.5} />
                    <p className="text-gray-400 border-r-[2px] px-2">
                      Zoom Meeting
                    </p>

                    <Timer size={20} strokeWidth={0.5} />
                    <p className="text-gray-400">{item.time}</p>
                    <p className="text-gray-400 border-l-[2px] pl-2">Lead by</p>
                    <p className="text-amber-400">{item.author}</p>
                  </div>
                </div>
              </div>
              <Button className="bg-[#E5F5F7] text-gray-500 font-[550] ml-8 md:ml-4 hover:bg-blue-300/40">
                View
              </Button>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Calender;
