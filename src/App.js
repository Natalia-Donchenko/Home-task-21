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

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <div>{user.name}</div>
          <Link to={`/album?id=${user.id}`}>
            <button>Albums</button>
          </Link>

        </div>
      ))}
    </div>
    
  )
}

function Albums () {
  const [albums, setAlbums] = useState([])
  const [album, setAlbum] = useState({})
   const query = new URLSearchParams(useLocation().search)
   const id = query.get('id')
   console.log(id)
   console.log(album)
   console.log(albums)

   useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
      const jsonData = await response.json();
      setAlbum(jsonData);
    }
    fetchData();
  }, []);

  
  
  return (
  <div>
      <div>{album.title}</div>
      <Link to={`/photos?id=${album.id}`}>
        <button>Photos</button>
    </Link>
 
    </div>

  )
}

  function Photos () {
    const [photos, setPhotos] = useState({})
     const query = new URLSearchParams(useLocation().search)
     const id = query.get('id')
     console.log(id)
  
     useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        const jsonData = await response.json();
        setPhotos(jsonData);
      }
      fetchData();
    }, []);
    return (
     
        <div>hi</div>
    
    )
  }

function App () {
  return (
    <Routes>
      <Route path='/' element={<Users />}></Route>
      <Route path='/album' element={<Albums />}></Route>
      <Route path='/photo' element={<Photos />}></Route>
    </Routes>
  )
}


export default App;