import { ChevronDown, Slash } from "lucide-react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function BreadcrumbWithDropdown() {
  return (
    <Breadcrumb className="flex items-center space-x-2 text-black text-lg">
      <BreadcrumbList className="flex items-center space-x-2">
        
        {/* Home / Pradzia */}
        <BreadcrumbItem>
          <Link href="/" className="hover:underline text-xl text-black transition-all duration-200 hover:scale-105 hover:text-white">
            Pradžia
          </Link>
        </BreadcrumbItem>
        
        <BreadcrumbSeparator>
          <Slash className="w-6 h-6 text-black transition-all duration-200 hover:scale-110 hover:text-white" /> {/* Changed hover to white */}
        </BreadcrumbSeparator>

        {/* Apie Mane Dropdown */}
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:underline text-xl text-black transition-all duration-200 hover:scale-105 hover:text-white">
              Apie Mane
              <ChevronDown className="h-5 w-5 transition-all duration-200 hover:scale-110 hover:text-white" /> {/* Changed hover to white */}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="mt-2 bg-white shadow-lg rounded-md py-1">
              <DropdownMenuItem asChild>
                <Link href="/gyvuneliai" className="hover:bg-gray-100 px-4 py-2 text-black transition-all duration-200 hover:scale-105 hover:text-white">
                  Mano Augintiniai
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/seima" className="hover:bg-gray-100 px-4 py-2 text-black transition-all duration-200 hover:scale-105 hover:text-white">
                  Šeima
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/kazkas" className="hover:bg-gray-100 px-4 py-2 text-black transition-all duration-200 hover:scale-105 hover:text-white">
                  Dar kažkas
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        
        <BreadcrumbSeparator>
          <Slash className="w-6 h-6 text-black transition-all duration-200 hover:scale-110 hover:text-white" /> {/* Changed hover to white */}
        </BreadcrumbSeparator>

        {/* Pabaiga */}
        <BreadcrumbItem>
          <Link href="/pabaiga" className="text-xl text-black transition-all duration-200 hover:scale-105 hover:text-white">
            Pabaiga
          </Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
