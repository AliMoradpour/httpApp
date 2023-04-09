import http from "./httpServices";

export function getAllComments() {
  return http.get("/comments");
}
export function getOneComment(id){
  return http.get(`/comments/${id}`)
}
export function deleteComment(id) {
  return http.delete(`/comments/${id}`);
}
export function postComment(data) {
  return http.post("/comments", data);
}
