import React from 'react';
import { Container } from '../Main/styles';
import Feed from '../Feed';

import { Banner, Avatar, LocationIcon, CakeIcon, Followage, ProfileData, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>
          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>

              <h1>Matheus Rocha</h1>
              <h2>@MatheusRocha</h2>

              <p>
                  Developer at <a href='https://hexalab.com.br'>@HexaLab</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      São Paulo, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido em 01/06/2002
                  </li>
              </ul>

              <Followage>
                  <span>
                      Seguindo <strong>94</strong>
                  </span>
                  <span>
                    <strong>672 </strong> Seguidores 
                  </span>
              </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;