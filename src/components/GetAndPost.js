import React, { useState } from "react";
import axios from "axios";

const GetAndPost = () => {
  const [posts, setPosts] = useState({ userId: "", body: "", title: "" });

  const changeHandler = (e) => {
    setPosts({ ...posts, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", posts)
      .then((response) => {
        console.log("Res:", response);
      });
  };

  const { title, body, userId } = posts;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userId"
        value={userId}
        onChange={changeHandler}
      />
      <input type="text" name="body" value={body} onChange={changeHandler} />
      <input type="text" name="title" value={title} onChange={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default GetAndPost;
