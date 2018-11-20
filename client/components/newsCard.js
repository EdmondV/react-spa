import React, { PureComponent } from 'react';
import styled from 'styled-components';

import share from '../images/share.svg';

const NewsCardWrapper = styled.div`
  height: calc(50% - 20px);
  padding: 20px;
  background-image: url(${({ src }) => src});
  background-position: right;
  background-size: cover;
  box-sizing: border-box;

  display: flex;
`;

const NewWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-family: HelveticaNeue;
  color: #ffffff;
  .news-header {
    display: flex;
    justify-content: space-between;
  }
  .news-footer {
    display: flex;
    flex-direction: column;
    .time {
      opacity: 0.8;
      margin-bottom: 10px;
      font-size: 11px;
      font-weight: 300;
    }
    .text {
      font-size: 16px;
      font-weight: 500;
    }
  }
  button {
    object-fit: contain;
    height: 24px;
    border-radius: 2px;
    background-color: ${({ bgColor }) => bgColor};
    color: #ffffff;
    font-family: HelveticaNeue;
    font-size: 11px;
    font-weight: 500;
    outline: none;
    border: 0;
    cursor: pointer;
  }
`;

function selectColor(category) {
  switch (category) {
    case 'Спорт':
      return '#ff5050';
      break;
    case 'Политика':
      return '#f9621e';
      break;
    default:
      return '#ff5050';
  }
}

class NewsCard extends PureComponent {
  render() {
    const { content, className } = this.props;
    return (
      <NewsCardWrapper src={content.src} className={className}>
        <New
          category={content.category}
          name={content.name}
          src={content.src}
          text={content.text}
          time={content.time}
        />
      </NewsCardWrapper>
    )
  }
}

const New = ({ category, name, src, text, time }) => (
  <NewWrapper bgColor={selectColor(category)}>
    <div className='news-header'>
      {category && <button>{category}</button>}
      <img src={share} alt='share' />
    </div>
    <div className='news-footer'>
      <span className='time'>{time}</span>
      <span className='text'>{text}</span>
    </div>
  </NewWrapper>
)

export default NewsCard;
