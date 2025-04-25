import { Button, Card } from "@heroui/react";
import { Birthdate } from "../DummyData/Birthday";
import { CakeIcon } from "lucide-react";

export default function Birthdays() {
  const todayBirthDays = Birthdate.filter((birth) => birth.date === "today");
  const tomorrowBirthDays = Birthdate.filter(
    (birth) => birth.date === "tomorrow"
  );
  const upcomingBirthDays = Birthdate.filter(
    (birth) => birth.date !== "today" && birth.date !== "tomorrow"
  );

  return (
    <Card className="bg-white shadow-xl w-[18rem] sm:w-[22rem] xl:w-[25rem] rounded-lg h-[29rem] overflow-auto mb-6">
      <section className="flex items-center justify-between p-4 border-b-1">
        <h1 className="font-semibold text-[1rem]">Birthdays</h1>
        <Button className="capitalize h-8 rounded-md hover:bg-[#F26522] focus:bg-[#F26522] hover:text-white">
          <span className="text-sm">View All</span>
        </Button>
      </section>
      {/* today */}
      <section className="p-2 mx-3">
        <h1 className="font-semibold ">Today</h1>
        {todayBirthDays.map(({ id, name, img, role }) => (
          <article
            key={id}
            className="flex items-center justify-between p-2 rounded-md bg-gray-200/50 "
          >
            <section className="flex gap-3 ">
              <div>
                <img src={img} alt={name} className="rounded-full w-9 h-9" />
              </div>
              <div>
                <h1 className="text-sm font-semibold">{name}</h1>
                <h1 className=" text-[.8rem] text-gray-400 ">{role}</h1>
              </div>
            </section>
            <section>
              <button className="px-3 py-[.3rem] rounded-md inline-flex gap-[.15rem] text-white text-[.6rem] font-semibold bg-[#2E5864]">
                {" "}
                <CakeIcon size={12} /> Send
              </button>
            </section>
          </article>
        ))}
      </section>
      {/* tomorrow */}
      <section className="p-2 mx-3">
        <h1 className="font-semibold ">Tomorrow</h1>
        {tomorrowBirthDays.map(({ id, name, img, role }) => (
          <article
            key={id}
            className="flex items-center justify-between p-2 my-2 rounded-md bg-gray-200/50 "
          >
            <section className="flex gap-3 ">
              <div>
                <img src={img} alt={name} className="rounded-full w-9 h-9" />
              </div>
              <div>
                <h1 className="text-sm font-semibold">{name}</h1>
                <h1 className=" text-[.8rem] text-gray-400 ">{role}</h1>
              </div>
            </section>
            <section>
              <button className="px-3 py-[.3rem] rounded-md inline-flex gap-[.15rem] text-white text-[.6rem] font-semibold bg-[#2E5864]">
                {" "}
                <CakeIcon size={12} /> Send
              </button>
            </section>
          </article>
        ))}
      </section>
      {/* upcoming */}
      <section className="p-2 mx-3">
        <h1 className="font-semibold ">Upcoming</h1>
        {upcomingBirthDays.map(({ id, name, img, role }) => (
          <article
            key={id}
            className="flex items-center justify-between p-2 my-2 rounded-md bg-gray-200/50 "
          >
            <section className="flex gap-3 ">
              <div>
                <img src={img} alt={name} className="rounded-full w-9 h-9" />
              </div>
              <div>
                <h1 className="text-sm font-semibold">{name}</h1>
                <h1 className=" text-[.8rem] text-gray-400 ">{role}</h1>
              </div>
            </section>
            <section>
              <button className="px-3 py-[.3rem] rounded-md inline-flex gap-[.15rem] text-white text-[.6rem] font-semibold bg-[#2E5864]">
                {" "}
                <CakeIcon size={12} /> Send
              </button>
            </section>
          </article>
        ))}
      </section>
    </Card>
  );
}
