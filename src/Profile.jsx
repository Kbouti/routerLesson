import { useParams } from "react-router-dom";
import DefaultProfile from "./defaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import Kevdawg from "./kevdawg";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from your profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "kevdawg" ? (
        <Kevdawg />
      ) : name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
