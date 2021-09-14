import { Link, Outlet } from 'react-router-dom';
import './mainscreen.css'
function MainScreen(){
    return(
        <>
        <div className='container'>
            <div className='search-container'>home</div>
            <div className='main-container'>
                <div className="main-container--filters">Filtrar</div>
                <div className='main-container--lists'>
                    <div className='buttons'>
                        <Link to ='/jobs'><button className='buttonjobs'>Jobs</button></Link>
                        <Link to ='/users'><button className='buttonusers'>Users</button></Link>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainScreen