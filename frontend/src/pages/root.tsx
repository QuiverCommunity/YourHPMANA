import * as React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Providers } from '../providers'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  DASHBOARD,
} from '../constants'

function Root(props: any) {
  // flag for maintenance mode
  // could also read this from an env variable
  const maintenanceMode = false

  return (
    <BrowserRouter>
      <Providers>
        <RootContainer>
          <Switch>
            {
              maintenanceMode &&
              <Route>
                {/* {MAINTENANCE.component} */}
              </Route>
            }
            { /* app routing */ }
            <Route path={DASHBOARD.path}>
              {DASHBOARD.component}
            </Route>
            <Redirect exact from="/" to={DASHBOARD.path} />
          </Switch>
        </RootContainer>
      </Providers>
    </BrowserRouter>
  )
}

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 24px 24px 0px;
  max-width: 1136px;

  @media screen and (max-width: ${p => p.theme.breakpoints.md}) {
    padding: 24px;
  }
  @media screen and (max-width: ${p => p.theme.breakpoints.sm}) {
    padding: 0px 16px;
  }
`

export { Root }
