import style from './sidebar.module.css';

const Sidebar = () => {
  const links = [
    { icon: 'fa-chart-line', title: 'Status' },
    { icon: 'fa-users', title: 'User Management' },
    { icon: 'fa-diagram-project', title: 'Projects Management' },
    { icon: 'fa-code', title: 'Developers Management' },
    { icon: 'fa-globe', title: 'Website CMS' },
    { icon: 'fa-comments', title: 'Live Chat' },
  ];

  return (
    <aside className={`min-vh-100 py-4 ${style.Sidebar}`}>
      <div className="fw-semibold px-3 mb-4 fs-4 ">Dashboard</div>

      <nav>
        {links.map((item, index) => {
          return (
            <div
              key={index}
              className={`${style.navItem} d-flex align-items-center gap-2 px-3 py-3`}
            >
              <i className={`fa-solid ${item.icon} fs-3`}></i>
              <span className={style.title}>{item.title}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
