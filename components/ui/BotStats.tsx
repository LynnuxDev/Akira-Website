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
        const response = await fetch('https://api.lynnux.xyz/stats');
        const data = await response.json();
        setStats(data);
        updateAnimatedStats(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const updateAnimatedStats = (targetStats: Stats) => {
    const interval = 50; // milliseconds
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





/*

import React, { useState, useEffect } from 'react';

const BotStats = () => {
    const [stats, setStats] = useState({
        members: '0',
        servers: '0',
        commands: 0,
        uptime: '',
      });

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.lynnux.xyz/stats');
            const data = await response.json();
            setStats(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
        }, []);

    const cardUwU: React.CSSProperties = {backgroundColor: '#f47fff',boxShadow: '0 0 25px black'}

    return (
        <>
            <div id="stats ">
            <div data-v-972439db=" " className="statsdiv" id="stats ">
                <div data-v-972439db=" " style={cardUwU} className="card">
                    <span data-v-972439db=" " className="title ">Servers</span>
                    <span data-v-972439db=" " className="value ">{stats.servers}</span>
                </div>
                <div data-v-972439db=" " style={cardUwU} className="card ">
                    <span data-v-972439db=" " className="title ">Users</span>
                    <span data-v-972439db=" " className="value ">{stats.members}</span>
                </div>
                <div data-v-972439db=" " style={cardUwU} className="card ">
                    <span data-v-972439db=" " className="title ">Commands</span>
                    <span data-v-972439db=" " className="value ">{stats.commands}</span>
                </div>
            </div>
            </div>
        </>
    );
};

export default BotStats;

*/