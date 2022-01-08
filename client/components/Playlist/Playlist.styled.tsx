import styled from 'styled-components'

import { borders, colors, fontWeights, spacings } from '../../styles/variables'

type PlaylistContainerProps = {
  isActive?: boolean
}

export const PlaylistContainer = styled.div<PlaylistContainerProps>`
  cursor: ${(props) => (props.isActive ? 'grabbing' : 'grab')};
`

type DraggingProps = {
  isActive?: boolean
  isDragging?: boolean
}

export const PlaylistItemContainer = styled.div<DraggingProps>`
  width: calc(100% - ${spacings.extraExtraSmall} - ${spacings.extraExtraSmall});
  max-width: 500px;
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
    props.isDragging &&
    `
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
    pointer-events: none;
    `}
  cursor: ${(props) => (props.isActive ? 'grabbing' : 'grab')};

  :hover {
    border-left: 2px solid ${colors.lightPink};
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
