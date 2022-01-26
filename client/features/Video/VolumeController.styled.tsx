import styled from 'styled-components'

import {
  borderRadius,
  colors,
  lineHeights,
  sizes,
  spacings,
  zIndexes
} from '../../styles/variables'

export const MainContainer = styled.div`
  display: flex;
  gap: 5px;
`

export const VolumeBar = styled.input`
  height: ${spacings.tiny};
  -webkit-appearance: none;
  margin: ${spacings.extraExtraSmall} 0;
  width: 100%;
  border-radius: ${borderRadius.small};
  z-index: ${zIndexes.small};

  &:focus {
    outline: none;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: ${spacings.tiny};
    cursor: pointer;
    background: ${colors.transparentBrown};
  }

  ::-webkit-slider-thumb {
    height: 7px;
    width: ${spacings.extraSmall};
    border-radius: ${borderRadius.large};
    background: ${colors.white};
    cursor: pointer;
    transition-duration: 0.2s;
    transition-delay: 0.2s;
    -webkit-appearance: none;
    margin-top: -1px;

    &:hover {
      height: ${spacings.extraExtraSmall};
      margin-top: -3px;
    }
  }

  :focus::-webkit-slider-runnable-track {
    background: ${colors.transparentBrown};
  }

  ::-moz-range-track {
    width: 100%;
    height: ${spacings.tiny};
    cursor: pointer;
    background: ${colors.transparentBrown};
  }

  ::-moz-range-thumb {
    height: 7px;
    width: ${spacings.extraSmall};
    border-radius: ${borderRadius.large};
    background: ${colors.white};
    cursor: pointer;
    transition-duration: 0.2s;
    transition-delay: 0.2s;
    -webkit-appearance: none;
    margin-top: -1px;

    &:hover {
      height: ${spacings.extraExtraSmall};
      margin-top: -3px;
    }
  }

  ::-ms-track {
    width: 100%;
    height: ${spacings.tiny};
    cursor: pointer;
    background: ${colors.transparentBrown};
  }

  ::-ms-thumb {
    height: ${lineHeights.extraExtraSmall};
    width: ${spacings.extraSmall};
    border-radius: ${borderRadius.large};
    background: ${colors.white};
    cursor: pointer;
    -webkit-appearance: none;

    &:hover {
      height: ${lineHeights.extraSmall};
      margin-top: -${spacings.tiny};
    }
  }

  @media screen and (max-width: ${sizes.tablet}px) {
    height: ${spacings.tiny};

    ::-webkit-slider-runnable-track {
      height: ${spacings.tiny};
    }

    ::-webkit-slider-thumb {
      height: 7px;
      margin-top: -1px;

      &:hover {
        margin-top: -3px;
      }
    }
    ::-moz-range-track {
      height: ${lineHeights.extraSmall};
    }

    ::-moz-range-thumb {
      height: 7px;
      width: ${spacings.extraSmall};
      border-radius: ${borderRadius.large};

      &:hover {
        margin-top: -3px;
      }
    }

    ::-ms-track {
      height: ${lineHeights.extraSmall};
    }

    ::-ms-thumb {
      height: 7px;
      width: ${spacings.extraSmall};

      &:hover {
        margin-top: -3px;
      }
    }
  }
`
