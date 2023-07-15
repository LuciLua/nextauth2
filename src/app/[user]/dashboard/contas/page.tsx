'use client'

import TableItem from "../../../../components/TableItem/TableItem"

export default function contas() {



    const users = JSON.parse(localStorage.getItem('users'))



    return (
        <div>
        <p>contas</p>
<div>
    {users.map(user => {
        return(
            <TableItem date="???" id="???" name={user.name} owner={user.name} email={user.email} image={user.image}/>
        )
    })}
</div>
        </div>
    )
}