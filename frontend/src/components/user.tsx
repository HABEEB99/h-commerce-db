import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import { User2 } from "lucide-react";

const User = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <User2 className="h-4 w-4 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="/login">Login</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/register">Register</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <ThemeSwitcher />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default User;
