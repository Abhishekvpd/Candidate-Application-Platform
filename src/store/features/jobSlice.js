import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchJobs from "../../apiActions/fetchJobs";
import { FilterActionTypes } from "../../utils/types";

const { ROLES, MIN_EXP, LOCATION, IS_REMOTE, MIN_JD_SALARY, COMPANY_NAME } = FilterActionTypes;

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
    async (offset = 0, { rejectWithValue, signal }) => {
        try {
            const response = await fetchJobs(offset, signal);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        updatePageOffset(state, action) {
            state.pageOffset = action.payload.value;
        },
        updateJdFilters(state, { payload }) {
            switch (payload.name) {
                case ROLES:
                    state.jdFilters.roles = (payload.value);
                    break;
                case MIN_EXP:
                    state.jdFilters.minExp = payload.value;
                    break;
                case LOCATION:
                    state.jdFilters.location = payload.value;
                    break;
                case IS_REMOTE:
                    state.jdFilters.isRemote = (payload.value)
                    break;
                case MIN_JD_SALARY:
                    state.jdFilters.minJdSalary = payload.value;
                    break;
                case COMPANY_NAME:
                    state.jdFilters.companyName = payload.value;
                    break;
            }
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

export const { updatePageOffset, updateJdFilters } = jobSlice.actions;
export default jobSlice.reducer;