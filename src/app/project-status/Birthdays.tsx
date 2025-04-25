import { Button, Card } from "@heroui/react";
import { Birthdate } from "../DummyData/Birthday";

export default function Birthdays() {
  const todayBirthDays = Birthdate.filter((birth) => birth.date === "today");
  const tomorrowBirthDays = Birthdate.filter(
    (birth) => birth.date === "tomorrow"
  );
  const upcomingBirthDays = Birthdate.filter(
    (birth) => birth.date !== "today" && birth.date !== "tomorrow"
  );
  console.log(tomorrowBirthDays);

  return (
    <Card className="bg-white shadow-xl w-[18rem] sm:w-[22rem] xl:w-[25rem] rounded-lg h-[29rem] mb-6">
      <section className="flex items-center justify-between p-4 border-b-1">
        <h1 className="font-semibold text-[1rem]">Birthdays</h1>
        <Button className="capitalize h-8 rounded-md hover:bg-[#F26522] focus:bg-[#F26522] hover:text-white">
          <span className="text-sm">View All</span>
        </Button>
      </section>
      {/* today */}
      <section>
        <h1>Today</h1>
        {todayBirthDays.map(({ id, name, img, role }) => (
          <article key={id} className="flex items-center justify-between p-3 ">
            <section className="flex ">
              <div>
                <img src={img} alt={name} className="rounded-full w-9 h-9" />
              </div>
              <div>
                <h1>{name}</h1>
                <h1>{role}</h1>
              </div>
            </section>
            <section>
              <button>Send</button>
            </section>
          </article>
        ))}
      </section>
      {/* tomorrow */}
      <section>
        <h1>Tomorrow</h1>
        {tomorrowBirthDays.map(({ id, name, img, role }) => (
          <article key={id} className="flex items-center justify-between p-3 ">
            <section className="flex">
              <div>
                <img src={img} alt={name} className="rounded-full w-9 h-9" />
              </div>
              <div>
                <h1>{name}</h1>
                <h1>{role}</h1>
              </div>
            </section>
            <section>
              <button>Send</button>
            </section>
          </article>
        ))}
      </section>
      {/* upcoming */}
      <section>
        <h1>Upcoming</h1>
        {upcomingBirthDays.map(({ id, name, img, role }) => (
          <article key={id} className="flex items-center justify-between p-3 ">
            <section className="flex">
              <div>
                <img src={img} alt={name} className="rounded-full w-9 h-9" />
              </div>
              <div>
                <h1>{name}</h1>
                <h1>{role}</h1>
              </div>
            </section>
            <section>
              <button>Send</button>
            </section>
          </article>
        ))}
      </section>
    </Card>
  );
}
