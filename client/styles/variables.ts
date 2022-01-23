type MaxWidth = {
  extraExtraSmall: 780
  extraSmall: 1080
  small: 1280
  medium: 1440
  large: 1600
  roomContent: 1000
}

export const maxWidths: MaxWidth = {
  extraExtraSmall: 780,
  extraSmall: 1080,
  small: 1280,
  medium: 1440,
  large: 1600,
  roomContent: 1000
}

type HeaderBoxHeight = {
  mobile: '54px'
  desktop: '72px'
}

export const headerBoxHeights: HeaderBoxHeight = {
  mobile: '54px',
  desktop: '72px'
}

type MinimumInputHeight = {
  mobile: '40px'
  desktop: '60px'
}

export const minimumInputHeights: MinimumInputHeight = {
  mobile: '40px',
  desktop: '60px'
}

export const imageFilters = {
  mediumDark: '#16141414',
  dark: '#16141450'
}

export const colors = {
  lightPink: '#FBECEC',
  darkPink: '#c17d77',
  darkest: '#161414',
  dark: '#1E1C1C',
  lightBrown: '#5c5757',
  brown: '#2D2828',
  white: '#F2EEE7',
  transparentDark: '#2D282880',
  transparentPink: '#FBECEC33',
  transparentBrown: '#443f3f8a',
  danger: '#FF1A1A'
}

type BorderRadius = {
  small: '5px'
  large: '10px'
}

export const borderRadius: BorderRadius = {
  small: '5px',
  large: '10px'
}

type Spacings = {
  tiny: '5px'
  extraExtraSmall: '10px'
  extraSmall: '18px'
  small: '24px'
  medium: '32px'
  large: '40px'
  extraLarge: '56px'
  extraExtraLarge: '64px'
  huge: '72px'
}

export const spacings: Spacings = {
  tiny: '5px',
  extraExtraSmall: '10px',
  extraSmall: '18px',
  small: '24px',
  medium: '32px',
  large: '40px',
  extraLarge: '56px',
  extraExtraLarge: '64px',
  huge: '72px'
}

export const shadows = {
  slider: '5px 6px 5px rgba(235, 201, 201, 0.08)',
  small: '5px 6px 30px rgba(235, 201, 201, 0.08)',
  large: '6px 8px 50px rgba(235, 201, 201, 0.03)'
}

export const borders = {
  light: '1px solid #2D2828',
  danger: `1px solid ${colors.danger}`,
  focus: '1px solid lightpink',
  outline: '2px solid #D9A6AE'
}
type textColors = {
  [key: string]: string
}
export const textColors: textColors = {
  Pink: '#FE37F6',
  Green: '#93FFA4',
  Blue: '#93F8FF'
}

export const fonts = {
  raleway: `'Raleway', sans-serif`,
  roboto: `'Roboto Mono', monospace`
}

type FontWeights = {
  thin: 300
  regular: 400
  semiBold: 600
  bold: 700
}

export const fontWeights: FontWeights = {
  thin: 300,
  regular: 400,
  semiBold: 600,
  bold: 700
}

type FontSizes = {
  extraExtraSmall: '12px'
  extraSmall: '14px'
  small: '18px'
  medium: '24px'
  large: '32px'
  extraLarge: '40px'
  hero: '62px'
}

export const fontSizes: FontSizes = {
  extraExtraSmall: '12px',
  extraSmall: '14px',
  small: '18px',
  medium: '24px',
  large: '32px',
  extraLarge: '40px',
  hero: '62px'
}

type Sizes = {
  desktopWide: 1600
  desktop: 1440
  tablet: 1024
  mobile: 768
  mobileSmall: 450
}

export const sizes: Sizes = {
  desktopWide: 1600,
  desktop: 1440,
  tablet: 1024,
  mobile: 768,
  mobileSmall: 450
}

type LineHeights = {
  extraExtraExtraSmall: '5px'
  extraExtraSmall: '10px'
  extraSmall: '20px'
  small: '24px'
  medium: '32px'
  large: '45px'
  extraLarge: '50px'
  hero: '70px'
}

export const lineHeights: LineHeights = {
  extraExtraExtraSmall: '5px',
  extraExtraSmall: '10px',
  extraSmall: '20px',
  small: '24px',
  medium: '32px',
  large: '45px',
  extraLarge: '50px',
  hero: '70px'
}

type ScrollbarWidths = {
  regular: '10px'
}

export const scrollbarWidths: ScrollbarWidths = {
  regular: '10px'
}
