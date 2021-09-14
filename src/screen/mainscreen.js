import { Link, Outlet } from 'react-router-dom';
import SearchCard from '../components/searchcard/searchcard';
import './mainscreen.css'
function MainScreen(){
    return(
        <>
        <div className='container'>
            <div className='search-container'><SearchCard/></div>
            <div className='main-container'>
                <div className="main-container--filters"></div>
                <div className='main-container--lists'>
                    <div className='buttons'>
                        <Link to ='/jobs'><button className='buttonjobs'>JOBS</button></Link>
                        <Link to ='/users'><button className='buttonusers'>USERS</button></Link>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainScreen