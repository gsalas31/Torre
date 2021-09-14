import './usercard.css'

function UserCard (props){
    return (
        <>
        <div className='jobcardoutline' >
        <h2 className='name_user'>{props.userInfo.name}</h2>
        <h4 className='subtitle_headline'>{props.userInfo.professionalHeadline}</h4>
        <h4 className='subtitle_location'>{props.userInfo.locationName}</h4>
        <ul className="skills">{props.userInfo.skills
        .map(skill => <ol id="list_item">{skill.name}</ol>)}
        </ul>
        <p className='open_to'> Open to: 
            <ul>
                {props.userInfo.openTo
                .map(openToCategory => <ol className='list'>{openToCategory}</ol>)
                }
            </ul>
        </p>
        </div>
        </>
     )
 }
 
 export default UserCard








