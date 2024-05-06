import { Box, Button, Card, CardContent, Paper } from "@mui/material";
import "./jobCard.css";

const JobCard = ({ jobDetails }) => {
    const { logoUrl, companyName, jobRole, location, minJdSalary, maxJdSalary, salaryCurrencyCode, minExp, maxExp } = jobDetails;
    const estimatedSalary = minJdSalary && maxJdSalary ? `${minJdSalary} - ${maxJdSalary}` : minJdSalary || maxJdSalary;

    return (
        <Card className="job-card" sx={{ maxWidth: 360, borderRadius: 5, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px 0px', padding: 1.5 }}>
            <CardContent sx={{ width: '100%', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                    <Box component="img" src={logoUrl} alt="logo" sx={{ height: '2.5rem', width: '2.5rem' }}></Box>
                    <div className="card__header">
                        <h3>{companyName}</h3>
                        <h2>{jobRole}</h2>
                        <p>
                            <span className="location">{location}</span> {(minExp && maxExp) && <span>| Exp: {minExp} - {maxExp} years</span>}
                        </p>
                    </div>
                </Box>
                {
                    (minJdSalary || maxJdSalary) &&
                    <p className="job-salary">Estimated Salary: {`${estimatedSalary} ${salaryCurrencyCode}`}</p>
                }
                <Box sx={{ height: '250px' }}></Box>

                <div>
                    <h3>Minimum Experience</h3>
                    <h2>{minExp || 0} years</h2>
                </div>

            </CardContent>
            <div className="card__actions">
                <Button variant="text" sx={{
                    width: '100%', textTransform: 'none', backgroundColor: 'rgb(85, 239, 196)',
                    color: '#000000',
                    fontWeight: 500,
                    fontSize: '1rem'
                }} className="apply-cta">⚡ Easy Apply</Button>
            </div>
        </Card >
    )
}

export default JobCard