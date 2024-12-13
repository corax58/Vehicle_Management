import axiosClient from "@/lib/axiosClient";
import { Vehicle } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const useFetchVehicles = () => {
  return useQuery<Vehicle[]>({
    queryKey: ["vehicles"],
    queryFn: async () =>
      await axiosClient.get("/vehicle").then((res) => res.data),
  });
};

export default useFetchVehicles;
