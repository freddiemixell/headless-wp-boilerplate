const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  const color = {
    primary: '#8CC974',
    secondary: '#22A6DD',
    primaryDark: '#135B79'
  }

  export const style = {
    device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
    },
    color: {
      primary: '#8CC974',
      secondary: '#22A6DD',
      primaryDark: '#135B79'
    },
    burgerStyles: {
      bmBurgerButton: {
        position: 'absolute',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#8CC974'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px',
        right: '34px'
      },
      bmCross: {
        background: '#8CC974',
        height: '34px'
      },
      bmMenu: {
        background: '#135B79',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        width: '100%',
        overflow: 'visible'
      },
      bmMorphShape: {
        fill: '#135B79'
      },
      bmItem: {
        display: 'flex',
        flexDirection: 'column',
      },
      bmItemList: {
        display: 'flex',
        flexDirection: 'column'
      },
      bmOverlay: {
        background: '#fff'
      }
    }
  };