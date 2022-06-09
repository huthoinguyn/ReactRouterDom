import { Link } from "react-router-dom";
import "./Notfound.css";
function Notfound() {
  return (
    <div class="container">
      <div class="error404page">
        <div class="newcharacter404">
          <div class="chair404"></div>
          <div class="leftshoe404"></div>
          <div class="rightshoe404"></div>
          <div class="legs404"></div>
          <div class="torso404">
            <div class="body404"></div>
            <div class="leftarm404"></div>
            <div class="rightarm404"></div>
            <div class="head404">
              <div class="eyes404"></div>
            </div>
          </div>
          <div class="laptop404"></div>
        </div>
      </div>
      <div className="fixed translate-[-50% -50%] flex flex-col items-center">
        <h3 className="text-4xl text-gray-800 ">Trang này tui đang code!!!</h3>
        <Link
          className="text-gray-800 text-2xl mt-4 p-4 border-2 w-fit hover:shadow-lg"
          to="../../"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default Notfound;
