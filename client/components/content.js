import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 0 150px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
`;

const NewsCard = styled.div`
  width: 50%;
  height: 80px;
  padding: 5px;
  border: 1px solid black;

  display: flex;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Headers = styled.div`
  
`;

class Content extends Component {
  render () {
    const { match } = this.props;
    console.log(match, 'content');
    return (
      <ContentWrapper>
        <FlexRow>
          <NewsCard />
          <NewsCard />
        </FlexRow>
        <FlexRow>
          <NewsCard />
          <NewsCard />
        </FlexRow>
      </ContentWrapper>
    )
  }
}

function mapStateToProps (state) {
  // const { sortObj, weather, cityIds } = state.req
  return {}
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
