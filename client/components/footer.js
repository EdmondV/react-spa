import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import icon from '../assets/bitmap@3x.jpg'

const FooterWrapper = styled.div`
  padding: 78px 0 41px;
  background-color: #000000;
  box-sizing: border-box;
  flex-direction: column;
  .second {
    padding-top: 78px;
  }
  .rss {
    word-spacing: 6px;
  }
`;

const FooterRaw = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .search {
    width: 440px;
    color: #ffffff;
  }
  img {
    max-height: 28px;
    border-radius: 7px;
  }
  div {
    font-family: HelveticaNeue;
    font-size: 11px;
    font-weight: 500;
    color: #ffffff;
  }
`;

const Search = styled.div`
  padding-bottom: 14px;
  border-bottom: 1px solid #d8d8d8;
  transition: opacity 200ms;
`;

class Footer extends Component {
  render () {
    return (
      <FooterWrapper className={this.props.className}>
        <FooterRaw>
          <Search className='search' onClick={this.toggleModal} contatable>Поиск</Search>
          <img src={icon} alt='icon' className='apple-icon' />
        </FooterRaw>
        <FooterRaw className='second'>
          <div className='rss'>Редакция  Реклама  Пресс-релизы  Техподдержка  Спецпроекты  Вакансии  RSS</div>
          <div>© 1999–2018 ООО «Мировые новости»</div>
        </FooterRaw>
      </FooterWrapper>
    )
  }
}

function mapStateToProps (state) {
  // const { sortObj, weather, cityIds } = state.req
  return {}
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
