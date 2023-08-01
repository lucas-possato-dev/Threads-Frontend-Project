import { Container } from "@chakra-ui/react";
import { Route, Routes, useParams } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";

function App() {
  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/:username/post/:id" element={<PostPageWrapper />} />
      </Routes>
    </Container>
  );
}

const PostPageWrapper = () => {
  const { id } = useParams();

  const posts = [
    {
      postId: 1,
      likes: "5K",
      replies: 238,
      postImg: "/post1.png",
      postTitle: "Hello, world!",
    },
    {
      postId: 2,
      likes: "5K",
      replies: 200,
      postImg: "/threads.png",
      postTitle: "Let's talk about Threads.",
    },
    {
      postId: 3,
      likes: "5K",
      replies: 150,
      postImg: "/post3.png",
      postTitle: "He doesn't look happy.",
    },
  ];

  const post = posts.find((post) => post.postId === Number(id));

  return post ? <PostPage post={post} /> : <div>Post not found!</div>;
};

export default App;
