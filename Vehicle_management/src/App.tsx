import Navbar from "./components/Navbar";
import VehicleTable from "./components/VehicleTable";
import VehicleForm from "./components/VehicleForm";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <div className=" flex flex-col px-2 md:px-10 gap-5">
        <VehicleForm />
        <VehicleTable />
      </div>
      <Toaster />
    </div>
  );
}
