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
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.number.isRequired, 
    };

    export default User;

