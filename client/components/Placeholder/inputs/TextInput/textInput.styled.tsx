import styled from 'styled-components'

import {
  fontSizes,
  borderRadius,
  minimumInputHeight,
  colors,
  borders,
  fonts
} from '../../../../styles/variables'

export const TextInputContainer = styled.div`
  .input-wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    max-width: 23rem;
    max-height: 100%;
    font-family: ${fonts.roboto};
  }

  .wrapper-inner {
    position: relative;
    margin-top: 4px;
  }

  .label {
    color: ${colors.white};
    &-error {
      color: ${colors.danger};
    }
  }

  .input {
    display: inline-block;
    box-sizing: border-box;
    background: ${colors.lightPink};
    font-size: ${fontSizes.small};
    font-family: ${fonts.roboto};
    border-radius: ${borderRadius.small};
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: ${borders.light};
    color: ${colors.darkest};
    height: ${minimumInputHeight.mobile};
    width: 100%;
    &:focus {
      border: 1px solid lightpink;
      outline: none;
      box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.3);
    }
    &-error {
      border: 1px solid ${colors.danger};
      color: ${colors.danger};
      &:focus {
        border: 1px solid ${colors.danger};
      }
    }
  }

  .error {
    color: ${colors.danger};
    font-size: 0.75rem;
    padding-left: 8px;
    padding-top: 4px;
  }
`
