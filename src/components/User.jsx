import React from 'react'

const User = ({ person, deleteUser, editvalue }) => {
  return (
    <div className='flex justify-around ml-5'>
        
        <h1>{person.name}</h1>
        <h1 className=''>{person.phone}</h1>
        <span className='cursor-pointer' onClick={() => {deleteUser(person.phone)}}>&#128465;</span>
        <span className='cursor-pointer' onClick={() => {editvalue( person.name, person.phone)}}>&#128295;</span>
    </div>
  )
}

export default User