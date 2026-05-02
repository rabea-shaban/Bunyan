import Footer from '../../components/Dashborad/Footer/Footer';
import Navbar from '../../components/Dashborad/Navbar/Navbar';
import Sidebar from '../../components/Dashborad/Sidebar/Sidebar';

function Dashboard() {
  return (
    <>
      <Navbar adminName="Rabea14" />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1">this Main Dashbord</main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
