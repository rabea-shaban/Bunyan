import { Route, Routes } from 'react-router-dom';
import Footer from '../../components/Dashborad/Footer/Footer';
import Navbar from '../../components/Dashborad/Navbar/Navbar';
import Sidebar from '../../components/Dashborad/Sidebar/Sidebar';
import FormDashbord from '../../components/ui/FormDashbord/FormDashbord';
import TableDashbord from '../../components/ui/TableDashbord/TableDashbord';
import CMS from './CMS';
import Developers from './Developers';
import HomeDashbord from './HomeDashbord';
import Livechat from './Livechat';
import Projects from './Projects';
import Users from './Users';
import { useState } from 'react';
function Dashboard() {
    const [hasDraft, setHasDraft] = useState(false);

  return (
    <>
      <Navbar adminName="Rabea14" />
      <div className="d-flex">
        <Sidebar hasDraft={hasDraft} />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeDashbord />} />
            <Route path="User" element={<Users />}>
              <Route index element={<TableDashbord />} />
              <Route path="add" element={<FormDashbord setHasDraft={setHasDraft} />} />
            </Route>


            <Route path="Projects" element={<Projects />}>
              <Route index element={<TableDashbord />} />
              <Route path="add" element={<FormDashbord />} />
            </Route>
            <Route path="Developers" element={<Developers />}>
              <Route index element={<TableDashbord />} />
              <Route path="add" element={<FormDashbord />} />
            </Route>
            <Route path="CMS" element={<CMS />} />
            <Route path="Live-chat" element={<Livechat />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
