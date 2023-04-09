import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./fullcomment.css";
import {
  deleteComment,
  getAllComments,
  getOneComment,
} from "../../Services/Requests";

const FullComment = ({ commentId, setComments, setCommentId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const delteHandler = async () => {
    try {
      await deleteComment(commentId);
      const { data } = await getAllComments();
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
