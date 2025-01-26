import { SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "./AppHeader";
import { ExamSidebar } from "./ExamSidebar";

const ExamLayout = ({ pageContent }) => {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "20rem",
        "--sidebar-width-mobile": "20rem",
      }}
    >
      <div className="flex">
        <ExamSidebar />
        <div className="flex-1 px-8">
          {/* <AppHeader /> */}
          { pageContent }
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ExamLayout;
