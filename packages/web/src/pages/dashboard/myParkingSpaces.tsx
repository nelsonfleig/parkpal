import { NextPage } from 'next';
import React from 'react';
import { DashboardSidebar } from '../../components/layout/dashboard-layout/dashboardSidebar';
import { NavBar } from '../../components/layout/dashboard-layout/navbar';

const nyParkingSpaces: NextPage = () => (
  // const { data, loading } =  ();

  <div>
    <NavBar />
    <DashboardSidebar />
  </div>
);
export default nyParkingSpaces;
