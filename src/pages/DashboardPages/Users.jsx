import { Outlet } from 'react-router-dom';

const Users = () => {
  return (
    <section className="py-4 w-100">
      <Outlet />
    </section>
  );
};

export default Users;
