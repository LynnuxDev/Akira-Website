import { useEffect, useState } from 'react';
import GuildList from './guildList';
import { Guild } from './guildTypes';

type FetchError = {
  message: string;
};

const Guilds: React.FC = () => {
  // store guilds data
  const [guilds, setGuilds] = useState<Guild[]>([]);
  // track loading status
  const [loading, setLoading] = useState<boolean>(true);
  // track error
  const [error, setError] = useState<FetchError | null>(null);

  // Fetch data
  const fetchData = async (): Promise<Guild[]> => {
    try {
      const response = await fetch('https://api.lynnux.xyz/guilds');
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

  // Use useEffect to fetch 
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

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* Render GuildList component*/}
      <GuildList guilds={guilds} />
    </div>
  );
};

export default Guilds;
