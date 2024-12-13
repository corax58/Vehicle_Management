import Navbar from "./components/Navbar";
import VehicleTable from "./components/VehicleTable";
import VehicleForm from "./components/VehicleForm";

export default function App() {
  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <div className=" flex flex-col px-10 gap-5">
        <VehicleForm />
        <VehicleTable />
      </div>
    </div>
  );
}
