import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiInstance = axios.create({
    baseURL: "https://music-shop-dueo.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export const createInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig,
): Promise<T> => {
    return apiInstance({
        ...config,
        ...options,
    }).then((r: any) => r.data);
};

export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;