import { NextPage } from 'next';
import { DashboardLayout } from '../../../components/layout/dashboard-layout/dashboard-layout';
import DashboardCalendar from '../../../components/layout/dashboardCalendar/dashboardCalendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const profile: NextPage = () => (
  <DashboardLayout>
    <DashboardCalendar />
  </DashboardLayout>
);
export default profile;
