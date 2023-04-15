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
            {user.name}
            <Link to={`/user?userId=${user.id}`}>
              <button>albums</button>
            </Link>
          </li>
       
      ))}
    </ul>
    
  )
}

function Albums () {
  const [params] = useSearchParams()
  const id = params.get('userId')
  const [album, setAlbum] = useState({})
  const [albums, setAlbums] = useState([])

  console.log(album)
  console.log(id)
  console.log(albums)


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
      const jsonData = await response.json();
      setAlbum(jsonData);
    }
    fetchData();
  }, []);
 
  if (id) {
    
  }
  return (
    

  <ul>
    
      <li key={album.id}>
        {album?.title}
        <Link to={`/album?albumId=${album.id}`}>
              <button>photos</button>
            </Link>
      </li>

    </ul>

  )
}

function Photos () {

  const [params] = useSearchParams()
  const id = params.get('albumId')
  const [photo, setPhoto] = useState()
  console.log(photo)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
      const jsonData = await response.json();
      setPhoto(jsonData);
    }
    fetchData();
  }, [id]);

  return (
    <ul>
    
        <li>
          <img></img>
        </li>

    </ul>
  )
}


function App () {
  return (
    <Routes>
      <Route path='/' element={<Users />}></Route>
      <Route path='/user' element={<Albums />}></Route>
      <Route path='/album' element={<Photos/>}></Route>
    </Routes>
  )
}


export default App;