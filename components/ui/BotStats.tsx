

import React, { useState, useEffect, EffectCallback } from 'react';

interface Stats {
  members: number;
  servers: number;
  commands: number;
}

const BotStats = () => {
  const [stats, setStats] = useState<Stats>({
    members: 0,
    servers: 0,
    commands: 0,
  });

  const [animatedStats, setAnimatedStats] = useState<Stats>({
    members: 0,
    servers: 0,
    commands: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.lynnux.xyz/akira/stats');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        const data = json.stats;
        setStats(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updateAnimatedStats = (targetStats: Stats) => {
      const interval = 500; // milliseconds
      const steps = 20; // number of steps

      Object.keys(targetStats).forEach((key) => {
        const targetValue = targetStats[key as keyof Stats] || 0;
        const startValue = animatedStats[key as keyof Stats] || 0;

        const step = (targetValue - startValue) / steps;

        for (let i = 1; i <= steps; i++) {
          ((i, key) => {
            setTimeout(() => {
              setAnimatedStats((prev) => ({
                ...prev,
                [key]: Math.round(startValue + i * step),
              }));
            }, i * interval);
          })(i, key);
        }
      });
    };

    if (stats) {
      updateAnimatedStats(stats);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats]);

  const cardUwU: React.CSSProperties = {backgroundColor: '#f47fff',boxShadow: '0 0 25px black'}

  return (
    <>
      <div id="stats ">
      <div data-v-972439db=" " className="statsdiv" id="stats ">
        <div data-v-972439db=" " style={cardUwU} className="card">
          <span data-v-972439db=" " className="title ">Servers</span>
          <span data-v-972439db=" " className="value ">{animatedStats.servers}</span>
        </div>
        <div data-v-972439db=" " style={cardUwU} className="card ">
          <span data-v-972439db=" " className="title ">Users</span>
          <span data-v-972439db=" " className="value ">{animatedStats.members}</span>
        </div>
        <div data-v-972439db=" " style={cardUwU} className="card ">
          <span data-v-972439db=" " className="title ">Commands</span>
          <span data-v-972439db=" " className="value ">{animatedStats.commands}</span>
        </div>
      </div>
      </div>
    </>
  );
};

export default BotStats;