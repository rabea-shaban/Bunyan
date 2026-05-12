import CardStatus from '../../ui/cardStatus/cardStatus';

const Status = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col -12 col-md-3 ">
            <CardStatus counter={100} title={'Project'} icon="fa-building" />
          </div>
          <div className="col -12 col-md-3 ">
            <CardStatus counter={100} title={'Project'} icon="fa-house" />
          </div>
          <div className="col -12 col-md-3 ">
            <CardStatus counter={100} title={'Project'} icon="fa-building" />
          </div>
          <div className="col -12 col-md-3 ">
            <CardStatus counter={100} title={'Project'} icon="fa-building" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
