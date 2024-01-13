import React, { useEffect } from 'react';

const DiscordRedirect = () => {
  useEffect(() => {
    const discordServerInviteLink = 'https://discord.gg/TUqZTutDUz';
    
    window.open(discordServerInviteLink, '_blank');
  }, []);

  return (
    <div>
      Redirecting to Discord server...
    </div>
  );
};

export default DiscordRedirect;
