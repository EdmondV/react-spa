import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  padding: 0 150px;
  margin: 15px 0;

  display: flex;
  flex-direction:row;
  justify-content: space-between;
  a {
    margin-left: 10px;
    text-decoration: none;
  }
`;

class Pagination extends Component {
  render () {
    return (
      <PaginationWrapper>
        <span>More news</span>
        <div>
          <Link to={`/1`}>1</Link>
          <Link to={`/2`}>2</Link>
          <Link to={`/3`}>3</Link>
        </div>
      </PaginationWrapper>
    )
  }
}

function mapStateToProps (state) {
  // const { sortObj, weather, cityIds } = state.req
  return {}
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
