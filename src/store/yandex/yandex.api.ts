import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {SECRET_YANDEX_API_KEY} from "../../consts/secret-keys";
import {Yandex} from "./yandex.interfaces";
import IYandexGeocodeResponse = Yandex.IYandexGeocodeResponse;


export const yandexApi = createApi({
    reducerPath: 'yandex/api',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://geocode-maps.yandex.ru/1.x/`,
    }),
    endpoints: (build) => ({
        getPointByName: build.query<
            IYandexGeocodeResponse,
            string
        >({
            query: (query) => ({
                url: `?apikey=${SECRET_YANDEX_API_KEY}&format=json&geocode=${query}`
            })
        })
    })
})

export const {useLazyGetPointByNameQuery} = yandexApi;