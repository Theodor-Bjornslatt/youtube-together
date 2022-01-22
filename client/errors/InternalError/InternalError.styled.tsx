import styled, { keyframes } from 'styled-components'

import { colors, headerBoxHeights, sizes } from '../../styles/variables'

const Bouncing = keyframes`
  0% {
    transform: translate(0px,45px) rotate(0deg);
    opacity: 0.1;
  }
  7% {
    transform: translate(90px,5px) rotate(130deg);
    opacity: 0.5;
  }
  17% {
    transform: translate(160px,45px) rotate(250deg);
    opacity: 1;
  }
  26% {
    transform: translate(270px,15px) rotate(360deg);
  }
  34% {
    transform: translate(360px,45px) rotate(490deg);
  }
  42% {
    transform: translate(480px,30px) rotate(600deg);
  }
  50% {
    transform: translate(501px,45px) rotate(720deg);
  }
`

const PulsatingBorder = keyframes`
  40% {
      box-shadow: 2px 0px 15px 12px rgba(240, 223, 223, 0.151);
  }
`

export const Reload = styled.div`
  transform: translate(501px, 45px);
  justify-self: flex-end;
  align-self: center;
  position: relative;
  width: 50px;
  height: 50px;
  background: ${colors.lightPink};
  border-radius: 100px;
  animation: ${Bouncing} 3s linear, ${PulsatingBorder} 4s infinite;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/c/cf/Ei-refresh.svg');
  grid-area: h;
  cursor: pointer;
  box-shadow: 2px 0px 5px 5px rgba(240, 223, 223, 0.151);

  :hover {
    transition: transform 0.7s ease-in-out;
    transform: translate(501px, 45px) rotate(360deg);
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    display: none;
  }
`

export const CenteringContainer = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const GridContainer = styled.div`
  display: grid;
  flex-direction: row;
  min-width: 100%;
  height: calc(
    100vh - ${headerBoxHeights.desktop} - ${headerBoxHeights.desktop}
  );
  grid-template-areas:
    'a b c'
    'd e f'
    'g h i';
`

export const NothingToSee = styled.div`
  align-self: center;
  grid-area: d;
`

export const Heading = styled.h5`
  max-width: 700px;
  justify-self: flex-end;
  align-self: center;
  grid-column-start: a;
  grid-column-end: e;
`

export const Paragraph = styled.p`
  grid-area: i;
`
