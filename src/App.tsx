import { css, Global } from '@emotion/react';

const Theme = () => {
  return (
    <Global
      styles={{
        html: {
          '--sm': '375px',
          '--colors-primary': 'hsl(75, 94%, 57%)',
          '--colors-white': 'hsl(0, 0%, 100%)',
          '--colors-grey': 'hsl(0, 0%, 20%)',
          '--colors-darkgrey': 'hsl(0, 0%, 12%)',
          '--colors-black': 'hsl(0, 0%, 8%)',
          '--font-size-sm': '14px',

          fontFamily: 'Inter, sans-serif',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--colors-white)',
          backgroundColor: 'var(--colors-black)',

          h1: {
            fontWeight: 600,
            fontSize: '1.8rem',
            letterSpacing: '-0.75px',
            marginTop: '2rem',
            marginBottom: '0.5rem',
          },

          '#root': {
            width: '100dw',
            height: '100dvh',
            minWidth: '320px',
            minHeight: '615px',
            position: 'relative',
            '@media(min-width: 375px)': {
              minWidth: '382px',
              minHeight: '650px',
            },
          },
        },
      }}
    />
  );
};

const styles = {
  card: css({
    position: 'absolute',
    overflow: 'scroll',
    inset: '0',
    minWidth: '320px',
    minHeight: '580px',
    width: '330px',
    height: '580px',
    margin: 'auto',
    borderRadius: '1rem',
    backgroundColor: 'var(--colors-darkgrey)',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '@media(min-width: 375px)': {
      width: '382px',
      height: '615px',
    },
  }),

  profile: css({
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem 1rem 0 1rem',

    'div:has(>img)': {
      position: 'relative',
      transition: '.5s',

      ':before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'var(--colors-primary)',
        transition: '.5s',
        transform: 'scale(.9)',
        zIndex: '-1',
        border: 'red',
      },

      ':hover': {
        filter: 'brightness(120%)',
        ':before': {
          transform: 'scale(1.1)',
          boxShadow: '0 0 8px var(--colors-primary)',
          filter: 'blur(3px)',
        },
      },
    },

    img: {
      position: 'relative',
      borderRadius: '50%',
    },

    '& p:last-child': {
      marginTop: '1.8rem',
    },
  }),

  links: css({
    textAlign: 'center',
    fontWeight: '600',
    margin: '1rem',

    '@media(min-width: 375px)': {
      margin: '1rem 2rem',
    },

    ul: {
      listStyle: 'none',
      paddingInlineStart: 0,

      li: {
        padding: '0.9rem',
        margin: '0.9rem',
        borderRadius: '0.5rem',
        backgroundColor: 'var(--colors-grey)',
        cursor: 'pointer',
        userSelect: 'none',
        color: 'var(--colors-white)',
        transition: 'all 0.5s ease',
        transitionTimingFunction: 'cubic-bezier(.65,.22,.47,1.14)',

        ':hover,:focus,:active': {
          backgroundColor: 'var(--colors-primary)',
          color: 'var(--colors-black)',
        },

        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  }),

  highlight: css({
    color: 'var(--colors-primary)',
    fontWeight: '700',
  }),
};

function App() {
  return (
    <>
      <Theme />
      <main css={styles.card}>
        <section css={styles.profile}>
          <div>
            <img
              src='/assets/images/avatar-jessica.jpeg'
              alt='Profile Picture of Jessica Randall'
              width='86px'
              height='86px'
            />
          </div>
          <h1>Jessica Randall</h1>
          <p css={styles.highlight}>London, United Kingdom</p>
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
