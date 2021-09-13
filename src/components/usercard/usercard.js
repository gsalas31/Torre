import './usercard.css'

function UserCard (props){
    return (
        <>
        <div className='jobcardoutline' >
        <h2 className='name_user'>{props.userInfo.name}</h2>
        <h4 className='subtitle'>Professional Headline</h4>
        <h4 className='subtitle'>Location Name </h4>
        <ul className="skills">
            <ol id="list_item">HTML</ol>
            <ol id="list_item">CSS</ol>
            <ol id="list_item">JavaScript</ol>
            <ol id="list_item">PHP</ol>
        </ul>
        <p className='opento'> Open to: 



        </p>
        </div>
        </>
     )
 }
 
 export default UserCard








