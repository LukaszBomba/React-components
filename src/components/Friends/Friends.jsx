import Friend from '../Friends/Friends.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from '../Friends/FriendsItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={Friend.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
