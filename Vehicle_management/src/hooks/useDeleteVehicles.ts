import axiosClient from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteVehicle = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationKey: ["vehicle"],
    mutationFn: async (id: string) => axiosClient.delete("/vehicle/" + id),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ["vehicles"],
      });
    },
  });
};

export default useDeleteVehicle;
