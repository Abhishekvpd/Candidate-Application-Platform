import { Box } from "@mui/material";
import Select from "../input/Select";
import "./filterContainer.css";
import { filterConfig } from "../../utils/filterConfig";
import { useDispatch } from "react-redux";
import { updateJdFilters } from "../../store/features/jobSlice";
import TextField from "../input/TextField";

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
                            <TextField config={filter} onChange={handleSelectChange} />
                    }
                </Box>)
                )
            }
        </section>
    )
}

export default FilterContainer