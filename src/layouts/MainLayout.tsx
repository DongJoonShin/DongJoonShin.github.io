import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Header = styled.header`
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.xl};
  background-color: #fff;
  box-shadow: ${(props) => props.theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

const NavMenu = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    gap: ${(props) => props.theme.spacing.md};
  }
`;

const NavItem = styled.li<{ active: boolean }>`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${(props) => (props.active ? '100%' : '0')};
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
    transition: ${(props) => props.theme.transitions.default};
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 500;
  padding: ${(props) => props.theme.spacing.xs};
`;

const Main = styled.main`
  min-height: calc(100vh - 64px - 80px);
  padding: ${(props) => props.theme.spacing.xl};
`;

const Footer = styled.footer`
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing.xl};
  background-color: #fff;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  text-align: center;
  color: ${(props) => props.theme.colors.textLight};
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Header>
        <Nav>
          <Logo to="/">DongJoon Shin</Logo>
          <NavMenu>
            <NavItem active={location.pathname === '/'}>
              <NavLink to="/">홈</NavLink>
            </NavItem>
            <NavItem active={location.pathname.includes('/portfolio')}>
              <NavLink to="/portfolio">포트폴리오</NavLink>
            </NavItem>
          </NavMenu>
        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>© {new Date().getFullYear()} DongJoon Shin. All rights reserved.</p>
      </Footer>
    </>
  );
};

export default MainLayout;
