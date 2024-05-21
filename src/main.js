import "./style.css";
import dh from "./logodhs.png"

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://www.digitalhouse.com/ar/productos/escuelas">
      <h1>Actividades Tres Workspaces</h1>
      <img src="${dh}">
      <p>By <span>Digital House Schools</span></p>
      <button onClick="src/pages/frontPrimerPaso/index.html">3 workspaces</button>
    </a>
  </div>
`;

