import React from "react";
import styled, { css } from 'styled-components'
import { MdClose } from 'react-icons/md'
import { Image, Map, ClipboardList } from '../../styles/icons'
import { Gif } from '@styled-icons/fluentui-system-regular/Gif'

// export const Header = styled.div`
//     position: absolute;
//     top: 75px;
//     left: 85px;
// `

// export const Dot = styled.div`
//   background: var(--gray);
//   width: 2px;
//   height: 2px;
//   margin-left:150px;
//   margin-top: 10px;
// `;

interface StatusProps {
  active?: boolean;
}

export const Background = styled.div`
    z-index: 10;
    width: 600px;
    height: 346px;
    background: #1C2833;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 5%;
    right: 37%;
    border-radius: 16px;
`

export const ModalWrapper = styled.div<{showModal: boolean}>`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`

export const ModalImg = styled.div`
  width: 49px;
  height:  49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 70px;
  left: 20px;
`

export const ModalContent = styled.div`
  display: flex;
  align-items: center;

  margin-top: 66px;
  margin-left: 20px;

  font-size: 15px;
  white-space: nowrap;

  > strong {
      margin-right: 5px;
  }

  > span, time {
      color: var(--gray);
  }

  > strong, span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }
`

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 15px;
    left: 15px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`
export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 2px;
  text-align: start;
  margin-left: 20px;
`;

export const Answer = styled.p`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 55px;
  display: flex;

  >span {
    color: var(--gray);
  }

  >a {
      margin-left: 4px;
      color: #1D9BF0;
  }

`

export const AnswerField = styled.div`
    text-align: start;
    margin-left: 20px;

    >textarea{
      /* border:1px solid white; */
      width: 480px;
      height: 80px;
      font-size: 20px;
      resize: none;
      outline: 0;
    }
`;

export const Avatar = styled.div`
  width: 49px;
  height:  49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 190px;
  left: 20px;
`
export const Icons = styled.div`
  display: flex;
  padding-right:250px ;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 50%; /* Mobile*/
  @media (min-width: 330px){
      width: 100%; /* Tablet + */
  }

  > div {
      cursor: pointer;
      
      &:hover{
        opacity: 0.7;
      }
  }
`
export const Submit = styled.span`
  width: 100px;
  height: 40px;
  padding: 10px;
  border: 1px solid #1D9BF0;
  border-radius: 20px;
  color: white;
  background: #1D9BF0;
  opacity: 50%;
  position: relative;
  left: 380px;
  bottom: 28px;
`;

export const Status = styled.button<StatusProps>`
  display: flex;
  align-items: center;
  padding-right: 30px;

  font-size: 14px;
  color: var(--gray);

  > svg {
      margin-right: 5px;
  }

  &:nth-child(1) {
    &, svg path {
        color: var(--gray);
    }
  }

  &:nth-child(2) {
      color: ${props => props.active ? 'var(--retweet)' :  'var(--gray)'};

      > svg path {
          fill: ${props => props.active ? 'var(--retweet)' :  'var(--gray)'};
      }
  }

   &:nth-child(3){
    color: ${props => props.active ? 'var(--like)' :  'var(--gray)'};

    > svg {
        fill: ${props => props.active ? 'var(--like)' :  'var(--gray)'};

    }
  }

  &:nth-child(4){
    color: var(--gray);

    >svg{
      fill: var(--gray);
    }
  }
`

export const iconCSS = css `
  width: 19px;
  height: 19px;
  
`;

export const ImageIcon = styled(Image)`${iconCSS}`;
export const GifIcon = styled(Gif)`${iconCSS}`;
export const DataIcon = styled(ClipboardList) `${iconCSS}`;
export const MapIcon = styled(Map)`${iconCSS}`;


