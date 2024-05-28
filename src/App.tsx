import { css, Global } from '@emotion/react';

const Theme = () => {
  return (
    <Global
      styles={{
        html: {},
      }}
    />
  );
};

const styles = {
  card: css({
    position: 'fixed',
    inset: '0px',
    maxWidth: '100vw',
    maxHeight: '100dvh',
    margin: 'auto',
    width: '350px',
    height: '600px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),

  profile: css({
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    img: {
      borderRadius: '50%',
    },
  }),

  links: css({
    textAlign: 'center',

    ul: {
      listStyle: 'none',
      paddingInlineStart: 0,

      li: {
        padding: '0.5rem',
        margin: '1rem',
        borderRadius: '0.5rem',
        backgroundColor: 'darkgrey',

        a: {
          textDecoration: 'none',
          color: 'white',
        },
      },
    },
  }),
};

function App() {
  return (
    <>
      <Theme />
      <main css={styles.card}>
        <section css={styles.profile}>
          <img
            src='/assets/images/avatar-jessica.jpeg'
            alt='Profile Picture of Jessica Randall'
            width='72px'
            height='72px'
          />
          <h1>Jessica Randall</h1>
          <p>London, United Kingdom</p>
          <p>"Front-end developer and avid reader."</p>
        </section>
        <section css={styles.links}>
          <ul>
            <li>
              <a href=''>GitHub</a>
            </li>
            <li>
              <a href=''>Frontend Mentor</a>
            </li>
            <li>
              <a href=''>LinkedIn</a>
            </li>
            <li>
              <a href=''>Twitter</a>
            </li>
            <li>
              <a href=''>Instagram</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
