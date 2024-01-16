import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Footer from '../components/layout/footer';
import NavBar from '../components/layout/header';

import '../public/assets/css/style.css';

const permissions: React.FC = () => {

    return (
        <>
            <NavBar/>
            <div className="main">
                <div className="MainPerms">
                    <div className="Perms1">
                        <span className="Perms2">Basic Permissions</span>
                    </div>  
                </div>
                <div className="columns Perms3">
                    <div className="column is-one-half">
                        <div className="card bg-main Perms4">
                            <div className="content uwu">
                                <h1 className="Perms5">Creating a bot channel</h1>
                                <div className="card bg-main2 card-command">
                                    <header className="card-header">
                                        <p className="card-header-title marginBot0 ">
                                            <code className="uwu2">akira botchannel {"{"}channel{"}"}</code>
                                        </p>
                                        <div className="card-header-icon">
                                            <span className="tag tag-mobile is-success is-pulled-right">MANAGE_SERVER</span>
                                            <span className="tag tag-mobile is-info is-pulled-right">SERVER ONLY</span>
                                        </div>
                                    </header>
                                    <div className="card-content card-content-command">
                                        <div className="content permText">
                                            Set a channel to be the only channel that allows commands. (defaults to current channel)
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-main2 card-command">
                                    <header className="card-header">
                                        <p className="card-header-title marginBot0">
                                            <code className="uwu2">akira freechannel</code>
                                        </p>
                                        <div className="card-header-icon">
                                            <span className="tag tag-mobile is-success is-pulled-right">MANAGE_SERVER</span>
                                            <span className="tag tag-mobile is-info is-pulled-right">SERVER ONLY</span>
                                        </div>
                                    </header>
                                    <div className="card-content card-content-command">
                                        <div className="content permText">
                                            Will remove the bot channel status of the channel.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-main Perms7">
                            <div className="content uwu">
                                <h1 className="Perms5">Enabling or disabling a command</h1>
                                <div className="card bg-main2 card-command">
                                    <header className="card-header">
                                        <p className="card-header-title marginBot0">
                                            <code className="uwu2">akira enable {"{"}command/group{"}"}</code>
                                        </p>
                                        <div className="card-header-icon">
                                            <span className="tag tag-mobile is-success is-pulled-right">MANAGE_SERVER</span>
                                            <span className="tag tag-mobile is-info is-pulled-right">SERVER ONLY</span>
                                        </div>
                                    </header>
                                    <div className="card-content card-content-command">
                                        <div className="content permText">
                                            Enable a command or group on the guild level (a.default {"{"}command/group{"}"} to reset)
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-main2 card-command">
                                    <header className="card-header">
                                        <p className="card-header-title marginBot0">
                                            <code className="uwu2">akira disable {"{"}command/group{"}"}</code>
                                        </p>
                                        <div className="card-header-icon">
                                            <span className="tag tag-mobile is-success is-pulled-right">MANAGE_SERVER</span>
                                            <span className="tag tag-mobile is-info is-pulled-right">SERVER ONLY</span>
                                        </div>
                                    </header>
                                    <div className="card-content card-content-command">
                                        <div className="content permText">
                                            Disable a command or group on the guild level (a.default {"{"}command/group{"}"} to reset)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-half ">
                        <div className="card bg-main Perms6">
                            <div className="content uwu">
                                <h1 className="Perms5">Ignore or listen to a channel</h1>
                                <div className="card bg-main2 card-command">
                                    <header className="card-header">
                                        <p className="card-header-title marginBot0">
                                            <code className="uwu2">akira ignore {"{"}channel{"}"}</code>
                                        </p>
                                        <div className="card-header-icon">
                                            <span className="tag tag-mobile is-success is-pulled-right">MANAGE_SERVER</span>
                                            <span className="tag tag-mobile is-info is-pulled-right">SERVER ONLY</span>
                                        </div>
                                    </header>
                                    <div className="card-content card-content-command">
                                        <div className="content permText">
                                            Akira will ignore this channel. (defaults to current channel)
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-main2 card-command">
                                    <header className="card-header">
                                        <p className="card-header-title marginBot0">
                                            <code className="uwu2">akira listen {"{"}channel{"}"}</code>
                                        </p>
                                        <div className="card-header-icon">
                                            <span className="tag tag-mobile is-success is-pulled-right">MANAGE_SERVER</span>
                                            <span className="tag tag-mobile is-info is-pulled-right">SERVER ONLY</span>
                                        </div>
                                    </header>
                                    <div className="card-content card-content-command">
                                        <div className="content permText">
                                            Akira will stop ignoring this channel. (defaults to current channel)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-main Perms7">
                            <div className="content uwu">
                                <h1 className="Perms5">Blacklist or whitelist a member</h1>
                                <div className="card bg-main2 card-command">
                                    <header className="card-header">
                                        <p className="card-header-title marginBot0">
                                            <code className="uwu2">akira blacklist &lt;user&gt;</code>
                                        </p>
                                        <div className="card-header-icon">
                                            <span className="tag tag-mobile is-success is-pulled-right">MANAGE_SERVER</span>
                                            <span className="tag tag-mobile is-info is-pulled-right">SERVER ONLY</span>
                                        </div>
                                    </header>
                                    <div className="card-content card-content-command">
                                        <div className="content permText">
                                            Allows you to blacklist members from using Akira.
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-main2 card-command">
                                    <header className="card-header">
                                        <p className="card-header-title marginBot0">
                                            <code className="uwu2">akira whitelist &lt;user&gt;</code>
                                        </p>
                                        <div className="card-header-icon">
                                            <span className="tag tag-mobile is-success is-pulled-right">MANAGE_SERVER</span>
                                            <span className="tag tag-mobile is-info is-pulled-right">SERVER ONLY</span>
                                        </div>
                                    </header>
                                    <div className="card-content permText card-content-command">
                                        <div className="content">Removes a member from the blacklist so they can use commands again.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Perms1">
                    <span className="Perms2">Advanced Permissions</span>
                </div>
                <div className="columns Perms3">
                    <div className="column is-one-half ">
                        <div className="card bg-main Perms4">
                            <div className="content uwu">
                                <div className="content">
                                    <h1 className="Perms5">Advanced Permission Commands</h1>
                                </div>
                                <div className="bg-main2 uwu card-advanced">
                                    <div className="content is-small">
                                        <table>
                                            <thead>
                                                <tr className="table-Advanced">
                                                    <th>Command</th>
                                                    <th>Options</th>
                                                    <th>Information</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="table-Advanced2">
                                                    <td>a.perms list</td>
                                                    <td></td>
                                                    <td>Lists all available commands you can edit permissions for.</td>
                                                </tr>
                                                <tr className="table-Advanced2">
                                                    <td>a.perms allow</td>
                                                    <td>&lt;group/command&gt; &lt;type&gt; {"{"}target{"}"}</td>
                                                    <td>Enable the command for the given target.</td>
                                                </tr>
                                                <tr className="table-Advanced2">
                                                    <td>a.perms deny</td>
                                                    <td>&lt;group/command&gt; &lt;type&gt; {"{"}target{"}"}</td>
                                                    <td>Disable the command for the given target.</td>
                                                </tr>
                                                <tr className="table-Advanced2">
                                                    <td>a.perms default</td>
                                                    <td>&lt;group/command&gt; &lt;type&gt; {"{"}target{"}"}</td>
                                                    <td>Resets the permission to default.</td>
                                                </tr>
                                                <tr className="table-Advanced2">
                                                    <td>a.perms clear</td>
                                                    <td>&lt;group/command&gt; &lt;type&gt; {"{"}target{"}"}</td>
                                                    <td>Clears the permissions for the given extended type.</td>
                                                </tr>
                                                <tr className="table-Advanced2">
                                                    <td>a.perms show</td>
                                                    <td>&lt;group/command&gt;</td>
                                                    <td>Show set permissions for the given extended type.</td>
                                                </tr>
                                                <tr className="table-Advanced2">
                                                    <td>a.perms warn</td>
                                                    <td></td>
                                                    <td>Akira will start reacting to commands that are disabled.</td>
                                                </tr>
                                                <tr className="table-Advanced2">
                                                    <td>a.perms ignore</td>
                                                    <td></td>
                                                    <td>Akira will just ignore commands that are disabled.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <article className="message is-info Perms10">
                                            <div className="message-body">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="Padding0em">&lt;&gt; - Required argument</td>
                                                            <td className="Padding0em">{"{}"} - Optional argument</td>
                                                            <td className="Padding0em">/ - Either option</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </article>
                                        <article className="message is-danger Perms10">
                                            <div className="message-body">
                                                Do not include &lt;&gt;, {"{}"}, or / in your command!
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-main Perms4">
                            <div className="content uwu">
                                <div className="content">
                                    <h1 className="Perms5">Examples</h1>
                                </div>
                                <div className="bg-main2 uwu card-advanced">
                                    <ul className="table-Advanced2">
                                        <li>a.perms list</li>
                                    </ul>
                                    <ul className="table-Advanced2">
                                        <li>a.perms allow ping channel #general</li>
                                        <li>a.perms deny all guild</li>
                                        <li>a.perms deny fun role @newpeople</li>
                                        <li>a.perms allow fun user @member</li>
                                    </ul>
                                    <ul className="table-Advanced2">
                                        <li>a.perms clear</li>
                                        <li>a.perms clear hello</li>
                                        <li>a.perms clear util channel</li>
                                        <li>a.perms show</li>
                                        <li>a.perms show fun</li>
                                        <li>a.perms show user @member</li>
                                    </ul>
                                    <ul className="table-Advanced2">
                                        <li>a.perms warn</li>
                                        <li>a.perms ignore</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-half">
                        <div className="card bg-main Perms6">
                            <div className="content uwu">
                                <div className="content">
                                    <h1 className="Perms5">Type Hierarchy</h1>
                                    <article className="message is-info Perms10">
                                        <div className="message-body">Context will always overwrite in the one above it, from least important to most important:<br/> Guild -&gt; Channel -&gt; Role -&gt; User</div>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-main Perms7">
                            <div className="content uwu">
                                <h1 className="Perms5">Types</h1>
                                <div className="columns bg-main2 uwu">
                                    <div className="column is-one-half">
                                        <dl className="table-Advanced2">
                                            <dt><a className="TypeUwU">{"{"}server{"}"}</a> Will use the current guild.</dt>
                                            <dt><a className="TypeUwU">{"{"}channel{"}"}</a> Will use current channel.</dt>
                                            <dt><a className="TypeUwU">{"{"}user{"}"}</a> Will use the current user.</dt>
                                            <dt><a className="TypeUwU">{"{"}role{"}"}</a> Will use the current role.</dt>
                                        </dl>
                                    </div>
                                    <div className="column is-one-half">
                                        <dl className="table-Advanced2">
                                            <dt><a className="TypeUwU">{"{"}invite{"}"}</a> Will use the used invite.</dt>
                                            <dt><a className="TypeUwU">{"{"}type{"}"}</a> Will return the used type.</dt>
                                            <dt><a className="TypeUwU">{"{"}akira{"}"}</a> Will use Akira.</dt>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-main Perms7">
                            <div className="content uwu">
                                <h1 className="Perms5">Extended Types</h1>
                                <p className="permText">Extended types use the same types as above as well as below:</p>
                                <div className="columns bg-main2 uwu">
                                    <dl className="table-Advanced2">
                                        <dt><a className="TypeUwU">{"{"}command:&lt;command&gt;{"}"}</a> Will use the command mentioned.</dt>
                                        <dt><a className="TypeUwU">{"{"}group:&lt;module&gt;{"}"}</a> Will mentioned group.</dt>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-main Perms7">
                            <div className="content uwu">
                                <h1 className="Perms5">Getting started (optional)</h1>
                                <div className="bg-main2 uwu">
                                    <p className="colorWhite">To create a channel dedicated to using bot commands you can run:</p>
                                    <article className="message is-info Perms10">
                                        <div className="message-body">a.perms deny all guild</div>
                                    </article>
                                    <p className="colorWhite">To deny commands everywhere, and then:</p>
                                    <article className="message is-info Perms10">
                                        <div className="message-body">a.perms allow all channel</div>
                                    </article>
                                    <p className="colorWhite">In the channel that you wish to be used for commands.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default permissions;