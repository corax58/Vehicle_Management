import axiosClient from "@/lib/axiosClient";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

const useCreateVehicles = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationKey: ["vehicle"],
    mutationFn: async (data: any) => axiosClient.post("/vehicle", data),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ["vehicles"],
      });
    },
  });
};

export default useCreateVehicles;
