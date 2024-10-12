import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLoyout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLoyout>
      <Header />
      <Sidebar />

      <Main>
        {/* main - щоб мати всі сторінки в одинаковому стилі */}
        {/* Outlet - для дочірних елементів з іншою Url */}
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLoyout>
  );
}

export default AppLayout;
