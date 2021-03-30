import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100vw;
  text-align: center;
  z-index: 1;
  background: white;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px auto;
  padding: 0px 24px;
  height: 76px;
  max-width: 1136px;
  background: white;

  @media screen and (max-width: 1130px) {
    padding-right: 8px;
  }
  @media screen and (max-width: ${p => p.theme.breakpoints.sm}) {
    height: 56px;
    border-bottom: solid 1px ${p => p.theme.borderColor};
  }
`
const linkStyle = ({ theme }: { theme: any }) => (`
  color: ${theme.palette.waterloo};
  transition: color .1s;
  text-decoration: none;
  &:hover {
   cursor: pointer;
   color: ${theme.colors.brand};
  }
  &:active {
   color: ${theme.colors.brand};
  }

  @media screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 19px;
    padding: 8px;
  }
`)

export const Link = styled(NavLink)`${props => linkStyle(props)}`
export const ExternalLink = styled.a`${props => linkStyle(props)}`
export const DesktopLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1130px) {
    display: none;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  margin: 0px 34px 0px 0px;
  align-items: center;

  @media screen and (max-width: ${p => p.theme.breakpoints.md}) {
    margin: 6px auto;
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`
export const WalletConnectContainer = styled.div`
  ${p => p.theme.helpers.flexCenter}
  padding: 12px 12px 24px;
  background: white;
`

export const MobileMenuButton = styled.button`
  display: none;
  flex-shrink: 0;

  @media screen and (max-width: 1130px) {
    ${p => p.theme.helpers.flexCenter}
    width: 50px;
    height: 36px;
    background: none;
    border: none !important;
    outline: none !important;
    cursor: pointer;

    &:active {
      border: none;
      outline: none;
    }
  }
`
export const MobileMenuWrapper = styled.div<{isDisplayed: boolean}>`
  height: ${ ({ isDisplayed }) => isDisplayed ? '48px' : '0px' };
  transition: height .15s;
  overflow: hidden;

  @media screen and (max-width: ${p => p.theme.breakpoints.md}) {
    height: ${ ({ isDisplayed }) => isDisplayed ? 'calc(100vh - 88px)' : '0px' };
    transition: height .5s;
    overflow-y: scroll;
  }
`

export const MobileMenu = styled.div`
  display: none;
  top: 88px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 24px;
  background: rgba(255,255,255,.9);

  @media screen and (max-width: 1130px) {
    display: flex;
    background: #F8F9FB;
    padding: 12px 24px;
  }
  @media screen and (max-width: ${p => p.theme.breakpoints.md}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(100vh - 88px);
    width: calc(100vw - 48px);
    background: white;
  }
`
