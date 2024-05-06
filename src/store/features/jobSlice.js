import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchJobs from "../../apiActions/fetchJobs";

const initialState = {
    status: null,
    jds: {
        list: [],
        totalCount: 0
    },
    jdFilters: {},
    pageOffset: 0,
    pageSize: 6
};

export const processJobs = createAsyncThunk(
    'jobs/processJobs',
    async (offset = 0) => {
        const response = await fetchJobs(offset);
        return response;
    }
)

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        updatePageOffset(state, action) {
            state.pageOffset = action.payload.value;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(processJobs.pending, (state) => { state.status = "pending" });
        builder.addCase(processJobs.fulfilled, (state, action) => {
            state.status = "success";
            state.jds.list.push(...action.payload.jdList);
            state.jds.totalCount = action.payload.totalCount;
        });
        builder.addCase(processJobs.rejected, (state, action) => {
            state.status = "rejected";
        });
    }
});

export const { updatePageOffset } = jobSlice.actions;
export default jobSlice.reducer;