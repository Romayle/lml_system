import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";

const Layout = ({ pageContent, pageName }) => {

  return (
    <SidebarProvider
      // style={{
      //   "--sidebar-width": "20rem",
      //   "--sidebar-width-mobile": "20rem",
      // }}
    >
      <div className="flex flex-1">
        <AppSidebar/>
        <div className="flex-1 px-8">
          <AppHeader pageName={pageName} />
          { pageContent }
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
