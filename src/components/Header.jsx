import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  /* background-color: red; */
  background-color: black;
  height: 80px;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  z-index: 3;
`;

const Logo = styled.a`
  /* background-color: white; */
  padding: 0;
  width: 8rem;
  max-height: 80px;
  display: inline-block;
  margin-top: 0px;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  /* background-color: green; */
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding-top: 16px;
  position: relative;
  margin-right: auto;
  margin-left: 30px;

  a {
    /* background-color: yellow; */
    padding: 0 12px;
    text-decoration: none;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      position: relative;
      top: 0.2em;
    }

    span {
      color: white;
      font-size: 1.2em;
      letter-spacing: 4px;
      line-height: 1.05;
      padding: 5px;
      white-space: nowrap;
      position: relative;
      /* background-color: grey; */

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        background-color: white;
        height: 2px;
        bottom: -8px;
        left: 0;
        transform: scaleX(0);
        transform-origin: right center;
        transition: transform 0.25s ease-out;
      }
    }
    &:hover {
      span::after {
        transform: scaleX(1);
        transform-origin: left center;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="images/logo.svg" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a>
          <img src="images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
    </Nav>
  );
};

export default Header;
