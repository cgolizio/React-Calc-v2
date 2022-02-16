export const ButtonStyles = {
  baseStyle: {
    borderRadius: '25px',
    minH: '100%',
    w: '100%',
    textShadow: '3px 2px 3px rgba(255,255,255,.2)',
    outline: 'none !important',
    userSelect: 'none',
    transform: 'translateY(0px)',
    _active: {
      transform: 'translateY(2px)',
      outline: 'none !important',
    },
  },
  sizes: {},
  variants: {
    primary: {
      bg: 'primary',
      fontSize: '10rem',
      color: '#554FBA',
      bgGradient: 'linear(to-br, #736BFB 0%, #636BFB 50%, #536BFB 100%);',
      border: '8px solid #536BFB',
      _active: {
        outline: 'none !important',
        bgGradient: 'linear(to-br, #536BFB 0%, #636BFB 50%, #736BFB 100%)',
        // bgGradient: 'radial(#536BFB 0%, #536BFB 70%, #736BFB 100%)',
      },
      _focus: {
        outline: 'none !important',
      },
    },
    secondary: {
      bg: 'secondary',
      fontSize: '8rem',
      color: '#00636B',
      bgGradient: 'linear(to-br, #008C98 0%, #007983 78%, #006871 100%);',
      border: '5px solid #006871',
      _active: {
        outline: 'none !important',
        bgGradient: 'linear(to-br, #006871 0%, #007983 70%, #008C98 100%)',
        // bgGradient: 'radial(#007983 0%, #007983 70%, #008C98 100%)',
      },
      _focus: {
        outline: 'none !important',
      },
    },
    highlight: {
      bg: 'highlight',
      fontSize: '10rem',
      color: '#4FD1B1',
      textShadow: '3px 2px 3px rgba(255,255,255,.4)',
      bgGradient: 'linear(to-br, #5EFBD6 0%, #56E7C5 50%, #4ED0B1 100%);',
      border: '6px solid #4ED0B1',
      _active: {
        outline: 'none !important',
        bgGradient: 'linear(to-br, #4ED0B1 0%, #56E7C5 50%, #5EFBD6 100%)',
        // bgGradient: 'radial(#56E7C5 0%, #56E7C5 70%, #5EFBD6 100%)',
      },
      _focus: {
        outline: 'none !important',
      },
    },
  },
  defaultProps: {},
};
