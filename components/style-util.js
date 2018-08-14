const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
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
      primary: '#000'
    },
    burgerStyles: {
      bmBurgerButton: {
        position: 'absolute',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#C4222F'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px',
        right: '34px'
      },
      bmCross: {
        background: '#243B72',
        height: '34px'
      },
      bmMenu: {
        background: '#fff',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        width: '100%',
        overflow: 'visible'
      },
      bmMorphShape: {
        fill: '#fff'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmItem: {
        display: 'flex',
        flexDirection: 'column'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }
  };