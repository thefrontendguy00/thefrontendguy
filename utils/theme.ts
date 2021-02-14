import { fontSizes, lineHeights, weights } from '@utils/units';

const typography = {
  fontFamilyHeading: "'Merriweather', serif",
  fontFamilyBodyCopy: "'Merriweather Sans', serif"
}

const palette = {
  common: {
    white: 'var(--theme-colors-white, #FFFFFF)',
    black: 'var(--theme-colors-black, #000000)'
  },
  dark: {
    background: 'var(--theme-colors-background, #2A2C36)',
    primary: 'var(--theme-colors-primary, #2A2C36)',
    textPrimary: 'var(--theme-colors-white, #FFFFFF)',
    textSecondary: 'var(--theme-colors-textSecondary, #F5F5F5)',
    textAccent: 'var(--theme-colors-textAccent, #FAFAFA)',
    toggleBackground: 'var(--theme-colors-toggleBackground, #1E1E1E)',
    toggleSwitchBackground: 'var(--theme-colors-toggleSwitchBackground, #2A2C36)'
  }, 
  light: {
    background: 'var(--theme-colors-white, #FFFFFF)',
    primary: 'var(--theme-colors-primary,  #880E4F)',
    textPrimary: 'var(--theme-colors-textPrimary, #000000)',
    textSecondary: 'var(--theme-colors-textSecondary, #000000)',
    textAccent: 'var(--theme-colors-textAccent, #505159)',
    toggleBackground: 'var(--theme-colors-toggleBackground, #BFC0C2)',
    toggleSwitchBackground: 'var(--theme-colors-toggleSwitchBackground, #FAFAFA)'
  },
  grey: {
    silverSand: 'var(--theme-colors-silverSand, #BFC0C2)',
    jumbo: 'var(--theme-colors-jumbo, #75767C)',
  }
}

const shadows = {
  toggle: {
    dark: 'inset 1px 0px 2px #505159, inset 0px 1px 2px #505159',
    light: '2px 0px 4px rgba(80, 81, 89, 0.2), 0px 2px 4px rgba(80, 81, 89, 0.2)'
  },
  button: {
    dark: '4px 0px 8px #505159, 0px 4px 8px #505159;',
    light: 'none'
  }
}

export const themeLight = {
  fontSizes,
  lineHeights,
  typography,
  weights,
  palette: {
    ...palette.common,
    ...palette.grey,
    ...palette.light
  },
  shadows: {
    toggle: {
      shadow: shadows.toggle.light
    },
    button: {
      shadow: shadows.button.light
    }
  }
}

export const themeDark = {
  fontSizes,
  lineHeights,
  typography,
  weights,
  palette: {
    ...palette.common,
    ...palette.grey,
    ...palette.dark
  },
  shadows: {
    toggle: {
      shadow: shadows.toggle.dark
    },
    button: {
      shadow: shadows.button.dark
    }
  }
}
