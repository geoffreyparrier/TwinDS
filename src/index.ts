import 'twind/shim';

import { setup } from 'twind';

setup({
  theme: {
    extend: {
      colors: {
        main: {
          50: '#FFFFFF',
          100: '#FBFDFD',
          200: '#DDEDF3',
          300: '#BFDEE8',
          400: '#A1CEDD',
          500: '#83BFD2',
          600: '#5AAAC3',
          700: '#3D8EA8',
          800: '#2E6B7F',
          900: '#1F4856',
        },
        error: {
          icon: 'rgb(239, 83, 80)',
          background: 'rgb(253, 237, 237)',
          text: 'rgb(95, 33, 32)',
        },
        warning: {
          icon: 'rgb(255, 152, 0)',
          background: 'rgb(255, 244, 229)',
          text: 'rgb(102, 60, 0)',
        },
        success: {
          icon: 'rgb(76, 175, 80)',
          background: 'rgb(237, 247, 237)',
          text: 'rgb(30, 70, 32)',
        },
        info: {
          icon: 'rgb(3, 169, 244)',
          background: 'rgb(229, 246, 253)',
          text: 'rgb(1, 67, 97)',
        },
      },
    },
  },
});

export * from './components';
