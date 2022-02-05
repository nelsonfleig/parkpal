import { NextPage } from 'next';
import React from 'react';
import { DashboardInformation } from '../../components/dashboardInformation/dashboardInformation';
import { DashboardLayout } from '../../components/layout/dashboard-layout/dashboard-layout';
import {} from '../../graphql/__generated__';

const DashboardHome: NextPage = () => (
  <DashboardLayout>
    <DashboardInformation />
  </DashboardLayout>
);
export default DashboardHome;
