import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../common/button';

const NavBarWrapper = styled.div`
  padding: 0;
  margin: 23px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 11px;
`;

const types = ['Все', 'Политика', 'Спорт', 'Происшествия', 'Наука', 'Бизнес'];

const NavBar = ({ toggleCategory, selectedCategory, className }) => (
  <NavBarWrapper className={className}>
    {
      types.map((t, i) => <Button onClick={() => toggleCategory(t)} key={t} active={selectedCategory === t}>{t}</Button>)
    }
  </NavBarWrapper>
)

export default NavBar;
