import { useState } from "react";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "react-query";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import "./update.scss";

const Update = ({ setOpenUpdate, user }) => {
  //   const [cover, setCover] = useState(null);
  //   const [profile, setProfile] = useState(null);
  const [texts, setTexts] = useState({
    email: user.email,
    password: user.password,
    name: user.name,
    city: user.city,
    website: user.website,
  });

  //   const upload = async (file) => {
  //     try {
  //       const formData = new FormData();
  //       formData.append("file", file);
  //       const res = await makeRequest.post("/upload", formData);
  //       return res.data;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
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

  const handleClick = async (e) => {
    e.preventDefault();
    // //TODO: find a better way to get image URL
    // let profileUrl;
    // let coverUrl;
    // profileUrl = profile ? await upload(profile) : user.profilePic;
    // coverUrl = cover ? await upload(cover) : user.coverPic;

    mutation.mutate({ ...texts });
    setOpenUpdate(false);
    // setProfile(null);
    // setCover(null);
  };

  return (
    <div className="update">
      <div className="wrapper">
        <h1>Edit profile</h1>
        <form>
          <div className="files">
            {/* <label htmlFor="profile">
              <span>Profile Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    profile
                      ? URL.createObjectURL(profile)
                      : "/upload/" + user.profilePic
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>
            <input
              type="file"
              id="profile"
              style={{ display: "none" }}
              onChange={(e) => setProfile(e.target.files[0])}
            />
            <label htmlFor="cover">
              <span>Cover Photo</span>
              <div className="imgContainer">
                <img
                  src={
                    cover
                      ? URL.createObjectURL(cover)
                      : "/upload/" + user.coverPic
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>
            <input
              type="file"
              id="cover"
              style={{ display: "none" }}
              onChange={(e) => setCover(e.target.files[0])}
            /> */}
          </div>
          <label>Email</label>
          <input
            type="text"
            value={texts.email}
            name="email"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="text"
            value={texts.password}
            name="password"
            onChange={handleChange}
          />
          <label>Name</label>
          <input
            type="text"
            value={texts.name}
            name="name"
            onChange={handleChange}
          />
          <label>Country / City</label>
          <input
            type="text"
            name="city"
            value={texts.city}
            onChange={handleChange}
          />
          <label>Website</label>
          <input
            type="text"
            name="website"
            value={texts.website}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Save</button>
        </form>
        <button className="close" onClick={() => setOpenUpdate(false)}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Update;
