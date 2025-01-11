import React, { useState } from 'react';

const CommandList = () => {
    {/* CSS */}
    const cardHeader: React.CSSProperties = {backgroundColor: '#0000004f'}
    const cardStyle2: React.CSSProperties = {border: '1px solid #000000000',borderRadius: '5%',color: '#fff',backgroundColor:'#545454',padding: '1em 1em 1em 1em',width: '100%',position: 'sticky',top: '10px',paddingRight:'5%'}
    const cardStyle: React.CSSProperties = {color: '#fff',backgroundColor:'#545454',padding: '1em 1em 1em 1em',width: '100%',position: 'sticky',top: '10px',paddingRight:'5%'}
    const opacity08: React.CSSProperties = {opacity: 0.8,backgroundColor: 'transparent'}
    const displayBlock: React.CSSProperties = {display: 'block'}
    const displayNone: React.CSSProperties = {display:'none'}
    const commandUsage: React.CSSProperties = {color:'#ff47ff',cursor: 'default'}
    const commandUsagePointer: React.CSSProperties = {color:'#ff47ff',cursor: 'pointer'}
const [activeTab, setActiveTab] = useState('Moderation');

  const showTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
        <div className="columns">
            <div className="column is-one-quarter" style={opacity08}>
                <div className="card" style={cardStyle2}>
                    <aside className="menu">
                        <p className="menu-label">Commands</p>
                        <ul className="menu-list">
                            <li><a className={`tablinks ${activeTab === 'Moderation' ? 'is-active' : ''}`} onClick={() => showTab('Moderation')}>Moderation</a></li>
                            <li><a className={`tablinks ${activeTab === 'Automation' ? 'is-active' : ''}`} onClick={() => showTab('Automation')}>Automation</a></li>
                            <li><a className={`tablinks ${activeTab === 'Features' ? 'is-active' : ''}`} onClick={() => showTab('Features')}>Features</a></li>
                            <li><a className={`tablinks ${activeTab === 'Permissions' ? 'is-active' : ''}`} onClick={() => showTab('Permissions')}>Permissions</a></li>
                            <li><a className={`tablinks ${activeTab === 'Search' ? 'is-active' : ''}`} onClick={() => showTab('Search')}>Search</a></li>
                            <li><a className={`tablinks ${activeTab === 'Utility' ? 'is-active' : ''}`} onClick={() => showTab('Utility')}>Utility</a></li>
                            <li><a className={`tablinks ${activeTab === 'Info' ? 'is-active' : ''}`} onClick={() => showTab('Info')}>Info</a></li>
                            <li><a className={`tablinks ${activeTab === 'Fun' ? 'is-active' : ''}`} onClick={() => showTab('Fun')}>Fun</a></li>
                            <li><a className={`tablinks ${activeTab === 'Economy' ? 'is-active' : ''}`} onClick={() => showTab('Economy')}>Economy</a></li>
                            <li><a className={`tablinks ${activeTab === 'Gambling' ? 'is-active' : ''}`} onClick={() => showTab('Gambling')}>Gambling</a></li>
                            <li><a className={`tablinks ${activeTab === 'Profiles' ? 'is-active' : ''}`} onClick={() => showTab('Profiles')}>Profiles</a></li>
                            <li><a className={`tablinks ${activeTab === 'Skills' ? 'is-active' : ''}`} onClick={() => showTab('Skills')}>Skills</a></li>
                            <li><a className={`tablinks ${activeTab === 'Image' ? 'is-active' : ''}`} onClick={() => showTab('Image')}>Image</a></li>
                            <li><a className={`tablinks ${activeTab === 'Reaction' ? 'is-active' : ''}`} onClick={() => showTab('Reaction')}>Roleplay</a></li>
                            <li><a className={`tablinks ${activeTab === 'Counter' ? 'is-active' : ''}`} onClick={() => showTab('Counter')}>Counter</a></li>
                            <li><a className={`tablinks ${activeTab === 'Ships' ? 'is-active' : ''}`} onClick={() => showTab('Ships')}>Ships</a></li>
                        </ul>
                    </aside>
                </div>
            </div>
            <div className="column is-one-half" style={opacity08}>
                <div id="Moderation" className="tabcontent" style={activeTab === 'Moderation' ? displayBlock : displayNone}>
                    <div className="card card-command uwuPlain" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title ">
                                <code>a.ban</code>
                            </p>
                            <div className="card-header-icon">
                                <span className="tag is-success is-pulled-right">BAN_MEMBERS</span>
                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Bans the member you tag from the current server.
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Automation" className="tabcontent" style={activeTab === 'Automation' ? displayBlock : displayNone}>
                </div>
                <div id="Features" className="tabcontent" style={activeTab === 'Features' ? displayBlock : displayNone}>
                </div>
                <div id="Permissions" className="tabcontent" style={activeTab === 'Permissions' ? displayBlock : displayNone}>
                    <div className="card uwuPlain card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.botchannel <a style={commandUsage}>{'{'}channel{'}'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Set a channel to be the only channel that allows commands.
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Search" className="tabcontent" style={activeTab === 'Search' ? displayBlock : displayNone}>
                <div className="card card-command uwuTop" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.anime <a style={commandUsage}>{'<'}AnimeName{'>'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Search for an anime using the name.</div>
                        </div>
                    </div>
                    <div className="card card-command uwuBottom" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.define <a style={commandUsage}>{'<'}Search{'>'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Get a definition from Urban Dictionary.</div>
                        </div>
                    </div>
                </div>
                <div id="Utility" className="tabcontent" style={activeTab === 'Utility' ? displayBlock : displayNone}>
                </div>
                <div id="Info" className="tabcontent" style={activeTab === 'Info' ? displayBlock : displayNone}>
                    <div className="card uwuTop card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.about</code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Displays information about Akira.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.help <a style={commandUsage}>{'{'}command/module{'}'} {'{'}-c{'}'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Get help using Akira.</div>
                        </div>
                    </div>
                    <div className="card uwuBottom card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.commandinfo <a style={commandUsage}>{'{'}command{'}'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">See information about a command.</div>
                        </div>
                    </div>
                    {/*
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.channels</code>
                            </p>
                            <div className="card-header-icon">
                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Displays information about server channels.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.emotes</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Lists the available emotes or information on the emotes you mention.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.roleinfo</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Gives information on the role you mention.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.server</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Gets information about the current server.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.user</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Gets information about a user.
                            </div>
                        </div>
                    </div>
                    */}
                </div>
                <div id="Fun" className="tabcontent" style={activeTab === 'Fun' ? displayBlock : displayNone}>
                </div>
                <div id="Economy" className="tabcontent" style={activeTab === 'Economy' ? displayBlock : displayNone}>
                    {/*
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.balance</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Checks the money in your account.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.daily</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Get some silver every 24 hours.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.exchange</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Exchange your minerals/items for money.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.guild</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Check your akira guild.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.leaderboard</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                View the money leaderboard for all of Akira.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.send</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Give somebody some of your money. (25% tax)
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.top</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                View the money leaderboard in the current server.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.transactions</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                A list of your recent transactions.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.workers</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Workers allow you to increase your daily minerals.
                            </div>
                        </div>
                    </div>*/}
                </div>
                <div id="Gambling" className="tabcontent" style={activeTab === 'Gambling' ? displayBlock : displayNone}>
                    {/*
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.duel</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Duel someone to win some minerals.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.flip</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Bet money on the flip of a coin.
                            </div>
                        </div>
                    </div>*/}
                </div>
                <div id="Profiles" className="tabcontent" style={activeTab === 'Profiles' ? displayBlock : displayNone}>
                    {/*
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.achievements</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                View information about your achievements.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.profileimage</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Allows you to edit your profile image.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.bio</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Change your profile bio.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.profile</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Shows you your profile.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.reputation</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Give some reputation to other members.
                            </div>
                        </div>
                    </div>*/}
                </div>
                <div id="Skills" className="tabcontent" style={activeTab === 'Skill' ? displayBlock : displayNone}>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.chop</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Chop to improve your wood cutting skill and get some wood.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.fish</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Fish to improve your fishing skill and maybe catch a fish.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.mine</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">
                                Mine to improve your mining skill and mine some minerals.
                            </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.skills</code>
                            </p>
                            <div className="card-header-icon">

                                <span className="tag is-info is-pulled-right">SERVER ONLY</span>
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Shows information on all your skills progress.</div>
                        </div>
                    </div>
                </div>
                <div id="Image" className="tabcontent" style={activeTab === 'Image' ? displayBlock : displayNone}>
                </div>
                <div id="Reaction" className="tabcontent" style={activeTab === 'Reaction' ? displayBlock : displayNone}>
                    <div className="card card-command uwuTop" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.block <a style={commandUsage}>&lt;user&gt;</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Block users so they can&apost spam you with roleplay commands and harass you. Useful if they keep trying to kiss you.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.unblock <a style={commandUsage}>&lt;user&gt;</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Unblock a user so they can use roleplay commands on you again. In case you forgive your stalkers.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.blockcommand <a className={`tablinks ${activeTab === 'Counter' ? 'is-active' : ''}`} onClick={() => showTab('Counter')} style={commandUsagePointer}>&lt;counter-type&gt;</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Block a roleplay command so people can&apost use it on you, in case you want to reject everyone from slapping you.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.unblockcommand <a className={`tablinks ${activeTab === 'Counter' ? 'is-active' : ''}`} onClick={() => showTab('Counter')} style={commandUsagePointer}>&lt;counter-type&gt;</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Unblock a roleplay command so people can use it on you again, in case you once again accept slaps and bonks.</div>
                        </div>
                    </div>
                    <div className="card card-command uwuBottom" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.counters <a style={commandUsage}>&lt;user&gt;</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">See how many times each roleplay action has happened to you and how often you&aposve done them to others.</div>
                        </div>
                    </div> 
                </div>
                <div id="Counter" className="tabcontent" style={activeTab === 'Counter' ? displayBlock : displayNone}>
                    <div className="card card-command uwuTop" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.blush <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Did someone just make you blush.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.bonk <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Bonk someone.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.boop <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Boop the member you tag on the nose.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.cheer <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Cheer someone on.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.cuddle <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Cuddle with someone.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.dance <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Dance with someone.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.feed <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Feed with someone.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.glomp <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon"></div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Feed with someone.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.handhold <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Yearning for a simple yet powerful connection?</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.happy <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Share a smile and make someone happy.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.highfive <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Propel your energy with a high-five!</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.highfive <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Propel your energy with a high-five!</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.hug <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Craving an enthusiastic, heartwarming hug?</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.kiss <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Seal the moment with a tender kiss.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.laugh <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Let the laughter flow and brighten the moment.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.lick <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Feeling mischievous or expressing playful affection?</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.love <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Seeking a deep, heartfelt connection?</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.lurk <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">In the shadows or playfully hidden, ready to surprise?</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.nom <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">It&aposs time to nom!</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.nuzzle <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Lean in for a gentle nuzzle.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.pat <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">A friendly pat can speak volumes.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.peck <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Seal it with a quick and light peck.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.peck <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">A gentle poke can add a touch of fun to the moment.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.pout <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">A subtle pout can convey a range of emotions.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.sleep <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">It might be time to catch some Z&aposs and peacefully sleep.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.wag <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Feeling excited or expressing happiness?</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.wave <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Feeling excited or expressing happiness?</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.bonk <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Playfully asserting your point or adding a touch of humor to a situation.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.bored <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Sending out subtle signals that boredom has taken over.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.chase <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">In the mood for a playful pursuit or a friendly challenge?</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.cringe <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">It might be a moment to cringe and share in the collective discomfort.</div>
                        </div>
                    </div><div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.dab <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Feeling the need to strike a pose or express a moment of triumph? </div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.facepalm <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">It might be time for a facepalm to express it all.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.nervous <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Sensing a bit of anxiety or anticipation in the air?</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.no <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Sometimes a simple no is the perfect response.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.panic <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Suddenly overwhelmed or caught in the grip of anxiety?</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.run <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">It might be time to run and embrace the thrill of movement.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.sip <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Grab a drink and enjoy a sip.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.smug <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">It looks like someone is feeling a bit smug.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.stare <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Sometimes, a simple stare says more than words ever could.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.tease <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">It sounds like a moment to tease and share some lighthearted banter.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.think <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">It&aposs a moment to think and navigate through thoughts.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.rage <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">It might be a moment to rage and release those fiery emotions.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.yes <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Sometimes a simple yes can convey a world of agreement or enthusiasm.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.bite <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">It might be a moment to gently bite and add a hint of intimacy.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.cry <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">it might be a moment to cry and release those feelings.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.die <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">We all feel like dying sometimes especialy when we read that message.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.hate <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">It&aposs okay to not like everyone.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.sad <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Feeling a wave of sadness or experiencing a moment of melancholy?</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.kill <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">It&aposs normal to wanne kill someone sometimes, Akira won&apost judge you.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.shoot <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Damn, things got that out of hand?</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.slap <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">A slap might add a touch of drama or humor to the moment.</div>
                        </div>
                    </div>
                    <div className="card card-command" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.stab <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">A face-to-face fight? I like it.</div>
                        </div>
                    </div>
                    <div className="card card-command uwuBottom" style={cardStyle}>
                        <header className="card-header uwuPlain" style={cardHeader}>
                            <p className="card-header-title">
                                <code>a.triggered <a style={commandUsage}>&lt;user&gt; {'{'}message{'}'}</a></code>
                            </p>
                            <div className="card-header-icon">
                            </div>
                        </header>
                        <div className="card-content card-content-command">
                            <div className="content">Feeling provoked or stirred up by someone&aposs actions or words?</div>
                        </div>
                    </div>

                </div>
                <div id="Ships" className="tabcontent" style={activeTab === 'Ships' ? displayBlock : displayNone}>
                </div>
            </div>
        </div>
    </>
  );
};

export default CommandList;
