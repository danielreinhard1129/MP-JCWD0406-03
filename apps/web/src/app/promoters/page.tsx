'use client';
import DashboardCard from './components/DashboardCard';
import SideBar from './components/SideBar';

const DashboardPage = () => {
  return (
    <div className="md:flex">
      <SideBar />
      <DashboardCard />
    </div>
  );
};

export default DashboardPage;
