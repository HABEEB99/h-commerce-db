"use client";

import * as React from "react";
import { Monitor, Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <span>Theme</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex cursor-pointer items-center space-x-2"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex cursor-pointer items-center space-x-2"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-4 w-4" />
          <span> Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex cursor-pointer items-center space-x-2"
          onClick={() => setTheme("system")}
        >
          <Monitor className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
