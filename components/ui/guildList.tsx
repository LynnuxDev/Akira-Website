
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Guild } from '../ui/guildTypes';
import '../../public/assets/css/style.css';
import '../../public/assets/css/test.css';
import '../../public/assets/css/guildsCheck.css';


const GuildList = ({ guilds }: { guilds: Guild[] }) => {
    const [error, setError] = useState(null);
    const temp: React.CSSProperties = {fontWeight: 'heavy',fontSize: 'large',color: '#fff',paddingLeft: '0.3rem',};
    const svg: React.CSSProperties = { marginTop: '10%' };
    const padlef: React.CSSProperties = { paddingLeft: '1rem' };
  
    const [isHovered, setIsHovered] = useState(false);
  
    const handleGuildContainerHover = () => {
      setIsHovered(true);
    };
  
    const handleGuildContainerLeave = () => {
      setIsHovered(false);
    };
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    const halfLength = Math.ceil(guilds.length / 2);
    const firstHalf = guilds.slice(0, halfLength);
    const secondHalf = guilds.slice(halfLength);
  
    return (
      <>
    <div id="guilds-container" className="flex flex-col mt-5 mb-5 gap-2 overflow-hidden relative" onMouseEnter={handleGuildContainerHover} onMouseLeave={handleGuildContainerLeave}>
        <div className="blur-box "></div>
      {/* First Half */}
        <div id="guilds" className={`flex w-full w-1400 forward-animate ${isHovered ? 'paused' : 'playing'}`}>
            {firstHalf.map((guild) => (
                <div key={guild.id} >
                    <div key={guild.id} className='flex h-18 w-full p-4 items-center'>
                        <div className="rounded-lg flex bg-[#303A52] h-18 py-5 px-5 pr-7 transition w-95 duration-300 justify-between items-center">
                            <div className="flex items-center justify-around">
                                <Image alt={guild.name} src={guild.icon} width={40} height={40} decoding="async" data-nimg="1" className="rounded-full" loading="lazy" />
                                <h4 style={padlef}className="font-bold ml-3 text-light-500 w-50 truncate">{guild.name}</h4>
                                <div style={padlef} className="flex items-around">
                                    <svg style={svg} stroke="#fff"fill="#fff"strokeWidth="0"viewBox="0 0 448 512"className="mr-2"height="1em"width="1em"xmlns="http://www.w3.org/2000/svg">
                                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                                    </svg>
                                    <h4 style={temp} className="font-normal">{guild.members}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      {/* Second Half */}
        <div id="guilds" className={`flex w-full w-1400 backward-animate ${isHovered ? 'paused' : 'playing'}`}>
            {secondHalf.map((guild) => (
                <div key={guild.id}>
                    <div key={guild.id} className='flex h-18 w-full p-4 items-center'>
                        <div className="rounded-lg flex bg-[#303A52] h-18 py-5 px-5 pr-7 transition w-95 duration-300 justify-between items-center">
                            <div className="flex items-center justify-around">
                                <Image alt={guild.name} src={guild.icon} width={40} height={40} decoding="async" data-nimg="1" className="rounded-full" loading="lazy" />
                                <h4 style={padlef} className="font-bold ml-3 text-light-500 w-50 truncate">{guild.name}</h4>
                                <div style={padlef} className="flex items-around">
                                    <svg style={svg} stroke="#fff"fill="#fff"strokeWidth="0"viewBox="0 0 448 512"className="mr-2"height="1em"width="1em"xmlns="http://www.w3.org/2000/svg">
                                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                                    </svg>
                                    <h4 style={temp}className="font-normal">{guild.members}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
  );
};

export default GuildList;