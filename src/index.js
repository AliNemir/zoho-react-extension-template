import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
window.ZOHO.embeddedApp.on("PageLoad", function (data) {
  root.render(
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>
  );
});
window.ZOHO.embeddedApp.init();
