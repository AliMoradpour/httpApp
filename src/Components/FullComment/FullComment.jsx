import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import http from "../../Services/httpServices";
import "./fullcomment.css";

const FullComment = ({ commentId, setComments, setCommentId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      http
        .get(`/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const delteHandler = async () => {
    try {
      await http.delete(`/comments/${commentId}`);
      const { data } = await http.get("/comments");
      setComments(data);
      setCommentId(null);
      setComment(null);
    } catch (error) {
      toast.error(error.message, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

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
