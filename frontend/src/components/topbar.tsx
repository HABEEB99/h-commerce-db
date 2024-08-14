import { Logo, User } from "@/components";
import { Bell } from "lucide-react";

const Topbar = () => {
  return (
    <header className="shadow-modal bg-light/70 dark:bg-dark/70 sticky inset-x-0 z-50 flex h-12 w-full items-center justify-between p-3 shadow-md backdrop-blur-lg transition-all">
      <div className="lg:hidden">
        <Logo />
      </div>

      <div className="sm:hidden lg:block" />

      <div className="flex items-center justify-center space-x-3">
        <Bell className="h-4 w-4 cursor-pointer" />
        <User />
      </div>
    </header>
  );
};

export default Topbar;
