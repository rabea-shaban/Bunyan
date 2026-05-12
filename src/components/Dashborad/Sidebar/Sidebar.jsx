import { NavLink } from 'react-router-dom';
import style from './sidebar.module.css';

const Sidebar = ({ hasDraft }) => {
  const links = [
    { icon: 'fa-chart-line', title: 'Status', link: '/' },
    { icon: 'fa-users', title: 'Users Management', link: '/User' },
    { icon: 'fa-diagram-project', title: 'Projects Management', link: '/Projects' },
    { icon: 'fa-code', title: 'Developers Management', link: '/Developers' },
    { icon: 'fa-globe', title: 'Website CMS', link: '/CMS' },
    { icon: 'fa-comments', title: 'Live Chat', link: '/Live-chat' },
  ];

  return (
    <aside className={`min-vh-100 py-4 ${style.Sidebar}`}>
      <div className="fw-semibold px-3 mb-4 fs-4">Dashboard</div>

      <nav className="d-flex flex-column gap-2">
        {links.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={`
        ${style.navItem}
        d-flex
        align-items-center
        gap-3
        px-3
        py-3
        text-decoration-none
        text-white
      `}
          >
            <i className={`fa-solid ${item.icon} fs-5`}></i>

            {item.title}

            {item.title === 'Users Management' && hasDraft && (
              <span className="draft-badge">Draft</span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
