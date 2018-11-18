import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  padding: 20px 150px;
  background-color: #000000;
`;

class Footer extends Component {
  render () {
    return (
      <FooterWrapper>
        
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
