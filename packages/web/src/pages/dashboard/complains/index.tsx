import { NextPage } from 'next';
import React from 'react';
import { DashboardLayout } from '../../../components/layout/dashboard-layout/dashboard-layout';
import { DashboardComplains } from '../../../components/dashboardComplains/dashboardComplains';

const complains: NextPage = () => (
  <DashboardLayout>
    <DashboardComplains />
  </DashboardLayout>
);

export default complains;
