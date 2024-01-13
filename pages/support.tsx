import React, { useEffect } from 'react';

const DiscordRedirect = () => {
  useEffect(() => {
    const discordServerInviteLink = 'https://discord.gg/TUqZTutDUz';
    
    window.location.replace(discordServerInviteLink);
  }, []);

  return (
    <div>
      Redirecting to Discord server...
    </div>
  );
};

export default DiscordRedirect;
