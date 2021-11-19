import React from 'react';
import { Link } from 'react-router-dom';
import { style } from './HeaderStyle';

const Header = () => (
  <HeaderWrap>
    <HeaderContent>
      <Logo>
        <LogoLink to="/">
          <LogoImg width="192" height="192" viewBox="0 0 192 192" fill="none">
            <rect width="192" height="192" fill="currentColor" rx="24"></rect>
            <path
              d="M49 65.48V57.92C53.8 56.36 59.44 54.68 65.92 52.88C72.4 50.96 76.78 50 79.06 50C84.1 50 87.1 52.4 88.06 57.2L99.76 123.62C103.48 118.7 106.54 114.56 108.94 111.2C112.66 105.92 116.08 99.86 119.2 93.02C122.44 86.18 124.06 80.06 124.06 74.66C124.06 71.42 123.16 68.84 121.36 66.92C119.68 64.88 116.5 62.3 111.82 59.18C116.62 53.06 122.62 50 129.82 50C133.66 50 136.84 51.14 139.36 53.42C142 55.7 143.32 59.06 143.32 63.5C143.32 70.94 140.2 80.24 133.96 91.4C127.84 102.44 116.02 119.06 98.5 141.26L80.68 142.52L67 65.48H49Z"
              fill="white"
            ></path>
          </LogoImg>
        </LogoLink>
      </Logo>
      <RightContent>
        <Search>
          <svg width="18" height="18" viewBox="0 0 17 17">
            <path
              fill-rule="evenodd"
              d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Search>
        <WriteBtn to="/write">새 글 작성</WriteBtn>
        <Profile>
          <ProfileImg src="/avatar.png" alt="profile" />
          <Dropdown
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10l5 5 5-5z"></path>
          </Dropdown>
        </Profile>
      </RightContent>
    </HeaderContent>
  </HeaderWrap>
);

export default Header;

const {
  HeaderWrap,
  HeaderContent,
  Logo,
  LogoImg,
  RightContent,
  Search,
  WriteBtn,
  Profile,
  ProfileImg,
  Dropdown,
  LogoLink,
} = style;
