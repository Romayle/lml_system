import { Input } from "@/components/ui/input";
import AppCard from "@/Elements/AppCard";

const CoursesPage = () => {
  const cards = Array(7).fill(null); // Dynamic card rendering, adjust length as needed

  return (
    <div className="flex flex-col gap-6">
      {/* Tabs Section */}
      <div>
        {/* Mobile Tabs */}
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">
            Select Tab
          </label>
          <select
            id="Tab"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200"
            defaultValue="Notifications"
          >
            <option value="Settings">Settings</option>
            <option value="Messages">Messages</option>
            <option value="Archive">Archive</option>
            <option value="Notifications">Notifications</option>
          </select>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-6" aria-label="Tabs" role="tablist">
              {["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"].map((tab, index) => (
                <a
                  key={tab}
                  href="#"
                  role="tab"
                  aria-current={tab === "Category 2" ? "page" : undefined}
                  className={`shrink-0 border-b-2 px-1 pb-2 text-sm font-medium ${
                    tab === "Category 2"
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <Input
        className="w-1/2 border-transparent"
        type="search"
        placeholder="Search Course..."
      />

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((_, index) => (
          <AppCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
