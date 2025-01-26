import { useEffect, useState } from "react";
import {
  Calendar,
  CopyCheckIcon,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Menu items
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

// Questions array
const questions = [
  "What does UI stand for?",
  "What is the capital of France?",
  "Which language is used for web development?",
  "What is React?",
  "What is the speed of light?",
  "Which language is used for web development?",
];

export function ExamSidebar() {
  const router = useNavigate();

  const currentQuestionIndex = 0; // Replace this with dynamic state logic if needed

  // Timer state
  const [timeRemaining, setTimeRemaining] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    // Timer logic
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  // Format time into hh:mm:ss
  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <Sidebar className="bg-[#f6f6f6] text-gray-500 font-semibold px-2">
      <SidebarHeader>
        <div className="flex justify-between items-center">
          <SidebarGroupLabel className="text-sm font-semibold">
            QUESTION LIST
          </SidebarGroupLabel>
          <div className="text-lg font-bold text-red-600">
            {formatTime(timeRemaining)}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-4">
              {questions.map((question, index) => (
                <QuestionBar
                  key={index}
                  question={question}
                  number={index + 1}
                  isActive={currentQuestionIndex === index}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Button variant="outline" onClick={() => {router("/results")}}>Submit</Button>
      </SidebarFooter>
    </Sidebar>
  );
}

const QuestionBar = ({ question, number, isActive }) => {
  return (
    <div
      className={`flex flex-col items-start border-2 rounded-xl p-3 ${
        isActive ? "bg-[#ebebeb] border-[#999c9b] " : "bg-transparent border-[#cccfce]"
      } text-black gap-5`}
    >
      <div className="flex items-center gap-4 w-full">
        <h2 className="bg-[#dee0e2] py-2 px-3 text-center rounded-xl">
          {number}
        </h2>
        <p className="truncate">{question}</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <CopyCheckIcon />
        <h3>Multiple choice</h3>
      </div>
    </div>
  );
};
