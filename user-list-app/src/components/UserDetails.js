import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./user-detail.css"
function UserDetails({ activeUserId }) {

    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
            .then(res => setUser(res.data))
            .catch(error => console.log("error:", error))
            .finally(setLoading(false))
    }, [activeUserId])
    console.log(user);
    return (
        <div className='card'>
            <div className='container'>
                <h2 style={{ marginTop: "9px" }}>User Details</h2>
                {loading && <div>Loading...</div>}
                <h4><b>
                    {user.name}
                </b></h4>
                <hr />
                <p>
                    <strong>Username: </strong> {user.username}
                </p>
                <p>
                    <strong>Phone: </strong> {user.phone}
                </p>
                <p>
                    <strong>E-Mail: </strong> {user.email}
                </p>
                <p>
                    <strong>WebSite: </strong> {user.website}
                </p>
            </div>
        </div>
    )
}

export default UserDetails
