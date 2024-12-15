import style from "./NavBar.module.css";

const NavBar = ({ searchMenuFood }) => {
  return (
    <div className={style.navigation}>
      <div>
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className={style.search}>
        <input
          onChange={searchMenuFood}
          placeholder="Search food"
        />
      </div>
    </div>
  );
};

export default NavBar;
