import style from "./AppName.module.css";
function AppName({ name, profess }) {
  return (
    <h1 className={style.appHeading}>
      Todo App {name} <br />
      {profess}
    </h1>
  );
}

export default AppName;
