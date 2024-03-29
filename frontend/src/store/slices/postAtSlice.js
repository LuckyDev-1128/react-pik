import { POSTAT_URL } from "../../constants";
import { apiSlice } from './apiSlice'

export const postAtSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerPostAt: builder.mutation({
            query: (data) => ({
                url: POSTAT_URL,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {useRegisterPostAtMutation} = postAtSlice;