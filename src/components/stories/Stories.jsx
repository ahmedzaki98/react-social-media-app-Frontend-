import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "mohamed",
      img: "https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_960_720.jpg",
    },
    {
      id: 2,
      name: "ali",
      img: "https://cdn.pixabay.com/photo/2017/09/02/15/10/lighthouse-2707528_960_720.jpg",
    },
    {
      id: 3,
      name: "ahmed",
      img: "https://cdn.pixabay.com/photo/2014/07/31/23/04/smartphone-407108_960_720.jpg",
    },
    {
      id: 4,
      name: "sara",
      img: "https://cdn.pixabay.com/photo/2019/06/02/17/33/woman-4246954_960_720.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
