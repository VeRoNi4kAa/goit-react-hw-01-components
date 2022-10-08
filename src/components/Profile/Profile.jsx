import PropTypes from 'prop-types';

const User = ({avatar, username, tag, location, stats}) => {
    return (
      <div>
      <div>
        <img
          src={avatar}
          alt={username}
        />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
    
      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
    }

    User.propTypes = {
        avatar: PropTypes.string,
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        stats: PropTypes.number, 
    };

    export default User;

