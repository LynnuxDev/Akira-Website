import React, { useEffect } from 'react';

const support = () => {
  useEffect(() => {
    const discordServerInviteLink = 'https://discord.gg/TUqZTutDUz';
    
    // Redirect to the Discord server instantly
    window.location.replace(discordServerInviteLink);
  }, []);

  return (
    <div>
      Redirecting to Discord server...
    </div>
  );
};

export default support;
