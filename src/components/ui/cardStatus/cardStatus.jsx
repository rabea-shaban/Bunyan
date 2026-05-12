import style from './cardStatus.module.css';
const CardStatus = ({ title, counter, icon }) => {
  return (
    <>
      <div className={`${style.cardStatus} align-items-center d-flex`}>
        <div className={`${style.icon} w-100 d-flex justify-content-center align-items-center`}>
          <i class={`fa-solid ${icon} `}></i>
        </div>

        <div className={`w-100 d-flex flex-column align-items-center gap-2 ${style.info}`}>
          <span className={style.counter}>{counter}</span>
          <span className={style.title}>{title}</span>
        </div>
      </div>
    </>
  );
};

export default CardStatus;
