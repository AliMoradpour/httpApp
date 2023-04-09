import { useEffect, useState } from "react";
import "./fullcomment.css";
import axios from "axios";

const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const delteHandler = ()=>{
    axios.delete(`http://localhost:3001/comments/${commentId}`).then(res => console.log(res.data)).catch()
  }

  let commentDetail = <p>Please Select Comment</p>;

  if (commentId) commentDetail = <div className="loader"></div>;

  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={delteHandler}>Delete</button>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
