import React from 'react';

function UserProfile(user) {
  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <img src={user.avatar} alt="Profile" />
        <div>
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
        </div>
      </div>
      <button>Edit Profile</button>
      {/* Other settings/options */}
    </div>
  );
}

export default UserProfile;
