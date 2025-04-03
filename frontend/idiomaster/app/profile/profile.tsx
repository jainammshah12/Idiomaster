// profile.tsx
"use client";

import React from 'react';

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/150",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  return (
    <div className="profile-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div className="avatar" style={{ textAlign: 'center' }}>
        <img src={user.avatar} alt="Avatar" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
      </div>
      <h1 style={{ textAlign: 'center' }}>{user.name}</h1>
      <p style={{ textAlign: 'center', color: '#777' }}>{user.email}</p>
      <div className="bio" style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.5' }}>
        <h2>Bio</h2>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
