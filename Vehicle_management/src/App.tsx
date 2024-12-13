import Navbar from "./components/Navbar";
import VehicleTable from "./components/VehicleTable";
import VehicleForm from "./components/VehicleForm";

export default function App() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div>
        <VehicleForm />
        <VehicleTable />
      </div>
    </div>
  );
}
