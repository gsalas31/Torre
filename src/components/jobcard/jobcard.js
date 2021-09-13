import './jobcard.css'

function JobCard (props){
   return (
       <>
       <div className="jobcardoutline">
       <h1 id='title_card'>{props.jobInfo.objective}</h1>
       <h3 id="companyname">{props.jobInfo.organizations[0].name}</h3>
       <div className="typelocation">
       <p >{props.jobInfo.type}</p><p id='jobslocations'>{props.jobInfo.locations
            .map(location => <ol id='jobslocations'>{location}</ol>) }</p>
       </div>
       <p id='compensation'>{props.jobInfo.compensation.data.currency}</p>
       </div>
       </>

    )
}

export default JobCard