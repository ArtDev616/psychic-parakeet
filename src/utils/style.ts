import { CSSObject } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const breakpoints = {
  xs: {
    css: '@media (max-width: 575px)',
    js: 575,
  },
  md: {
    css: '@media (max-width: 767px)',
    js: 767,
  },
  l: {
    css: '@media (max-width: 991px)',
    js: 991,
  },
  xl: {
    css: '@media (max-width: 1199px)',
    js: 1199,
  },
};

export const textOverflowEllipses: CSSObject = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export const textOverflowLineClamp: CSSObject = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
};

export const customScrollBar: CSSObject = {
  '&::-webkit-scrollbar': {
    WebkitAppearance: 'none',
    width: 6,
    marginRight: 10,
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 10,
    border: '3px solid #F3F3F7',
    backgroundColor: '#F3F3F7',
  },
};

export const hideScrollBar: CSSObject = {
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

export const fontStyles = {
  h1: {
    fontFamily: 'Avenir',
    color: '#111456',
    fontSize: 27,
    fontWeight: 900,
    fontStyle: 'normal',
    lineHeight: '36px',
    margin: 0,
    padding: 0,
  },

  h2: {
    fontFamily: 'Avenir',
    color: '#111456',
    fontSize: 24,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: '32px',
    margin: 0,
    padding: 0,
  },

  h3: {
    fontFamily: 'Avenir',
    color: '#111456',
    fontSize: 21,
    fontWeight: 900,
    fontStyle: 'normal',
    lineHeight: '28px',
    margin: 0,
    padding: 0,
  },

  h4: {
    fontFamily: 'Avenir',
    color: '#111456',
    fontSize: 17,
    fontWeight: 900,
    fontStyle: 'normal',
    lineHeight: '24px',
    margin: 0,
    padding: 0,
  },

  h5: {
    fontFamily: 'Avenir',
    color: '#535353',
    fontSize: 17,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: '24px',
    margin: 0,
    padding: 0,
  },

  h6: {
    fontFamily: 'Avenir',
    color: '#333333',
    fontSize: 13,
    fontWeight: 800,
    fontStyle: 'normal',
    lineHeight: '18px',
    margin: 0,
    padding: 0,
  },

  placeholder: {
    fontFamily: 'Avenir',
    color: '#AFBFC0',
    fontSize: 13,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: '18px',
    margin: 0,
    padding: 0,
  },

  button: {
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: 800,
    fontStyle: 'normal',
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    border: 'none',
    cursor: 'pointer',
  },

  label: {},

  // Use this for p tag as well
  body: {
    fontFamily: 'Avenir',
    color: '#535353',
    fontSize: 12,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: '18px',
    margin: 0,
    padding: 0,
  },

  chatsBody: {
    fontFamily: 'Avenir',
    color: '#535353',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '18px',
    fontStyle: 'normal',
    margin: 0,
    padding: 0,
  },

  cardsBody: {
    fontFamily: 'Avenir',
    color: '#535353',
    fontSize: 12,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: '18px',
    margin: 0,
    padding: 0,
  },

  small: {
    fontFamily: 'Avenir',
    color: '#A5A5A5',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '14px',
    margin: 0,
    padding: 0,
  },
};
