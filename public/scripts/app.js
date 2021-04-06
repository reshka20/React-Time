"use strict";

var root = document.getElementById("root");

var saat = function saat() {
  var realtime = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Saat:", new Date().toLocaleTimeString()));
  ReactDOM.render(realtime, root);
};

setInterval(saat, 1000); // export default class User extends Component {
//     <h2>Salam</h2>
// }
