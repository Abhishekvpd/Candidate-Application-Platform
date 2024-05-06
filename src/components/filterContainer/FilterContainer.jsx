import { Box, TextField } from "@mui/material";
import Select from "../select/Select";
import "./filterContainer.css";
import { filterConfig } from "../../utils/filterConfig";
import { useDispatch } from "react-redux";
import { updateJdFilters } from "../../store/features/jobSlice";

const FilterContainer = () => {
    const dispatch = useDispatch();

    const handleSelectChange = (filter) => {
        dispatch(updateJdFilters(filter))
    }

    return (
        <section className="filter__container">
            {
                filterConfig.map((filter, index) =>
                (<Box sx={{ display: 'flex', flexDirection: 'column' }} key={index}>
                    {
                        filter.type === "SELECT" ?
                            <Select config={filter} onChange={handleSelectChange} /> :
                            <TextField variant="outlined" placeholder={filter.placeholder} name={filter.name} onChange={(e) =>
                                dispatch(updateJdFilters({
                                    name: e.target.name,
                                    value: e.target.value
                                }))} />
                    }
                </Box>)
                )
            }
        </section>
    )
}

export default FilterContainer