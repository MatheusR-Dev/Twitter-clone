import React from 'react';
import StickyBox from 'react-sticky-box'

import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import List from '../List'

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWrapper>

          <StickyBox>
          <Body>
              <List 
                title="Talvez você curta"
                elements={[
                    <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero"/>,
                    <FollowSuggestion name="Luke Morales" nickname="@lukemorales"/>,
                    <FollowSuggestion name="Camila Magalhães" nickname="@camilaamgl"/>
                ]}
              />
              <List 
                title="Talvez você curta"
                elements={[
                    <News/>,
                    <News/>,
                    <News/>
                ]}
              />
          </Body>
          </StickyBox>
          
      </Container>
  );
}

export default SideBar;