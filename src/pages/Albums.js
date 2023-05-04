import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Albums = () => {

  const [params] = useSearchParams();
  const id = params.get("userId");
  const [albums, setAlbums] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/`);
      const jsonData = await response.json();
        setAlbums(jsonData);
    }
    fetchData();
  }, []);
  
  let userAlbums = albums.filter((item) => item.userId == id) ;
    
  return (
    <>
      <div className="container">
        <ul className="albums__list">
          {userAlbums && userAlbums?.map(album => (
            <li key={album.id} className="albums__list-item">
              <Link to={`/photos?albumId=${album.id}`}>
                {album.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Albums;