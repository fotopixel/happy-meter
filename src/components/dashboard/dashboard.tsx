import React, { FC } from 'react';
import styled from 'styled-components';

const StyledDashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 *
 *
 * @param param0
 */
export const Dashboard: FC = () => (
  <StyledDashboard>
    <h1>React TS FC Component</h1>
    <div>List</div>
  </StyledDashboard>
);

export default Dashboard;
