import React, { Component } from 'react'
import styled from 'styled-components';

import { importAll } from '../helpers/importAll';
import { createDate } from '../helpers/time';
import Modal from '../common/modal';

const assets = importAll(
  require.context('../assets', false, /\.(png|jpe?g|svg)$/),
  '../assets',
);

const HeaderWrapper = styled.div`
  width: 100%;
  height: 40%;
  position: relative;

  background-image: url(${assets['./bitmap_2@3x.jpg']});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CentralBlock = styled.div`
  width: auto;
  margin-bottom: 5%;
  position: relative;

  flex-direction: column;
  display: flex;
  align-items: center;

  color: white;
  h1 {
    font-family: HelveticaNeue;
    font-size: 36px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    margin: 0 0 5px 0;
  }
  h4 {
    opacity: 0.81;
    font-family: HelveticaNeue;
    font-size: 11px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    margin: 0;
  }
  .add-news {
    padding-bottom: 20px;
    position: relative;
    width: 189px;
    height: 3px;
    object-fit: contain;
    font-family: HelveticaNeue;
    font-size: 11px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    margin-top: 100px;
    cursor: pointer;
  }
  .add-news > span {
    position: absolute;
    right: 0px;
  }
`;

const AddNews = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid white;
  opacity: 1;
  transition: opacity 200ms;
`;

const Overlay = styled.div`
  content: '';
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: 0.6;
  filter: blur(10px);
  left: 0;
  top: 0;
  z-index: 0;
  display: ${({ show }) => show ? 'block' : 'none'};
`;

class Header extends Component {
  render() {
    const { toggleModal, isModalOpen, addNews } = this.props;
    return (
      <HeaderWrapper className='header-container'>
        <CentralBlock>
          <h1>МИРОВЫЕ НОВОСТИ</h1>
          <h4>{createDate(new Date()).toUpperCase()}</h4>
          <AddNews className='add-news' onClick={toggleModal}>ДОБАВИТЬ НОВОСТЬ<span>+</span></AddNews>
        </CentralBlock>
        <Modal show={isModalOpen} submit={addNews} toggleModal={toggleModal} />
        <Overlay id='overlay' show={isModalOpen} />
      </HeaderWrapper>
    )
  }
}

export default Header;
