import { NextPage } from 'next';
import React from 'react';
import { DashboardSidebar } from '../../components/layout/dashboardSidebar';
import { NavBar } from '../../components/layout/navbar';

const dashboard: NextPage = () => (
  <div>
    <NavBar />
    <DashboardSidebar />
  </div>
);

export default dashboard;
