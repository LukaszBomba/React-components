import Friend from '../Friends/Friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={Friend.item}>
      <span className={isOnline ? Friend.active : Friend.status}></span>
      <img
        className={Friend.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={Friend.name}>{name}</p>
    </li>
  );
};
