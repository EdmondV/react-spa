import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import '../style/main.css'

const assets = importAll(
  require.context('../assets', false, /\.(png|jpe?g|svg)$/),
  '../assets',
);

function importAll(r, path) {
  const images = {};
  r.keys().map(item => (images[item.replace(path, '')] = r(item)));
  return images;
}

const Header = styled.div`
  width: 100%;
  height: 362px;

  background-image: url(${assets['./bitmap_2.jpg']});
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CentralBlock = styled.div`
  width: auto;
  margin-bottom: 5%;

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
  opacity: ${({ show }) => show ? 1 : 0};
  transition: opacity 200ms;
`;

const Modal = styled.div`
  width: 400px;
  height: 520px;
  position: absolute;

  opacity: ${({ show }) => show ? 1 : 0};
  transition: opacity 200ms;
`;

const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function createDate(date) {
  const month = months[date.getMonth()];
  const day = days[date.getDay()];

  return `${date.getDate()} ${month} ${date.getFullYear()}, ${day}, ${date.getHours()}:${date.getMinutes()}`;
}

class Main extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };
  }
  openModal () {

  }
  render () {
    const date = new Date();
    const { isModalOpen } = this.state;
    return (
      <Header>
        <CentralBlock>
          <h1>МИРОВЫЕ НОВОСТИ</h1>
          <h4>{createDate(date).toUpperCase()}</h4>
          <AddNews className='add-news' show={!isModalOpen} onClick={this.openModal}>ДОБАВИТЬ НОВОСТЬ<span>+</span></AddNews>
          <Modal show={isModalOpen} />
        </CentralBlock>
      </Header>
    )
  }
}

function mapStateToProps (state) {
  // const { sortObj, weather, cityIds } = state.req
  return {}
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
