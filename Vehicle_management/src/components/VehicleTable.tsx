import useFetchVehicles from "@/hooks/useFetchVehicles";
import { Spinner, Table } from "@radix-ui/themes";
import DeleteVehicleButton from "./DeleteVehicleButton";
import StatusSelect from "./StatusSelect";

const VehicleTable = () => {
  const { data: Vehicles, error, isPending } = useFetchVehicles();
  if (isPending)
    return (
      <div className="w-full flex justify-center">
        <Spinner />
      </div>
    );
  if (error) return <p>Error</p>;
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Vehicle Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Model</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {Vehicles.map((Vehicle) => (
          <Table.Row key={Vehicle._id}>
            <Table.RowHeaderCell>{Vehicle.name}</Table.RowHeaderCell>
            <Table.RowHeaderCell>{Vehicle.type}</Table.RowHeaderCell>
            <Table.RowHeaderCell>{Vehicle.model}</Table.RowHeaderCell>
            <Table.RowHeaderCell>
              <StatusSelect Vehicle={Vehicle} />
            </Table.RowHeaderCell>
            <Table.RowHeaderCell>
              <DeleteVehicleButton id={Vehicle._id} />
            </Table.RowHeaderCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default VehicleTable;
