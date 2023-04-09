import { useState } from "react";
import { toast } from "react-toastify";
import http from "../../Services/httpServices";
import "./newcomment.css";

const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postHandler = () => {
    http
      .post("/comments", { ...comment, postId: 1 })
      .then((res) => http.get("/comments"))
      .then(
        (res) => setComments(res.data),
        toast.success("New Comment Added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      )
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
