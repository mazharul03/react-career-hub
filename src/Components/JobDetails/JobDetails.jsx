import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id}= useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job=>job.id===idInt);
    console.log(job);

    const handleApplyJob=() =>{
        saveJobApplication(idInt);
        toast('You have applied successfully')
    }
    return (
        <div>
            
            <div className="grid gap-6 md:grid-cols-4">
                <div className="border p-10 space-y-6 md:col-span-3">
                    <p><span className="font-semibold">Job  Description :</span>{job.job_description}</p>
                    <p><span className="font-semibold">Job Responsibility : </span>{job.job_responsibility}</p>
                    <h2 className="font-semibold">Education Requirement :</h2>
                    <p>{job.educational_requirements}</p>
                    <h2 className="font-semibold">Experiences :</h2>
                    <p>{job.experiences}</p>
                </div>
                <div className="space-y-4">
                    <div className="bg-slate-700 rounded-lg p-6">
                        <h2 className="text-2xl pl-2">Job Details</h2>

                        <p className="border border-slate-600 my-4"></p>
                        <div>
                        <h2 className="flex"><CiDollar className="text-2xl text-blue-600 mr-2" />Salary : {job.salary} (Per Month)</h2>
                        <h2 className="flex mt-2"><IoCalendarOutline className="text-2xl text-blue-600 mr-2" />Job Title : {job.job_title}</h2>
                        </div>

                        <h2 className="text-2xl pl-2 py-4">Contact Information</h2>

                        <p className="border border-slate-600"></p>
                        <h2 className="flex py-4"><FiPhone className="text-2xl text-blue-600 mr-2" />Phone : {job.contact_information.phone}</h2>
                        <h2 className="flex"><MdOutlineMailOutline className="text-2xl text-blue-600 mr-2" />Email : {job.contact_information.email}</h2>
                        <h2 className="flex"><IoLocationOutline className="text-6xl mt-2
                         text-blue-600 mr-2"/>Address : {job.contact_information.address}</h2>


                    </div>
                    
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    
    );
};

export default JobDetails;