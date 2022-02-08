import { NextPage } from 'next';
import React from 'react';
import { DashboardLayout } from '../../../components/layout/dashboard-layout/dashboard-layout';
import { DashboardComplains } from '../../../components/dashboardComplaints/dashboardComplaints';

const complaints: NextPage = () => (
  <DashboardLayout>
    <DashboardComplains />
  </DashboardLayout>
);

export default complaints;
