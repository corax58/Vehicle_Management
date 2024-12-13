import { VehicleStatus } from "@/data";
import useChangeStatus from "@/hooks/useChangeStatus";
import { Vehicle } from "@/lib/types";
import { Select } from "@radix-ui/themes";

const StatusSelect = ({ Vehicle }: { Vehicle: Vehicle }) => {
  const changeStatus = useChangeStatus(Vehicle._id);
  return (
    <Select.Root
      onValueChange={(e) => changeStatus.mutate(e)}
      defaultValue={Vehicle.status}
    >
      <Select.Trigger />
      <Select.Content variant="soft">
        <Select.Group>
          {VehicleStatus.map((status) => (
            <Select.Item value={status.value}>{status.label} </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default StatusSelect;
