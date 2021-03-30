import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async';
import { HealthBar } from '../components/Healthbar';

interface DashboardProps {
  // props interface
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

function Dashboard(props: DashboardProps) {
  return (
    <DashboardContainer>
      <Helmet>
        <title>Dashboard | YourHPMana</title>
      </Helmet>
			<HealthBar />
    </DashboardContainer>
  )
}

export { Dashboard }
