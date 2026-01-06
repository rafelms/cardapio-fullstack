import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { type AxiosPromise } from "axios";
import type { FoodData } from '../interface/FoodData';

const API_URL = import.meta.env.VITE_API_URL;

const postData = async (data: FoodData): AxiosPromise<any> => {
    return axios.post(`${API_URL}/food`, data);
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            // Correção da v5: use um objeto com a propriedade queryKey
            queryClient.invalidateQueries({ queryKey: ['food-data'] });
        }
    });

    return mutate;
}