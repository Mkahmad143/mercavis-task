import { Button, Card } from "@heroui/react";
import { recentAct } from "../DummyData/RecentAct";

export default function RecentAct() {
  return (
    <Card className="bg-white shadow-xl w-[18rem] sm:w-[22rem] xl:w-[25rem] rounded-lg h-max sm:h-[29rem] mb-6">
      <section className="flex items-center justify-between p-4 border-b-1">
        <h1 className="font-semibold text-[1rem]">Recent Activities</h1>
        <Button className="capitalize h-8 rounded-md hover:bg-[#F26522] focus:bg-[#F26522] hover:text-white">
          <span className="text-sm">View All</span>
        </Button>
      </section>
      <section>
        {recentAct.map(({ id, name, img, comment, time }) => (
          <article key={id} className="flex items-center justify-between p-3 ">
            <section className="flex items-center gap-2 text-sm">
              <img src={img} alt={name} className="rounded-full w-9 h-9" />
              <div>
                <h1 className="font-semibold ">{name}</h1>
                <h1 className="text-[.6rem] text-gray-400 line-clamp-1 sm:line-clamp-2">
                  {comment}
                </h1>
              </div>
            </section>
            <section className=" place-self-start">
              <h1 className="text-[.9rem] text-gray-400 ">{time}</h1>
            </section>
          </article>
        ))}
      </section>
    </Card>
  );
}
