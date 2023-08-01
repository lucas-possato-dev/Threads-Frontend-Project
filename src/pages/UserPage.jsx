import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        postId={1}
        likes={"5K"}
        replies={866}
        postImg={"/post1.png"}
        postTitle={"Hello, world!"}
      />
      <UserPost
        postId={2}
        likes={"5K"}
        replies={866}
        postImg={"/threads.png"}
        postTitle={"Let's talk about Threads."}
      />
      <UserPost
        postId={3}
        likes={"5K"}
        replies={866}
        postImg={"/post3.png"}
        postTitle={"He doesn't look happy."}
      />
    </>
  );
};

export default UserPage;
