import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { type AxiosPromise } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const deleteData = async (id: number): AxiosPromise<any> => {
    return axios.delete(`${API_URL}/food/${id}`);
}

export function useFoodDataDelete() {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: deleteData,
        onSuccess: () => {
            // Atualiza a lista automaticamente após deletar
            queryClient.invalidateQueries({ queryKey: ['food-data'] });
        }
    });

    return mutate;
}