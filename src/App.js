import React from 'react';
import { Routes, Route, Link, Outlet, useParams, useSearchParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Users () {
  const [users, setUsers] = useState([])
  const [searchParams] = useSearchParams()


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await response.json();
      setUsers(jsonData);
    }
    fetchData();
  }, []);


  return (
    <div>
      {
        users.map(user => (
          <Link 
            key={user.id} 
            to={`/users/${user.id}`}
          >
            <li>{user.name}</li>
          </Link>
        ))
      }
    </div>
  )
  
}

function Albums () {
 
  return
}

function Photos() {
  return 
}

function App() {

 
  return (
    <>
      <div>
        <Link to='/'>Users</Link>
      </div>


      <Routes>
        <Route path='/' element={<Users />}>
         {/* <Route path='/albums' element={<Albums />}>
          <Route path='/photos' element={<Photos />} />
         </Route> */}
        </Route>
      </Routes>

      <Outlet />
    </>
   
    
  )
    
}

export default App;