import { NextPage } from 'next';
import React from 'react';
import { DashboardLayout } from '../../components/layout/dashboard-layout/dashboard-layout';
import {} from '../../graphql/__generated__';

const DashboardHome: NextPage = () => (
  // const { data, loading } =  ();

  <DashboardLayout>
    <h1>HELLO FROM LAYOUT</h1>
  </DashboardLayout>
);
export default DashboardHome;
