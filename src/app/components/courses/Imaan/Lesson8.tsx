import { scienceItems } from "@/utils/scienceItems";
import { ChevronRight } from "lucide-react";

function ImaanLesson8() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-2">
        {scienceItems.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between p-2 px-3 rounded-md bg-gray-100 border hover:bg-black/5 cursor-pointer hover:border-black/20 transition-all duration-300 "
            onClick={() => {
              window.open(item.url, "_blank");
            }}
          >
            <div>
              <p className="font-semibold text-xl">{item.title}</p>
              <p className="text-xs">{item.description}</p>
            </div>

            <ChevronRight />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImaanLesson8;
