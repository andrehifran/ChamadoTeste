import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; /* aqui importando o componente App do arquivo App.jsx para ser usado na renderização da aplicação React. */

/* Aqui é onde nós estamos renderizando a aplicação React. O React irá montar o componente App dentro do elemento com o id "root" no arquivo index.html. */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/* É aqui que nós estamos renderizando a aplicação React. O React irá montar o componente App dentro do elemento com o id "root" no arquivo index.html. */
