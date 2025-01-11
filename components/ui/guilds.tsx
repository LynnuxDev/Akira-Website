import { useEffect, useState } from 'react';
import GuildList from './guildList';
import { Guild } from './guildTypes';

type FetchError = {
  message: string;
};

const Guilds: React.FC = () => {
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FetchError | null>(null);

  const fetchData = async (): Promise<Guild[]> => {
    try {
      const response = await fetch('https://api.lynnux.xyz/akira/guilds');
      if (!response.ok) {
        throw { message: 'Failed to fetch guilds' } as FetchError;
      }
      const data = await response.json() as { body: Guild[] };
      return data.body;
    } catch (error) {
      console.error('Error fetching guilds:', error);
      throw { message: 'Failed to fetch guilds' } as FetchError;
    }
  };

  useEffect(() => {
    const getGuilds = async () => {
      try {
        const guildsData = await fetchData();
        setGuilds(guildsData);
        setLoading(false);
      } catch (error) {
        setError(error as FetchError);
        setLoading(false);
      }
    };

    getGuilds();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <GuildList guilds={guilds} />
    </div>
  );
};

export default Guilds;
