import { useState } from "react";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "react-query";
import "./update.scss";

const Update = ({ setOpenUpdate, user }) => {
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [term, setTerm] = useState({
    name: "",
    city: "",
    website: "",
  });

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (er) {
      console.log(er);
    }
  };

  const onHandleChange = (e) => {
    setTerm((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (user) => {
      return makeRequest.put("/users", user);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  const onHandleClick = async (e) => {
    e.preventDefault();
    let coverUrl = user.coverPic;
    let profileUrl = user.profilePic;

    coverUrl = cover && (await upload(cover));
    profileUrl = profile && (await upload(profile));

    mutation.mutate({ ...term, coverPic: coverUrl, profilePic: profileUrl });
    setOpenUpdate(false);
  };

  return (
    <div className="update">
      <form>
        <input type="file" />
        <input type="file" />
        <input type="text" name="name" onChange={onHandleChange} />
        <input type="text" name="city" onChange={onHandleChange} />
        <input type="text" name="website" onChange={onHandleChange} />
        <button onClick={onHandleClick}>Save</button>
      </form>
      <button onClick={() => setOpenUpdate(false)}>X</button>
    </div>
  );
};

export default Update;
