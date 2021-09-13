import { useEffect, useState } from "react"
import JobCard from "../jobcard/jobcard"

const URL= 'https://search.torre.co/opportunities/_search/?'

function JobsList(){
    const [jobs, setJobs] = useState({});
    const [fetching, setFetching] =  useState(true)

    useEffect (()=>{
        async function fetchJobs(){
            fetch(URL, {
                method: 'POST'
            })
            .then(res => res.json())
            //.then(res => console.log(res))
            .then(res => {
                setJobs(res)
                setFetching(false)
            })
        }
        fetchJobs()
    },[]
    )
    return(
        <>
        {fetching == false ? (
            jobs.results.map(job => (
                //console.log(job)
                <JobCard jobInfo = {job}/>
             ) )
        ) : 'fetching...'}
        </>
    )
}
export default JobsList