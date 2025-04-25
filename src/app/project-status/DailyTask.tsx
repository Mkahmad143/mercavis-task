import { dailytask } from "../DummyData/DailyTasks";
import { Ellipsis, Timer } from "lucide-react";

export default function DailyTask() {
  return (
    <>
      <main className="bg-white shadow-xl rounded-lg h-[23rem] ">
        <div className="relative flex items-center justify-between p-4 mr-auto">
          <h1 className="font-semibold text-[1rem]">Daily Task</h1>
          <button className="inline-flex items-center justify-between px-4 py-2 text-sm rounded-md">
            <Ellipsis size={20} strokeWidth={0.75} />
          </button>
          <span className="w-1 h-7 left-0 bg-[#009DB5] absolute"></span>
        </div>

        <section className="flex flex-col items-center justify-center gap-3 mx-5 mb-8 border-dotted border-l-3">
          {dailytask.map(({ id, task, time, color }) => (
            <div key={id} className="mx-5 ">
              <article className="border-dotted lg:ml-3 rounded-xl border-2 relative min-w-[14rem] sm:min-w-[12rem]  space-y-2  mx-auto p-2">
                <h1 className=" text-[1rem] font-semibold">{task}</h1>
                <div className="flex items-center gap-2">
                  <Timer strokeWidth={0.7} />
                  <p className="text-sm ">{time}</p>
                </div>
                <span className="w-5 h-[.7px] bg-black absolute -left-5 lg:-left-8 top-[40%]"></span>
                {/* cirle */}
                <span
                  style={{
                    background: color,
                    boxShadow: `0 0 8px 2px ${color}`,
                  }}
                  className="w-[.6rem] h-[.6rem] rounded-full absolute -left-[1.2rem] lg:-left-[2.49rem] top-[34%]"
                ></span>
              </article>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
