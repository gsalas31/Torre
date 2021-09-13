function JobCard (props){
   return (
       <>
       <div className="jobcardoutline">
       <h1>{props.jobInfo.objective}</h1>
       <h3 id="companyname">{props.jobInfo.organizations[0].name}</h3>
       <div className="positionlocation">
       <p>Position</p><p>Location</p>
       </div>
       <p>Compensation</p>
       </div>
       </>

    )
}

export default JobCard