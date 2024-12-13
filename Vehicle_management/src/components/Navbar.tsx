import { Button } from "@radix-ui/themes";
import { Car, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 px-2 md:px-10  py-3 items-center border-b justify-between">
      <div className="flex gap-2 md:gap-4">
        <Car />
        <p className=" text-base md:text-2xl font-semibold">
          Vehicle Managment
        </p>
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
          {theme == "dark" ? (
            <Moon className="w-5 md:w-10" />
          ) : (
            <Sun className="w-5 md:w-10" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
