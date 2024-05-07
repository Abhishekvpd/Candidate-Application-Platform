import { CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterContainer from "../../components/filterContainer/FilterContainer";
import JobCard from "../../components/jobCard/JobCard";
import { processJobs, updatePageOffset } from "../../store/features/jobSlice";
import { FilterActionTypes } from "../../utils/types";
import "./searchJobs.css";

const SearchJobs = () => {
    const dispatch = useDispatch();
    const jobState = useSelector(state => state.jobs);
    const { jds: { list }, status, pageOffset, pageSize, jdFilters } = jobState;
    const [filteredList, setFilteredList] = useState(list)
    const { ROLES, MIN_EXP, LOCATION, IS_REMOTE, MIN_JD_SALARY, COMPANY_NAME } = FilterActionTypes;
    const loadingRef = useRef(null);

    //to handled added filter
    const handleFilter = () => {
        const { roles, minExp, location, isRemote, minJdSalary, companyName } = jdFilters;
        let filteredJd = list.slice();
        for (let filter of Object.keys(jdFilters)) {
            switch (filter) {
                case ROLES:
                    if (roles && roles.length > 0)
                        filteredJd = filteredJd.filter(jd => roles.includes(jd.jobRole));
                    break;
                case IS_REMOTE:
                    if (isRemote && isRemote.length > 0)
                        filteredJd = filteredJd.filter(jd => isRemote.includes(jd.location) || isRemote.includes('in-office'));
                    break;
                case MIN_EXP:
                    if (minExp)
                        filteredJd = filteredJd.filter(jd => jd.minExp <= minExp && minExp <= jd.maxExp);
                    break;
                case LOCATION:
                    if (location)
                        filteredJd = filteredJd.filter(jd => (jd.location).toLowerCase().includes(location.toLowerCase()));
                    break;
                case MIN_JD_SALARY:
                    if (minJdSalary)
                        filteredJd = filteredJd.filter(jd => (jd.minJdSalary >= minJdSalary) || (jd.maxJdSalary >= minJdSalary));
                    break;
                case COMPANY_NAME:
                    if (companyName)
                        filteredJd = filteredJd.filter(jd => (jd.companyName).toLowerCase().includes(companyName.toLowerCase()));
                    break;
            }
        }
        return filteredJd;
    }

    // to parse through filters whnenever new data is added
    const parseFilters = () => {
        const filteredList = handleFilter();
        setFilteredList(filteredList);
    }

    useEffect(() => {
        dispatch(processJobs(pageOffset))
    }, [pageOffset]);

    useEffect(() => {
        if (Object.keys(jdFilters).length) parseFilters();
        else setFilteredList(list);
    }, [jdFilters, list])

    // useEffect(() => {
    //     //intersection observer to check the loading div is intersecting the viewport
    //     const loadingObserver = new IntersectionObserver(([target]) => {
    //         if (target.isIntersecting) dispatch(updatePageOffset({ value: (pageOffset + pageSize) }))
    //     }, { threshold: 1 });

    //     //observe if ref is present and list length exists
    //     if (loadingRef.current && list.length) {
    //         loadingObserver.observe(loadingRef.current);
    //     }

    //     //clean up the current observer on component unmount
    //     return () => {
    //         if (loadingRef.current) loadingObserver.unobserve(loadingRef.current);
    //     }
    // }, [filteredList])

    return (
        <div className="page__container">
            <FilterContainer />

            <main>
                {
                    filteredList.length > 0 &&
                    (<section className="job-card__container">
                        {filteredList.map(job => (
                            <JobCard jobDetails={job} key={job.jdUid} />
                        ))}
                    </section>)
                }
                <div ref={loadingRef} className="loader">{status === "pending" && < CircularProgress />}</div>
            </main>
        </div>
    )
}

export default SearchJobs