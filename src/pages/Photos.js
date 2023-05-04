import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Photos = () => {

  const [params] = useSearchParams();
  const id = params.get("albumId");
  const [photos, setPhotos] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/`);
      const jsonData = await response.json();
      setPhotos(jsonData);
    }
    fetchData();
  }, [id]);

  const userPhotos = photos.filter((item) => item.albumId == id) ;
  
  return (
    <>
      <div className="container">
        <ul className="photos__list">
          {userPhotos && userPhotos?.map(photo => (
            <li key={photo.id} className="photos__list-item">
              <Link>
                <img src={photo.thumbnailUrl}/>
                <div className="photos__list-item_title">
                  {photo.title}
                </div>
              </Link>
            </li> 
          ))}
        </ul>
      </div>
    </>
  );
};

export default Photos;