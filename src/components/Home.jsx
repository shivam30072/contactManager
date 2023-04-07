import  { useState, useEffect, useMemo } from 'react'
import User from './User';

const Home = () => {
    const [values, setValues] = useState({ name: "", phone: "" }); // both fields
    const [contacts, setContacts] = useState([]) // all contacts
    const [users, setUsers] = useState([]); // all users
    const [searchResults, setSearchResults] = useState([]); // searching

    const [isEditing, setIsditing] = useState(false) // for editing

    const [search, setSearch] = useState('')

 

    const {name, phone} = values
    
    // Adding a User
const addUser = () => {

  if(isEditing){
    const editedUser = users.map(user => {
      if(user.name === name ){
        return {...user, phone}
      }
      return user
    })
    setUsers(editedUser)
    setValues({name: "", phone: ""})
    setIsditing(false)
  }
  else{

    if(phone.length === 10 )
  {
    if( !contacts.includes(Number(phone))) // checking  for unique phone numbers
    {
        // for setting values 
        setValues({name: "", phone: ""}) 

    // adding users to the array and sorting them in ascending ordre by their name
      setUsers([...users,  values ].sort((a,b) => a.name > b.name ? 1 : -1)) 
      
      // adding all the contacts at one place 
      setContacts([...contacts, Number(phone)])


    }else{
        alert('phone number is already registered')
    }
  }
  else{
    alert('invalid phone number')
  }
  }
}

// search by Number
const searchByNumber = () => {
    if(contacts.includes(Number(search))){
    const searchedUser = users.filter(user =>  user.phone === search)

    setSearchResults(searchedUser)
    }else{
        alert('user does not exist')
    }
}
 
// deleting a user
const deleteUser = (phone) => {
    const newArr = users.filter(user => user.phone !== phone)
    setUsers(newArr)
    const newArr2 = searchResults.filter(user => user.phone !== phone)
    setSearchResults(newArr2)
    const newArr3 = contacts.filter(phn => phn !== Number(phone))
    setContacts(newArr3)
   
}

//editing values 
const editvalue = (name, phone) => {
  setIsditing(true)
  setValues({name, phone})
}

const filterByName = useMemo(() => {
    return users.filter(user => {
    return user.name.toLowerCase().includes(search.toLowerCase())
  })
}, [users, search])





  return (
    <div className='min-h-[100vh] bg-gray-100 flex justify-center items-center flex-col'>
        <div className='mb-3'>
        <input type='search' value={search} onChange={(e) => {setSearch(e.target.value)}} className='p-2 w-[400px] rounded' placeholder='search by name or phone number' />
        <button onClick={searchByNumber} className='border ml-2 p-2 bg-blue-400 rounded text-white hover:bg-blue-700 transition duration-300'>search</button>
        </div>
        <div className='border rounded-xl shadow-lg shadow-slate-700 w-[50%] h-[500px] bg-slate-300'>
            <div className='flex justify-center'>
            <div className='px-2 py-4 flex'>
                <div className='m-2'>
                  <label className='mx-1 font-serif font-bold'>Name:</label>
                  <input
                   className='px-1 py-[3px] rounded outline-none'
                   placeholder='name' required
                   value={name}
                   name={name}
                   id='name'
                   onChange={(e) => { setValues({...values, name: e.target.value })}}
                   />
               </div>
               <div className='m-2'>
                  <label className='mx-1 font-serif font-bold'>Phone:</label>
                  <input type='number' 
                   className='px-1 py-[3px] rounded outline-none'
                   placeholder='phone number' required
                   value={phone}
                   name={phone}
                   id='phone'
                   onChange={(e) => { setValues({...values, phone: e.target.value })}}
                  />
               </div>
            </div>
             <button
            onClick={addUser}
            className='border px-2 py-[3px] h-[30px] mt-6 bg-green-400 text-white rounded outline-none hover:scale-110 transition duration-300 hover:bg-green-500'>Add  User
             </button>
            </div>
            <div className=' flex flex-col w-[70%] ml-8'>
                {users.length > 0 ?
                 <div className='flex justify-around'>
                    <b className='mx-2'>Name</b>
                    <b>Phone</b>
                    <b>Del</b>
                    <b>Edit</b>
                 </div>
                 : 
                 
                 ''}
            {searchResults.length > 0 ? 
            
            searchResults.map(person => <User key={person.phone} person={person} deleteUser={deleteUser}/>)
            :

            filterByName.map(person => <User key={person.phone} person={person} deleteUser={deleteUser} editvalue = {editvalue}/>)}
            </div>
        </div>
    </div>
  )
}

export default Home