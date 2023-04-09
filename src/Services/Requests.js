import http from "./httpServices";

export function getAllComments() {
  return http.get("/comments");
}
export function getOneComment(id) {
  return http.get(`/comments/${id}`);
}
export function deleteComment(id) {
  return http.delete(`/comments/${id}`);
}
export function postComment(data) {
  const token = "SECURE TOKEN";
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return http.post("/comments", data, header);
}
