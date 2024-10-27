import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id}= useParams();
    console.log(id,jobs);
    return (
        <div>
            <h2>Show Details of :</h2>
        </div>
    
    );
};

export default JobDetails;