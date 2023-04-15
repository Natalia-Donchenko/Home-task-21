import React from 'react';
import { Routes, Route, Link, Outlet, useParams, useSearchParams, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Users () {
  const [users, setUsers] = useState([])
    useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await response.json();
      setUsers(jsonData);
    }
    fetchData();
  }, []);


  console.log(users)

  return (
    <ul>
      {users?.map(user => (
        
          <li key={user.id}>
            <Link to={`/user?userId=${user.id}`}>{user.name}</Link>
          </li>
       
      ))}
    </ul>
    
  )
}

function Albums () {
  const [params] = useSearchParams()
  const id = params.get('userId')
  const [album, setAlbum] = useState(0)
  const [albums, setAlbums] = useState([])

  console.log(album)
  console.log(id)
 

  useEffect (() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((res) => res.json())
      .then(setAlbum)
  }, [id])



  return (
    

  <ul>
      <li key={album.id}>{album?.title}</li>

    </ul>

  )
}


function App () {
  return (
    <Routes>
      <Route path='/' element={<Users />}></Route>
      <Route path='/user' element={<Albums />}></Route>
    </Routes>
  )
}


export default App;