import { NextPage } from 'next';
import { DashboardLayout } from '../../../components/layout/dashboard-layout/dashboard-layout';
import { DashboardProfile } from '../../../components/dashboardProfile/dashboardProfile';

const profile: NextPage = () => (
  <DashboardLayout>
    <DashboardProfile />
  </DashboardLayout>
);
export default profile;
