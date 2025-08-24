"use client";
import { Book, Calendar, Home, MessageCircle, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

function Dock() {
  const navigate = useRouter();
  const location = usePathname();

  // Get the current path and determine active tab
  const getActiveTab = () => {
    const path = location;
    if (path === "/" || path === "/home") return "home";
    if (path.startsWith("/calendar")) return "calendar";
    if (path.startsWith("/courses")) return "courses";
    if (path.startsWith("/self")) return "self";
    return "home"; // default fallback
  };

  const activeTab = getActiveTab();

  const handleTabClick = (tab: string) => {
    navigate.push(`/${tab}`);
  };

  return (
    <div className="grid grid-cols-6 gap-4 items-center">
      <div className="col-span-5 bg-black h-fit p-1 w-full backdrop-blur-sm border-2 border-white/20 rounded-full grid grid-cols-4 items-center place-content-center">
        <div
          className={`rounded-full m-auto p-3 w-fit ${
            activeTab === "home"
              ? "bg-white/50 text-white backdrop-blur-sm "
              : " text-gray-300"
          } `}
          onClick={() => handleTabClick("home")}
        >
          <Home size={28} />
        </div>
        <div
          className={`rounded-full m-auto p-3 w-fit ${
            activeTab === "calendar"
              ? "bg-white/50 text-white backdrop-blur-sm "
              : " text-gray-300"
          } `}
          onClick={() => handleTabClick("calendar")}
        >
          <Calendar size={28} />
        </div>

        <div
          className={`rounded-full m-auto p-3 w-fit ${
            activeTab === "courses"
              ? "bg-white/50 text-white backdrop-blur-sm "
              : " text-gray-300"
          } `}
          onClick={() => handleTabClick("courses")}
        >
          <Book size={28} />
        </div>
        <div
          className={`rounded-full m-auto p-3 w-fit ${
            activeTab === "self"
              ? "bg-white/50 text-white backdrop-blur-sm "
              : " text-gray-300"
          } `}
          onClick={() => handleTabClick("self")}
        >
          <User size={28} />
        </div>
      </div>

      <a
        href="https://wa.me/message/ZLMGHZJVY3E7D1"
        target="_blank"
        className="bg-black w-fit h-fit py-1 px-2 backdrop-blur-sm border-2 border-white/20 rounded-full items-center place-content-center gap-4 aspect-square"
      >
        <div className="rounded-full m-auto aspect-square w-fit flex items-center justify-center p-2">
          <MessageCircle size={28} color="white" />
        </div>
      </a>
    </div>
  );
}

export default Dock;
