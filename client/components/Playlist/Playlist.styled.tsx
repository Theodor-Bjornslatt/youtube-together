import styled from 'styled-components'

import { borders, colors, fontWeights, spacings } from '../../styles/variables'

type PlaylistContainerProps = {
  isActive?: boolean
}

export const PlaylistContainer = styled.div<PlaylistContainerProps>`
  ${(props) => props.isActive && 'cursor: grabbing'};
`

type DraggingProps = {
  dragEntered?: boolean
  isActive?: boolean
}

export const PlaylistItemContainer = styled.div<DraggingProps>`
  width: 500px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  color: ${colors.white};
  background: ${colors.darkest};
  border: ${borders.light};
  margin: ${spacings.extraSmall} ${spacings.extraExtraSmall};
  ${(props) =>
    props.isActive &&
    `border-top: 2px solid blue;
  `}
  cursor: grab;

  :-moz-drag-over {
    cursor: grabbing;
    background: white;
  }
`

export const PlaylistTextContainer = styled.div`
  max-width: 100%;
  padding: ${spacings.extraSmall};

  h4 {
    overflow: hidden;
    font-weight: ${fontWeights.bold};
    word-wrap: wrap;
  }
`

export const PlaylistIconContainer = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  margin-right: ${spacings.extraSmall};
`
