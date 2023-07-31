import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={"5K"}
        replies={866}
        postImg={"/post1.png"}
        postTitle={"Hello, world!"}
      />
      <UserPost
        likes={"5K"}
        replies={866}
        postImg={"/threads.png"}
        postTitle={"Let's talk about Threads."}
      />
      <UserPost
        likes={"5K"}
        replies={866}
        postImg={"/post3.png"}
        postTitle={"He doesn't look happy."}
      />
    </>
  );
};

export default UserPage;
