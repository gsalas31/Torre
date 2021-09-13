import { useEffect, useState } from "react"
import UserCard from "../usercard/usercard";

const URL= 'https://torre-proxy.herokuapp.com/search.torre.co/people/_search/'

function  UsersList(){
    const [users, setUsers] = useState({});
    const [fetching, setFetching] = useState(true);

    useEffect (()=>{
        async function fetchUsers(){
            fetch(URL, {
                method: 'POST'
            })
            .then(res => res.json())
            //.then(res => console.log(res))
            .then(res => {
                setUsers(res)
                setFetching(false)
            })
        }
        fetchUsers()
    },[]
    )
    return(
        <>
        {fetching == false ? (
            users.results.map(user => (
                //console.log(user)
                <UserCard userInfo = {user}/>
             ) )
        ) : 'fetching...'}
        </>
    )
}
export default UsersList