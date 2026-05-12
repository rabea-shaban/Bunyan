import Status from '../../components/Dashborad/Status/Status';

const HomeDashbord = () => {
  // const statusCard = [
  //   { title: 'project', count: '120', icon: 'fa-mobile' },
  //   { title: 'project', count: '120', icon: 'fa-mobile' },
  //   { title: 'project', count: '120', icon: 'fa-mobile' },
  //   { title: 'project', count: '120', icon: 'fa-mobile' },
  //   { title: 'project', count: '120', icon: 'fa-mobile' },
  //   { title: 'project', count: '120', icon: 'fa-mobile' },

  // ];

  return (
    <div>
      <div className="container">
        <Status />
        {/* <div className="row mt-3 ">
          {statusCard.map((item, idx) => {
            return (
              <div key={idx} className="col-md-3">
                <div className="crd m-2 d-flex justify-content-between align-items-center p2 second-color rounded-1 py-5 px-2">
                  <div className="icon">
                    <i className={`fa-solid ${item.icon} fs-3`}></i>
                  </div>

                  <div>
                    <p className="fs-3">{item.count}</p>
                    <h5 className="fs-2">{item.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default HomeDashbord;
