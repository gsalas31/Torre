import './jobcard.css'

function JobCard (props){
   return (
       <>
        <div className="jobcardoutline">
            <h2 id='title_card'>{props.jobInfo.objective}</h2>
            <h3 id="companyname">{props.jobInfo.organizations[0].name}</h3>
            <div className="type_and_location">
                <p className='job_type'>{props.jobInfo.type}</p>
                <p className='jobslocations'>{props.jobInfo.locations
                    .map(location => <ol className='jobslocations'>{location}</ol>) }</p>
            </div>
                {props.jobInfo.compensation.visible == true ? (
                    <p class='compensation'>{props.jobInfo.compensation.data.currency}<></>
                    {props.jobInfo.compensation.data.minAmount} <>- </>
                    {props.jobInfo.compensation.data.currency}
                    {props.jobInfo.compensation.data.maxAmount} <></>
                    / {props.jobInfo.compensation.data.periodicity}</p> 
                ) : (<p class='compensation'>Compesación Oculta</p>) }
        </div>
       </>
    )
}

export default JobCard