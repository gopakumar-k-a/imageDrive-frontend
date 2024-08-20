// errorHandler.ts
import { toast } from "react-toastify";
import axios from "axios";

export const handleAxiosErrorHelper = (error) => {
  if (axios.isAxiosError(error)) {
    console.log("inside axios error");

    const axiosError = error;
    console.log("axiosError ", axiosError);

    if (axiosError.response) {
      console.log("axiosError.response ", axiosError.response);
      console.log("axiosError.response.data ", axiosError.response.data);

      if (
        axiosError.response.data &&
        (axiosError.response.data.message || axiosError.response.data.error)
      ) {
        const backendError =
          axiosError.response.data.message || axiosError.response.data.error;
        toast.error(backendError);
      } else {
        toast.error("An unexpected error occurred");
      }
    } else {
      toast.error("An unexpected error occurred");
    }
  } else {
    toast.error("An unknown error occurred");
  }
};
