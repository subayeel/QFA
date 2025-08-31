import { scienceItems } from "@/utils/scienceItems";
import { MoveUpRight } from "lucide-react";
import React from "react";

function MiraclesLesson2() {
  const miracles = scienceItems.filter(
    (miracle) => miracle.fieldOfScience === "BIOLOGY"
  );
  return (
    <div>
      <div className="flex flex-col gap-4">
        {miracles.map((miracle) => (
          <div
            key={miracle.title}
            className="relative border p-4 rounded-xl bg-white shadow hover:cursor-pointer hover:border-black/20 transition-all duration-300"
            onClick={() => {
              window.open(miracle.url, "_blank");
            }}
          >
            <div className="absolute top-4 right-4">
              <MoveUpRight className="text-teal-900" size={16} />
            </div>
            <h3 className="text-lg font-bold">{miracle.title}</h3>
            <p className="text-sm text-gray-500">{miracle.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiraclesLesson2;
