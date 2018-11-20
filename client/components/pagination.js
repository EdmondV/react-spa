import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  padding: 0;
  margin: 30px 0;

  display: flex;
  flex-direction:row;
  justify-content: space-between;
  a {
    margin-left: 43px;
    text-decoration: none;
  }
  span {
    font-family: HelveticaNeue;
    font-size: 16px;
    font-weight: 500;
    color: #000000;
  }
`;

class Pagination extends PureComponent {
  renderLinks(news) {
    const quantity = Math.ceil(news.length / 3);

    if (quantity === 1) return null;

    const links = [];
    for (let i = 1; i <= quantity; i++) {
      links.push(<Link key={'link' + i} to={`/?page=${i}`}>{i}</Link>);
    }
    return links;
  }
  render () {
    return (
      <PaginationWrapper className={this.props.className}>
        <span>Больше новостей</span>
        <div>
          {this.renderLinks(this.props.news)}
        </div>
      </PaginationWrapper>
    )
  }
}

export default Pagination;
