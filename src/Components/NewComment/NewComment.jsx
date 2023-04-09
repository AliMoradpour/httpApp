import { useState } from "react";
import "./newcomment.css";
import axios from "axios";
import { toast } from "react-toastify";

const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postHandler = () => {
    axios
      .post("http://localhost:3001/comments", { ...comment, postId: 1 })
      .then((res) => axios.get("http://localhost:3001/comments"))
      .then((res) => setComments(res.data) , toast.success('New Comment Added', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }))
      .catch((error) => error.message);
  };

  return (
    <div className="newComment">
      <h2>Add New Comment</h2>
      <div>
        <label className="formControl">name</label>
        <input type="text" onChange={changeHandler} name="name" />
      </div>
      <div>
        <label className="formControl">email</label>
        <input type="email" onChange={changeHandler} name="email" />
      </div>
      <div>
        <label className="formControl">body</label>
        <textarea onChange={changeHandler} name="content"></textarea>
      </div>
      <button onClick={postHandler}>Add new comment</button>
    </div>
  );
};

export default NewComment;
