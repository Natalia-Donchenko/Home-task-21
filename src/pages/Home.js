import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container ">
      <Link to={"users?"}>
        <div className="home__showList">
          how list of users
        </div>
      </Link>
    </div>
  );
};

export default Home;