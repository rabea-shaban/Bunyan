import Logo from "../../../assets/Logo.png";
import adminAvtart from "../../../assets/admin.png";
import NavStyle from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className={`${NavStyle.logo}`}>
            <img src={Logo} alt="" />
          </div>

          <div
            className={`${NavStyle.adminSection} d-flex align-items-center `}
          >
            <div className="Notifications">
              <i
                className={`${NavStyle.notificationIcon} fa-solid fa-bell`}
              ></i>
              <span>0</span>
            </div>

            <div class="dropdown">
              <div data-bs-toggle="dropdown" aria-expanded="false">
                <img
                  className={`${NavStyle.adminAvtart}`}
                  src={adminAvtart}
                  alt=""
                />
              </div>

              <ul class="dropdown-menu overflow-hidden">
                <li>
                  <button class="dropdown-item" type="button">
                    Profile
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Change Password
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    LogOut{" "}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
