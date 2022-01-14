import styled from 'styled-components'

import {
  borderRadius,
  colors,
  lineHeights,
  shadows,
  sizes,
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
    background: ${colors.transparentBrown};

    border-radius: ${borderRadius.small};
  }

  ::-webkit-slider-thumb {
    height: ${lineHeights.extraExtraSmall};
    width: ${spacings.medium};
    border-radius: ${borderRadius.large};
    background: ${colors.atriumWhite};
    cursor: pointer;
    transition-duration: 0.2s;
    transition-delay: 0.2s;
    -webkit-appearance: none;

    :focus::-webkit-slider-runnable-track {
      background: ${colors.transparentBrown};
    }

    ::-moz-range-track {
      width: 100%;
      height: ${lineHeights.extraExtraSmall};
      cursor: pointer;
      box-shadow: ${shadows.small};
      background: ${colors.transparentBrown};
      border-radius: ${borderRadius.small};
    }

    ::-moz-range-thumb {
      height: ${lineHeights.extraExtraSmall};
      width: ${spacings.medium};
      border-radius: ${borderRadius.large};
      background: ${colors.atriumWhite};
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
      background: ${colors.atriumWhite};
      cursor: pointer;
      -webkit-appearance: none;
    }

    &:hover {
      height: ${lineHeights.extraSmall};
      margin-top: -5px;
    }
  }

  @media screen and (max-width: ${sizes.tablet}px) {
    height: ${lineHeights.extraSmall};
    ::-webkit-slider-runnable-track {
      height: ${lineHeights.extraSmall};
    }

    ::-webkit-slider-thumb {
      height: ${lineHeights.extraSmall};
    }
    ::-moz-range-track {
      height: ${lineHeights.extraSmall};
    }

    ::-moz-range-thumb {
      height: ${lineHeights.extraSmall};
      width: ${spacings.medium};
      border-radius: ${borderRadius.large};
    }

    ::-ms-track {
      height: ${lineHeights.extraSmall};
    }

    ::-ms-thumb {
      height: ${lineHeights.extraSmall};
      width: ${spacings.large};
    }
  }
`
