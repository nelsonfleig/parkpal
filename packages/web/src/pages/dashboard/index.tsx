import { NextPage } from 'next';
import React from 'react';
import { DashboardSidebar } from '../../components/layout/dashboardSidebar';
import { NavBar } from '../../components/layout/navbar';
import {} from '../../graphql/__generated__';

const dashboard: NextPage = () => (
  // const { data, loading } =  ();

  <div>
    <NavBar />
    <DashboardSidebar />
  </div>
);
export default dashboard;
