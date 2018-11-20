import React, { Component } from 'react';
import styled from 'styled-components';

import { createDate } from '../helpers/time';
import { importAll } from '../helpers/importAll';
import NewsCard from './newsCard';
import GlobalNews from './globalNews';

const assets = importAll(
  require.context('../assets', false, /\.(png|jpe?g|svg)$/),
  '../assets',
);

const ContentWrapper = styled.div`
  padding: 0;
  height: 40%;
  .row {
    margin-bottom: 20px;
    div:nth-child(1) {
      margin-right: 20px;
    }
    div:nth-child(2) {
      margin-left: 20px;
    }
  }
`;

const ContentBlock = styled.div`
  height: calc(100% - 62px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-between;
  align-content: stretch;

  .news:nth-child(1) {
    margin: 0 20px 20px 0;
    width: calc(70% - 20px);
  }
  .news:nth-child(2) {
    margin: 0 0 20px 20px;
    width: calc(30% - 20px);
  }
  .news:nth-child(3) {
    margin: 20px 20px 0 0;
    width: calc(50% - 20px);
  }
  .news:nth-child(4) {
    margin: 20px 0 0 20px;
    width: calc(50% - 20px);
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;

  flex-wrap: wrap;
  flex-direction: row;
  align-content: stretch;
  justify-content: space-between;
`;

const Headers = styled.div`
  width: ${({ width }) => width ? `calc(${width}% - 20px)` : 'calc(50% - 20px)'};
  display: flex;
  border-top: 3px solid black;
  height: 42px;

  align-items: flex-end;
  box-sizing: border-box;

  font-family: HelveticaNeue;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

class Content extends Component {
  render () {
    const { match, globalNews, news, page, className } = this.props;
    const newsInPage = 3;
    const content = news.slice(newsInPage * (page - 1), newsInPage * page);
    content.splice(1, 0, globalNews[page <= globalNews.length - 1 ? page - 1 : globalNews.length - 1]);
    if (content.length === 1) content.unshift({ id: 1 })
    return (
      <ContentWrapper className={className}>
        <FlexRow className='row'>
          <Headers width='70'>{createDate(new Date())}</Headers>
          <Headers width='30'>Главные новости</Headers>
        </FlexRow>
        <ContentBlock>
          {
            content.map((n, i) => {
              if (n.length) return <GlobalNews className='news' key={'global' + i} global={n} />
              return <NewsCard className='news' key={n.id} content={n}></NewsCard>
            })
          }
        </ContentBlock>
      </ContentWrapper>
    )
  }
}

export default Content;
