import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
`;

export const DashboardContent = styled.div`
  display: grid;
  height: calc(100% - 88px);
  grid-template-columns: 115px 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  position: relative;
`;

export const DashboardBody = styled.main`
  flex-grow: 1;
  background: blue;
  min-height: 100%;
  height: 100%;
  overflow-y: auto;
`;
