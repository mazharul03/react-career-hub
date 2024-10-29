import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(()=>{
        const storedJobsIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = [];
            for(const id of storedJobsIds){
                const job = jobs.find(job => job.id === id );
                if(job){
                    jobsApplied.push(job)
                }
            }
        }
    } ,[])
    return (
        <div>
            <h2>Jobs I applied</h2>
        </div>
    );
};

export default AppliedJobs;