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
