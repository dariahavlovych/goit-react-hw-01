import React from "react";
import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.profileCard}>
      <div className={s.userInfo}>
        <img className={s.avatar} src={image} alt="User avatar" />
        <p className={s.userName}>{name}</p>
        <p className={s.nickName}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span className={s.statValues}>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={s.statValues}>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={s.statValues}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
