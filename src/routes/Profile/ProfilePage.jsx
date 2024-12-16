import List from "../../components/list/List";
import { userData } from "../../lib/DummyData";
import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapperProfile">
          <div className="titleProfile">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar: <img src={userData.img} alt="" />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              Email: <b>johndoe@gmai.com</b>
            </span>
          </div>

          <div className="titleProfile">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />

          <div className="titleProfile">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapperProfile"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
