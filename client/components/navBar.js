import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../common/button';

const NavBarWrapper = styled.div`
  padding: 0 150px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 11px;
`;

const types = ['Все', 'Политика', 'Спорт', 'Происшествия', 'Наука', 'Бизнес'];

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }
  render () {
    return (
      <NavBarWrapper>
        {
          types.map((t, i) => {
            <Button
              key={t}
              setActive={() => this.setState({ index: i })}
              active={this.state.index === i}
            >
              {t}
            </Button>
          })
        }
      </NavBarWrapper>
    )
  }
}

function mapStateToProps (state) {
  // const { sortObj, weather, cityIds } = state.req
  return {}
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
