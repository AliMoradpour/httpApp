import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllComments } from "../../Services/Requests";
import "./discussion.css";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [commentId, setCommentId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        setError(true);
      }
    };
    getComments();
  }, []);

  const renderComments = () => {
    let renderValue = <div className="loader"></div>;
    if (error) {
      renderValue = <p>Fetching Data Failed :(</p>;
      toast.error("Fetching Failed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          clicked={() => selectedCommentHandler(c.id)}
        />
      ));
    }
    return renderValue;
  };

  const selectedCommentHandler = (id) => {
    setCommentId(id);
  };

  return (
    <main>
      <section className="commentSection">{renderComments()}</section>
      <section>
        <FullComment
          commentId={commentId}
          setComments={setComments}
          setCommentId={setCommentId}
        />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </main>
  );
};

export default Discussion;
