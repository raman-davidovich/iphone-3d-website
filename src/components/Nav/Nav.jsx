import GlobalSvgSelector from "../../assets/GlobalSvgSelector";
import { list } from "./constants";

function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <GlobalSvgSelector id="logo" />
          </li>
          {list.map((item) => {
            return (
              <li key={item}>
                <a className="link-styled">{item}</a>
              </li>
            );
          })}
          <li>
            <GlobalSvgSelector id="search" />
          </li>
          <li>
            <GlobalSvgSelector id="store" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
