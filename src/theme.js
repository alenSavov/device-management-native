import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    mainBackgroundColor: '#14181d',
    mainFontColor: '#949BA8',
    fontColor: '#606672',
    bgGradientColor1: '#050505',
    bgGradientColor2: '#3C3C3C',
    inenrTitle: '#87888C',
    ...DefaultTheme.colors,
    primary: '#949BA8',
    accent: 'yellow',
    background: '#FFF',
  },
  buttons: {
    colors: {
      fontColor: '#E6EAF3',
      firstGradientColor: '#693296',
      secondGradientColor: '#CF3875',
      borderColor: '#F504FE',
    },
  },
};

export default theme;
