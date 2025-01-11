import '@/styles/vote.css';
import '@/styles/style.css';

import React from 'react';
import Footer from '../components/layout/footer';
import NavBar from '../components/layout/header';


const Vote = () => {
  return (
    <>
      <main>
        <div className='bg-counter'></div>
        <NavBar/>
        <div className="columns is-flex-wrap-wrap is-vcentered">
          <div className="column is-full-mobile is-full-tablet is-full-desktop is-hidden-widescreen">
            <section className="hero">
              <div className="hero-body">
                <p className="title is-1 is-spaced">Vote for me on these Bot Lists!</p>
                <p className="subtitle">Thank you in advance, this helps bump up the bot and get the word out!</p>
              </div>
            </section>
          </div>
          <div className="column">
            <section className="hero">
              <div className="hero-body">
                <div className="tile flex-grid is-justify-content-left">
                  <div className="tile flex-item-container">
                    <a href="https://dev-botlist.com/bot/738057910923296839/vote" target="_blank">
                      <article className="tile is-child notification is-danger">
                        <p className="title">dev-botlist</p>
                      </article>
                    </a>
                  </div>
                  <div className="tile flex-item-container">
                    <a href="https://voidbots.net/bot/738057910923296839/vote" target="_blank">
                      <article className="tile is-child notification is-link">
                        <p className="title">Void Bots</p>
                      </article>
                    </a>
                  </div>
                  <div className="tile flex-item-container">
                    <a href="https://infinitybots.gg/bot/738057910923296839/vote" target="_blank">
                      <article className="tile is-child notification is-link">
                        <p className="title">Infinity Bots</p>
                      </article>
                    </a>
                  </div>
                  <div className="tile flex-item-container">
                    <a href="https://top.gg/bot/738057910923296839/vote" target="_blank">
                      <article className="tile is-child notification is-link">
                        <p className="title">Top.gg</p>
                      </article>
                    </a>
                  </div>
                  <div className="tile flex-item-container">
                    <a href="https://discordbotlist.com/bots/akira-8248/upvote" target="_blank">
                      <article className="tile is-child notification is-link">
                        <p className="title">DiscordBotList</p>
                      </article>
                    </a>
                  </div>
                  <div className="tile flex-item-container">
                    <a href="https://diffcord.com/bots/738057910923296839/vote" target="_blank">
                      <article className="tile is-child notification is-link">
                        <p className="title">diffcord.com</p>
                      </article>
                    </a>
                  </div>
                  <div className="tile flex-item-container">
                    <a href="https://discords.com/bots/bot/738057910923296839/vote" target="_blank">
                      <article className="tile is-child notification is-link">
                        <p className="title">discords.com</p>
                      </article>
                    </a>
                  </div>
                  <div className="tile flex-item-container">
                    <a href="https://discord.com/application-directory/738057910923296839" target="_blank">
                      <article className="tile is-child notification is-link">
                        <p className="title">Discord Discovery</p>
                      </article>
                    </a>
                  </div>
                  <div className="tile flex-item-container">
                    <a href="./#" target="_blank">
                      <article className="tile is-child notification is-link">
                        <p className="title">TBA</p>
                      </article>
                    </a>
                  </div>
                  <div className="tile flex-item-container">
                    <a href="https://disforge.com/vote/3181-akira" target="_blank">
                      <article className="tile is-child notification is-link">
                        <p className="title">Disforge</p>
                      </article>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="column is-hidden-touch is-two-fifths-widescreen is-two-fifths-fullhd">
            <section className="hero">
              <div className="hero-body">
                <p className="title is-1 is-spaced">Vote for me on these Bot Lists!</p>
                <p className="subtitle">Thank you in advance, this helps bump up the bot and get the word out!</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
export default Vote;
