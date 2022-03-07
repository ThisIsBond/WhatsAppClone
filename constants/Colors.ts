const colorLightGreen = '#0C6157';
const tintColorLight = '#C0C0C0'
const tintColorLightBlack = '#36454F'
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  lightDark:{
    text: '#000',
    background: '#fff',
    tint: tintColorLightBlack,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  lightGreen: {
    tint: colorLightGreen
  }
};
