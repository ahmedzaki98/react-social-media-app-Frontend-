import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import "./comments.scss";
import moment from "moment";

const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const [desc, setDesc] = useState("");

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const onHandleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <hr />
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="Write a Comment..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={onHandleClick}>Send</button>
      </div>
      {isLoading
        ? "Loading"
        : data.map((comment) => (
            <div className="comment">
              <img src={comment.profilePic} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date"> {moment(comment.createdAt).fromNow()} </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
