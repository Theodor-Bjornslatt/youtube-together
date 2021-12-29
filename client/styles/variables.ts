export const headerHeight = '100px'

type MaxWidth = {
  small: 1280
  medium: 1440
  large: 1600
}

export const maxWidths: MaxWidth = {
  small: 1280,
  medium: 1440,
  large: 1600
}

type HeaderBoxHeight = {
  mobile: '54px'
  desktop: '108px'
}

export const headerBoxHeights: HeaderBoxHeight = {
  mobile: '54px',
  desktop: '108px'
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
  darkest: '#161414',
  dark: '#1E1C1C',
  brown: '#2D2828',
  white: '#FFFFFF',
  transparentDark: '#2D282880',
  transparentPink: '#FBECEC33',
  danger: '#bb2124'
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
  small: '5px 6px 30px rgba(235, 201, 201, 0.08)',
  large: '6px 8px 50px rgba(235, 201, 201, 0.03)'
}

export const borders = {
  light: '1px solid #2D2828',
  danger: `1px solid ${colors.danger}`
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
  extraSmall: '14px'
  small: '18px'
  medium: '24px'
  large: '32px'
  extraLarge: '40px'
  hero: '62px'
}

export const fontSizes: FontSizes = {
  extraSmall: '14px',
  small: '18px',
  medium: '24px',
  large: '32px',
  extraLarge: '40px',
  hero: '62px'
}

type Sizes = {
  tablet: 1024
  mobile: 768
  mobileSmall: 450
}

export const sizes: Sizes = {
  tablet: 1024,
  mobile: 768,
  mobileSmall: 450
}

type LineHeights = {
  extraSmall: '20px'
  small: '24px'
  medium: '32px'
  large: '45px'
  extraLarge: '50px'
  hero: '70px'
}

export const lineHeights: LineHeights = {
  extraSmall: '20px',
  small: '24px',
  medium: '32px',
  large: '45px',
  extraLarge: '50px',
  hero: '70px'
}
