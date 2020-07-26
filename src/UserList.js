import React from 'react';

function UserList() {
    const users = [
        {
            id:1,
            username:'hi',
            comments:'lalalalal'
        },
        {
            id:2,
            username:'hello',
            comments:'lalalalal'
        },
        {
            id:3,
            username:'bye',
            comments:'lalalalal'
        }
    
    ];
    return(
        <div>
            <div>
                <b>{users[0].username}</b>
                <span>{users[0].comments}</span> 
            </div>
            <div>
                <b>{users[1].username}</b>
                <span>{users[1].comments}</span> 
            </div>
            <div>
                <b>{users[2].username}</b>
                <span>{users[2].comments}</span> 
            </div>
        </div>
    )
}
export default UserList;