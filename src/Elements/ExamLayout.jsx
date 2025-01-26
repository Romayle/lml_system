import { SidebarProvider } from "@/components/ui/sidebar";
import { ExamSidebar } from "./ExamSidebar";
import ExamHeader from "./ExamHeader";

const ExamLayout = ({ pageContent }) => {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "20rem",
        "--sidebar-width-mobile": "20rem",
      }}
    >
      <div className="flex flex-1">
        <ExamSidebar />
        <div className="flex-1 px-8">
          <ExamHeader />
          { pageContent }
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ExamLayout;
