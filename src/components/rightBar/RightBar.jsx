import React from "react";
import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For Your</span>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Ahmed</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Ahmed</span>
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
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                <span>Ahmed </span>
                Changed their cover picture
              </p>
            </div>
            <span className="span-time">1 min ago </span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="" alt="" />
              <p>
                <span>Ahmed </span>
                Changed their cover picture
              </p>
            </div>
            <span className="span-time">1 min ago </span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="" alt="" />
              <p>
                <span>Ahmed </span>
                Changed their cover picture
              </p>
            </div>
            <span className="span-time">1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Ahmed </span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="" alt="" />
              <div className="online" />
              <span>Ahmed </span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="" alt="" />
              <div className="online" />
              <span>Ahmed </span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="" alt="" />
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
