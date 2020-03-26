import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#ffc107',
        accent: '#673ab7',
        error: '#f44336',
        warning: '#cddc39',
        info: '#009688',
        success: '#4caf50',
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});
