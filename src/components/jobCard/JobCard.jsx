import { Box, Button, Card, CardContent, Paper, Typography } from "@mui/material";
import "./jobCard.css";
import { useState } from "react";

const JobCard = ({ jobDetails }) => {
    const [isJobDescriptionExpanded, setIsJobDescriptionExpanded] = useState(false);

    const { logoUrl, companyName, jobRole, location, minJdSalary, maxJdSalary, salaryCurrencyCode, minExp, maxExp, jobDetailsFromCompany } = jobDetails;
    const estimatedSalary = minJdSalary && maxJdSalary ? `${minJdSalary} - ${maxJdSalary}` : minJdSalary || maxJdSalary;

    return (
        <Card className="job-card" sx={{ maxWidth: 360, borderRadius: 5, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px 0px', padding: 1.5 }}>
            <CardContent sx={{ width: '100%', padding: '0.5rem', display: 'flex', flexDirection: 'column' }}>
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
                <Box sx={{ height: '250px', display: 'flex', flexDirection: 'column', ...(isJobDescriptionExpanded ? { overflowY: 'scroll' } : { overflow: 'hidden', maskImage: 'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))' }) }}>
                    <Typography variant="p" sx={{ fontSize: '1rem', fontWeight: 500, lineHeight: 1.5 }}>Job Details:</Typography>
                    <Typography variant="p" sx={{ fontSize: '14px', fontWeight: 400 }}>{jobDetailsFromCompany}</Typography>
                </Box>

                <Box sx={{ textAlign: 'center', position: 'relative', top: '-20px', ...(isJobDescriptionExpanded && { visibility: 'hidden' }) }}>
                    <Button variant="text" sx={{ color: '#4943da', textTransform: 'none' }} onClick={() => setIsJobDescriptionExpanded(true)}>See more</Button>
                </Box>

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