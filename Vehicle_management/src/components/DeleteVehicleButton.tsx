import { useToast } from "@/hooks/use-toast";
import useDeleteVehicle from "@/hooks/useDeleteVehicles";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { useEffect } from "react";

const DeleteVehicleButton = ({ id }: { id: string }) => {
  const deleteVehicle = useDeleteVehicle();
  const { toast } = useToast();

  useEffect(() => {
    if (deleteVehicle.isSuccess) {
      toast({
        title: "Delete succesful",
        variant: "destructive",
      });
    }
  }, [deleteVehicle.isSuccess]);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Delete vehicle</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This will delete this vehicle and can not be reversed.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              variant="solid"
              color="red"
              onClick={() => deleteVehicle.mutate(id)}
            >
              Delete
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteVehicleButton;
