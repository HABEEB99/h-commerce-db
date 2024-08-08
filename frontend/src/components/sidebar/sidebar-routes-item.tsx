"use client";

import { usePathname, useRouter } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ISidebarRoutesItemProps {
  icon: LucideIcon;
  name: string;
  link: string;
}

const SidebarRoutesItem: React.FC<ISidebarRoutesItemProps> = ({
  name,
  link,
  icon: Icon,
}) => {
  const pathName = usePathname();
  const router = useRouter();

  const isActiveRoute =
    (pathName === "/" && link === "/") ||
    pathName === link ||
    pathName?.startsWith(`${link}/`);

  const switchRoute = () => router.push(link);

  return (
    <button
      type="button"
      onClick={switchRoute}
      className={cn(
        "group flex h-10 items-center space-x-3 px-2 text-gray-500 transition-all hover:bg-[#635AD926] hover:text-[#635AD9]",
        isActiveRoute && "bg-[#635AD926] text-[#635AD9]",
      )}
    >
      <Icon
        className={cn(
          "group-hover:text-text_purple h-5 w-5 text-gray-500",
          isActiveRoute && "text-text_purple",
        )}
      />
      <h3
        className={cn(
          "group-hover:text-text_purple text-gray-500",
          isActiveRoute && "text-text_purple",
        )}
      >
        {name}
      </h3>
    </button>
  );
};

export default SidebarRoutesItem;
