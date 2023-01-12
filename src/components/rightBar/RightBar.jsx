import React from "react";
import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Ahmed</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Ali</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Ahmed </span>
                Changed their cover picture
              </p>
            </div>
            <span className="span-time">1 min ago </span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Sara Moahmed </span>
                Liked Your Post
              </p>
            </div>
            <span className="span-time">30 min ago </span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <p>
                <span>Ali Ahmed </span>
                Changed their cover picture
              </p>
            </div>
            <span className="span-time">1 hr ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Ahmed </span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="online" />
              <span>Ali Ahmed </span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Sara Mohamed </span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="online" />
              <span>Ahmed </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
