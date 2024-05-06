import "./searchJobs.css";
import Box from "@mui/material/Box";
import { CircularProgress, Grid, Select } from "@mui/material";
import JobCard from "../../components/jobCard/JobCard";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processJobs, updatePageOffset } from "../../store/features/jobSlice";
import Menu from "../../components/Menu/Menu";
import FilterContainer from "../../components/filterContainer/FilterContainer";

const SearchJobs = () => {
    const dispatch = useDispatch();
    const jobState = useSelector(state => state.jobs);
    const { jds: { list }, status, pageOffset, pageSize } = jobState;
    const [filteredList, setFilteredList] = useState(list);
    const loadingRef = useRef(null);

    useEffect(() => {
        dispatch(processJobs(pageOffset));
    }, [pageOffset])

    useEffect(() => {
        //intersection observer to check the loading div is intersecting the viewport
        const loadingObserver = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) dispatch(updatePageOffset({ value: (pageOffset + pageSize) }))
        }, { threshold: 1 });

        //observe if ref is present and list length exists
        if (loadingRef.current && list.length) {
            loadingObserver.observe(loadingRef.current);
        }

        //clean up the current observer on component unmount
        return () => {
            if (loadingRef.current) loadingObserver.unobserve(loadingRef.current);
        }
    }, [list])

    return (
        <div className="page__container">
            <FilterContainer />

            <main>
                {
                    list.length > 0 &&
                    (<Grid container spacing={{ xs: 3 }} columns={{ xs: 1, sm: 2, md: 3 }} paddingTop={2.5}>
                        {list.map(job => (
                            <Grid item key={job.jdUid} xs={1} sm={1} md={1}>
                                <JobCard jobDetails={job} />
                            </Grid>
                        ))}
                    </Grid>)
                }
                <div ref={loadingRef} className="loader">{status === "pending" && < CircularProgress />}</div>
            </main>
        </div>
    )
}

export default SearchJobs