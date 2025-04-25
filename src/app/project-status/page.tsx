import { Progress } from "@heroui/react";
import { projects } from "../DummyData/projectsData";
import { BiSort } from "react-icons/bi"; // Importing the Sort Icon
import { ArrowRight, Ellipsis } from "lucide-react";
import DailyTask from "./DailyTask";
import Calender from "./Calender";
import Employee from "./Employee";
import Attendance from "./Attendance";
import CheckIn from "./CheckIn";
import Schedule from "./Schedule";
import RecentAct from "./RecentAct";
import Birthdays from "./Birthdays";

export default function ProjectStatus() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Done":
        return { color: "success" as const };
      case "In Progress":
        return { color: "primary" as const };
      case "Pending":
        return { color: "warning" as const };
      default:
        return { color: "secondary" as const };
    }
  };

  return (
    <div className="grid w-full max-w-screen-xl grid-cols-1 gap-4 px-4 py-6 mx-auto sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12">
      <section className="order-1 col-span-1 bg-white rounded-lg shadow-xl sm:col-span-2 lg:col-span-4 xl:col-span-6">
        <div className="relative flex items-center justify-between p-4 mr-auto">
          <h1 className="font-semibold text-[1rem]">Project Status</h1>
          <button className="bg-gray-400/20 text-[.7rem] sm:text-sm px-4 rounded-md py-2 inline-flex justify-between items-center">
            View All{" "}
            <ArrowRight
              strokeWidth={0.5}
              size={20}
              className="ml-2 text-gray-600 "
            />
          </button>
          <span className="w-1 h-7 left-0 bg-[#009DB5] absolute"></span>
        </div>
        {/*//? table */}
        <main className="overflow-auto scrollbar">
          <table className="w-max text-left table-auto  lg:h-[18.75rem] pb-6">
            <thead className="bg-[#F5F6F9]/80">
              <tr className="text-gray-400 text-md ">
                <th className="flex items-center justify-between py-2 font-normal cursor-pointer px-7">
                  Project <BiSort className="inline-block ml-1 text-gray-400" />
                </th>
                <th className="py-2 font-normal cursor-pointer px-7">
                  Team <BiSort className="inline-block ml-4 text-gray-400" />
                </th>
                <th className="py-2 font-normal cursor-pointer px-7">
                  Start Date{" "}
                  <BiSort className="inline-block ml-1 text-gray-400" />
                </th>
                <th className="py-2 font-normal cursor-pointer px-7">
                  Due Date{" "}
                  <BiSort className="inline-block ml-1 text-gray-400" />
                </th>
                <th className="py-2 font-normal cursor-pointer px-7">
                  Progress{" "}
                  <BiSort className="inline-block ml-1 text-gray-400" />
                </th>
                <th className="py-2 font-normal cursor-pointer px-7">
                  Status <BiSort className="inline-block ml-1 text-gray-400" />
                </th>
                <th className="py-2 font-normal px-7">Action</th>
              </tr>
            </thead>
            {/*//* getting data as dummy */}
            <tbody>
              {projects.map((project, index) => {
                const colors = getStatusColor(project.status);
                const remainingMembers = project.teamSize.length - 3;
                return (
                  <tr
                    key={index}
                    className="border-dotted border-b-[1.5px] hover:bg-blue-300/40 cursor-pointer"
                  >
                    <td className="py-3 px-7">{project.name}</td>
                    <td className="flex items-center py-3 px-7">
                      {project.teamSize.slice(0, 3).map((img, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 -ml-2 rounded-full first:ml-0"
                        >
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
                            alt=""
                          />
                        </div>
                      ))}
                      {remainingMembers > 0 && (
                        <div className="flex items-center justify-center w-6 h-6 -ml-2 text-xs font-medium rounded-full bg-gray-200/80">
                          +{remainingMembers}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-7">{project.startdate}</td>
                    <td className="py-3 px-7">{project.dueDate}</td>
                    <td className="flex items-center gap-2 py-3 px-7">
                      <div className="w-32 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                        <Progress
                          className="h-full rounded-full"
                          isStriped
                          value={project.progress}
                          color={colors.color}
                        />
                      </div>
                      <span className="w-10 text-sm">{project.progress}%</span>
                    </td>
                    <td className="py-3 px-7">
                      <div
                        className={`px-2 py-1 inline-block text-xs rounded-lg ${
                          project.status === "Done"
                            ? "bg-green-100 text-green-400"
                            : project.status === "In Progress"
                            ? "bg-blue-100 text-blue-400"
                            : "bg-orange-100 text-orange-400"
                        }`}
                      >
                        <p>{project.status}</p>
                      </div>
                    </td>
                    <td className="py-2 cursor-pointer px-7">
                      <Ellipsis size={20} strokeWidth={0.75} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      </section>

      {/* calender */}
      <section className="order-2 sm:order-3 lg:order-2 lg:col-span-2 xl:col-span-6">
        <Calender />
      </section>
      {/* daily task */}
      <section className="order-3 sm:order-4 lg:order-3 lg:col-span-2 xl:col-span-3 xl:order-9">
        <DailyTask />
      </section>
      {/* Employee */}
      <section className="order-4 sm:order-5 lg:order-4 lg:col-span-4 xl:col-span-4 xl:order-3">
        <Employee />
      </section>
      {/* Attendance */}
      <section className="order-5 col-span-1 sm:order-2 lg:order-5 sm:col-span-1 lg:col-span-3 xl:col-span-4 xl:order-4">
        <Attendance />
      </section>

      {/* CheckIn/Out */}
      <section className="order-6 col-span-1 sm:order-2 lg:order-5 sm:col-span-1 lg:col-span-3 xl:col-span-4 xl:order-5">
        <CheckIn />
      </section>
      <section className="order-7 col-span-1 lg:order-5 sm:col-span-1 xl:col-span-4 lg:col-span-3 xl:order-6">
        <Schedule />
      </section>
      <section className="order-8 col-span-1 lg:order-5 sm:col-span-1 xl:col-span-4 lg:col-span-3 xl:order-7">
        <RecentAct />
      </section>
      <section className="order-9 col-span-1 lg:order-5 sm:col-span-1 xl:col-span-4 lg:col-span-3 xl:order-8">
        <Birthdays />
      </section>
    </div>
  );
}
