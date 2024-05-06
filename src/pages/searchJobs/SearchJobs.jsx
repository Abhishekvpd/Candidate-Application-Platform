import "./searchJobs.css";
import Box from "@mui/material/Box";
import { CircularProgress, Grid } from "@mui/material";
import JobCard from "../../components/jobCard/JobCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processJobs, updatePageOffset } from "../../store/features/jobSlice";

const SearchJobs = () => {
    const dispatch = useDispatch();
    const jobState = useSelector(state => state.jobs);
    const { jds, status, pageOffset, pageSize } = jobState;

    useEffect(() => {
        dispatch(processJobs(pageOffset));
    }, [pageOffset])

    return (
        <div className="page__container">
            <section className="filter__container">
                <h2>Filter</h2>
            </section>

            <main>
                {
                    status === "pending" && !jds.totalCount ? < CircularProgress /> :
                        <Grid container spacing={{ xs: 3 }} columns={{ xs: 1, sm: 2, md: 3 }} paddingTop={2.5}>
                            {jds?.list.map(job => (
                                <Grid item key={job.jdUid} xs={1} sm={1} md={1}>
                                    <JobCard jobDetails={job} />
                                </Grid>
                            ))}
                        </Grid>
                }
            </main>
            <button onClick={() => (dispatch(updatePageOffset({ value: (pageOffset + pageSize) })))}>Load</button>
        </div>
    )
}

export default SearchJobs