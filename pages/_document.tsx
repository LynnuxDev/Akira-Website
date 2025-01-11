import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* Dev Credit */}
          <meta name="author" content="Lynnux" />

          {/* Discord tag */}
          <meta property="og:url" content="https://akira.lynnux.xyz/commands/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Akira - Commands."/>
          <meta property="og:description" content="Looking for a comprehensive list of commands for Akira? You found it, you'll find all the information you need to use Akira to her fullest potential. From moderation to reaction-roles, and our Commands page makes it easy to find the features you're looking for. Akira's Commands page is an essential resource for getting the most out of our bot."/>
          <meta property="og:image" content="https://cdn.lynnux.xyz/images/AkiraAvatar.png"/>
          <meta name="theme-color" content="#f47fff"/>

          {/* Favicon */}
          <link rel="shortcut icon" href="/assets/images/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon.ico" />
          <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/favicon.ico" />
          <link rel="icon" type="image/png" sizes="512x512" href="/assets/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;