import "./comment.css";

const Comment = ({ name, email,clicked }) => {
  return (
    <div className="comment" onClick={clicked}>
      <p>name : {name}</p>
      <p>email : {email}</p>
    </div>
  );
};

export default Comment;
