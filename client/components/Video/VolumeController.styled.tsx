import styled from 'styled-components'

import {
  borderRadius,
  colors,
  lineHeights,
  shadows,
  spacings
} from '../../styles/variables'

export const MainContainer = styled.div`
  display: flex;
  gap: 5px;
`

export const VolumeBar = styled.input`
  height: ${lineHeights.extraExtraSmall};
  -webkit-appearance: none;
  margin: ${spacings.extraExtraSmall} 0;
  width: 100%;
  background: transparent;
  border-radius: ${borderRadius.small};

  &:focus {
    outline: none;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: ${lineHeights.extraExtraSmall};
    cursor: pointer;
    box-shadow: ${shadows.small};
    background: ${colors.transparentBrown};
  }

  ::-webkit-slider-thumb {
    height: ${lineHeights.extraExtraSmall};
    width: ${spacings.extraSmall};
    border-radius: ${borderRadius.large};
    background: ${colors.white};
    cursor: pointer;
    transition-duration: 0.2s;
    transition-delay: 0.2s;
    -webkit-appearance: none;

    &:hover {
      height: ${lineHeights.extraSmall};
      margin-top: -5px;
    }
  }

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
    background: ${colors.white};
    cursor: pointer;
    -webkit-appearance: none;

    &:hover {
      height: ${lineHeights.extraSmall};
      margin-top: -5px;
    }
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
    background: ${colors.white};
    cursor: pointer;
    -webkit-appearance: none;

    &:hover {
      height: ${lineHeights.extraSmall};
      margin-top: -5px;
    }
  }
`
