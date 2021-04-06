
const root = document.getElementById("root");

var saat = () =>{

    var realtime =(
        <div>
            <h1>Saat:{new Date().toLocaleTimeString()}</h1>
            {/* <User/> */}
        </div>
    );
    ReactDOM.render(realtime, root);
}

setInterval(saat, 1000)

// export default class User extends Component {
//     <h2>Salam</h2>
// }