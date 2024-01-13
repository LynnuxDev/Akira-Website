// guilds.tsx
import { useEffect, useState } from 'react';
import GuildList from './guildList';
import { Guild } from './guildTypes';

// Custom type for the error object
type FetchError = {
  message: string;
};

const Guilds: React.FC = () => {
  // State to store guilds data
  const [guilds, setGuilds] = useState<Guild[]>([]);
  // State to track loading status
  const [loading, setLoading] = useState<boolean>(true);
  // State to track error status
  const [error, setError] = useState<FetchError | null>(null);

  // Fetch data from your API
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

  // Use useEffect to fetch data when the component mounts
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
      {/* Render GuildList component with guilds data */}
      <GuildList guilds={guilds} />
    </div>
  );
};

export default Guilds;
