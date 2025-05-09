import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: tomato;
  padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <SideBar />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
