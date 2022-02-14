import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Titillium Web', sans-serif;
        font-styles: normal;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.googleapis.com/css2?family=Titillium+Web');
      }
    `}
  />
);

export default Fonts;
