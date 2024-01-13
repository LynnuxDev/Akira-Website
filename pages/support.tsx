import React, { useEffect } from 'react';

const DiscordRedirect = () => {
  useEffect(() => {
    const discordServerInviteLink = 'https://discord.gg/TUqZTutDUz';
    
    sessionStorage.setItem('previousPage', window.location.href);

    window.open(discordServerInviteLink, '_blank');

    window.location.replace(document.referrer);
  }, []);

  return (
    <div>
      Redirecting to Discord server...
    </div>
  );
};

export default DiscordRedirect;
