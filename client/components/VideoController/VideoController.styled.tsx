import styled from 'styled-components'

import {
  borderRadius,
  colors,
  lineHeights,
  shadows,
  spacings
} from '../../styles/variables'

export const ProgressBar = styled.input`
  height: ${lineHeights.extraExtraSmall};
  -webkit-appearance: none;
  margin: ${spacings.extraExtraSmall} 0;
  width: 100%;
  background: transparent;

  &:focus {
    outline: none;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: ${lineHeights.extraExtraSmall};
    cursor: pointer;

    box-shadow: ${shadows.small};
    background: ${colors.transparentDark};
    border-radius: ${borderRadius.small};
  }

  ::-webkit-slider-thumb {
    height: ${lineHeights.extraExtraSmall};
    width: ${spacings.medium};
    border-radius: ${borderRadius.large};
    background: ${colors.brown};
    cursor: pointer;
    -webkit-appearance: none;

    :focus::-webkit-slider-runnable-track {
      background: ${colors.transparentDark};
    }

    ::-moz-range-track {
      width: 100%;
      height: ${lineHeights.extraExtraSmall};
      cursor: pointer;
      box-shadow: ${shadows.small};
      background: ${colors.transparentDark};
      border-radius: ${borderRadius.small};
    }

    ::-moz-range-thumb {
      height: ${lineHeights.extraExtraSmall};
      width: ${spacings.medium};
      border-radius: ${borderRadius.large};
      background: ${colors.brown};
      cursor: pointer;
      -webkit-appearance: none;
    }

    ::-ms-track {
      height: ${lineHeights.extraExtraSmall};
      width: 100%;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }

    ::-ms-thumb {
      height: ${lineHeights.extraExtraSmall};
      width: ${spacings.medium};
      border-radius: ${borderRadius.large};
      background: ${colors.brown};
      cursor: pointer;
      -webkit-appearance: none;
    }
  }
`
