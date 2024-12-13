import axiosClient from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useChangeStatus = (id: string) => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationKey: ["vehicle"],
    mutationFn: async (status: string) =>
      axiosClient.patch("/vehicle/" + id, { status: status }),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ["vehicles"],
      });
    },
  });
};

export default useChangeStatus;
