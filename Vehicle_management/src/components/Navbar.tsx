import { Button, Popover } from "@radix-ui/themes";
import { Car, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div className="flex gap-2  py-3 items-center border-b justify-between">
      <div className="flex gap-4">
        <Car fill="1" />
        <p className=" text-2xl font-semibold">Vehicle Managment</p>
      </div>
      <div>
        <Button
          variant="ghost"
          className="w-min h-min"
          onClick={() => {
            if (theme == "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        >
          {theme == "dark" ? <Moon /> : <Sun />}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
