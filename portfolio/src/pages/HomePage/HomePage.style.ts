export const homePageStyles = {
  navbar: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    //  width: 'calc(100vw - 16px)',
    width: '100vw',
    zIndex: 100,
    background: 'white',
  },

  snapContainer: {
    height: '100vh',
    width: '100vw',
    overflowY: 'scroll' as const,
    overflowX: 'hidden' as const,
    scrollSnapType: 'y mandatory' as const,
    scrollBehavior: 'smooth' as const,
  },
  section: {
    height: '100vh',
    width: '100vw',
    scrollSnapAlign: 'start',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  bg: {
    minHeight: '100vh',
    minWidth: '100vw',
    position: 'relative' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'stretch',
    fontFamily: 'Reddit Sans, Arial, sans-serif',
    paddingTop: 70,
  },
  gradientBg: {
    willChange: 'transform',  // GPU acceleration
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundColor: '#ff99df',
    backgroundImage: `
      radial-gradient(circle at 52% 73%, hsla(310, 85%, 67%, 1) 0px, transparent 50%),
      radial-gradient(circle at 0% 30%, hsla(197, 90%, 76%, 1) 0px, transparent 50%),
      radial-gradient(circle at 41% 26%, hsla(234, 79%, 69%, 1) 0px, transparent 50%),
      radial-gradient(circle at 41% 51%, hsla(41, 70%, 63%, 1) 0px, transparent 50%),
      radial-gradient(circle at 41% 88%, hsla(36, 83%, 61%, 1) 0px, transparent 50%),
      radial-gradient(circle at 76% 73%, hsla(346, 69%, 70%, 1) 0px, transparent 50%),
      radial-gradient(circle at 29% 37%, hsla(272, 96%, 64%, 1) 0px, transparent 50%)`,
    backgroundSize: '150% 150%',
    filter: 'blur(80px)',
    animation: 'moveBackground 20s linear infinite',
    overflow: 'hidden',
    
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    //boxSizing: 'border-box' as const,
  },

  nameTitle: {
    fontSize: '3rem',
    fontWeight: 700,
    textDecoration: 'none',
    marginLeft: '20px',
  },

  skillList: {
    fontSize: '1.2rem',
    fontWeight: 700,
    textDecoration: 'none',
    marginLeft: '20px',
  },
} as const;

export const dynamicContentContainer = (widths: { left: string; center: string; right: string }) => ({
  width: widths.center,
  marginLeft: widths.left,
  marginRight: widths.right,
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'flex-start',
  boxSizing: 'border-box' as const,
});

export const getBgAnimationStyle = (reduceMotion: boolean) =>
  reduceMotion
    ? { animation: 'none' }
    : { animation: 'moveBackground 20s linear infinite' };

export const getDebugBorderStyle = (debugBorders: boolean, color: string) =>
  debugBorders ? { border: `1px solid ${color}` } : {}; 