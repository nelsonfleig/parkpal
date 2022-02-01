import { NextPage } from 'next';
import { DashboardSidebar } from '../../components/layout/dashboardSidebar';
import { NavBar } from '../../components/layout/navbar';

const profile: NextPage = () => (
  <div>
    <NavBar />
    <DashboardSidebar />
  </div>
);
export default profile;
