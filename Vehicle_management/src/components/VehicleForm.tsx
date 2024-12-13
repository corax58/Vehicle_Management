import { VehicleStatus } from "@/data";
import useCreateVehicles from "@/hooks/useCreateVehicle";
import {
  Button,
  Dialog,
  Flex,
  TextField,
  Text,
  Select,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const VehicleForm = () => {
  const createVehicle = useCreateVehicles();
  const { register, handleSubmit, control } = useForm();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (createVehicle.isSuccess) {
      setIsOpen(false);
    }
  }, [createVehicle.isSuccess]);

  return (
    <div>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger>
          <Button>Add a vehicle</Button>
        </Dialog.Trigger>
        <Dialog.Description />
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Add vehicle</Dialog.Title>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              createVehicle.mutate(data);
            })}
          >
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Vehicle Name
                </Text>
                <TextField.Root
                  placeholder="Enter the vehicle name"
                  {...register("name", { required: true, maxLength: 20 })}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Type
                </Text>
                <TextField.Root
                  placeholder="Enter the vehicle type"
                  {...register("type", { required: true, maxLength: 20 })}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Model
                </Text>
                <TextField.Root
                  placeholder="Enter the vehicle status"
                  {...register("model", { required: true, maxLength: 20 })}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Status
                </Text>
                <Controller
                  name="status"
                  control={control}
                  defaultValue={"available"}
                  render={({ field }) => (
                    <Select.Root
                      onValueChange={field.onChange}
                      defaultValue="available"
                    >
                      <Select.Trigger />
                      <Select.Content variant="soft">
                        <Select.Group>
                          {VehicleStatus.map((status) => (
                            <Select.Item value={status.value} key={status.id}>
                              {status.label}{" "}
                            </Select.Item>
                          ))}
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>
                  )}
                />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Button type="submit">Save</Button>
            </Flex>
          </form>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default VehicleForm;
