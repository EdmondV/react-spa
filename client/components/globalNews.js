import React, { PureComponent } from 'react';
import styled from 'styled-components';

import eye from '../images/eye-copy-2.svg';

const GlobalNewsWrapper = styled.div`
  height: calc(50% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GlobalNew = styled.div`
  font-family: HelveticaNeue;
  padding-bottom: 10px;
  border-bottom: 1px solid #d8d8d8;
  h3 {
    margin: 0 0 10px 0;
    font-size: 16px;
    font-weight: 500;
    color: #434343;
  }
  .footer {
    display: inline-block;
    span {
      margin-left: 5px;
      font-size: 11px;
      color: #d8d8d8;
    }
  }
  .time {
    margin-left: 27px;
    font-size: 11px;
    color: #d8d8d8;
  }
`;

class GlobalNews extends PureComponent {
  render() {
    const { global, className } = this.props;
    return (
      <GlobalNewsWrapper className={className}>
        {
          global.map(g => (
            <GlobalNew key={g.id}>
              <New text={g.text} views={g.views} time={g.time} />
            </GlobalNew>
          ))
        }
      </GlobalNewsWrapper>
    )
  }
}

const New = ({ text, views, time }) => (
  <div>
    <h3>{text}</h3>
    <div className='footer'>
      <img src={eye} alt='eye' />
      <span>{views}</span>
    </div>
    <span className='time'>{time}</span>
  </div>
)

export default GlobalNews;
