import api from "../lib/axios";
import { AxiosError } from "axios";

export const getUser = () => {
    return api
        .get("posts") // Append endpoint to base URL
        .then((res) => res.data) 
        .catch((err: AxiosError) => {
            throw err;
        });
};
