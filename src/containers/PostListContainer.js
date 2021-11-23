import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/PostList";
import { getPosts } from "../modules/posts";
function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) return; //포스트 목록이 이미 있을 때 재로딩 하는 이슈 해결
    dispatch(getPosts());
  }, [data, dispatch]);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  if (!data) return null;
  return <PostList posts={data} />;
}
export default PostListContainer;
