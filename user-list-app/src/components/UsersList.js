import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UsersList({ setActiveUserId }) {
    const [users, setUsers] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {

        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .catch(error => console.log("error:", error))
            .finally(setloading(false))
    }, [])

    //console.log(users);
    return (
        <div>
            <ul>
                <h2>USERS</h2>
                <ul >
                    {loading && <div>Yükleniyor...</div>}

                    {users.map((user) => (
                        <li
                            className='user-list'
                            key={user.id}
                            onClick={() => setActiveUserId(user.id)}
                        >
                            <span>{user.name}</span>
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    )
}

export default UsersList
