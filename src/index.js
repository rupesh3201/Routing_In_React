import reactDOM from "react-dom/client";
import Home  from "./home";
import About from "./about";
import Contact from "./contact";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById(`root`));
const currentpath = window.location.pathname;

if(currentpath == "/")
{
    root.render(<Home/>)
}
else if (currentpath == "/Contact")
{
    root.render(<Contact/>)

}
else if (currentpath == "/About")
{
        root.render(<About/>)
}
else{
    root.render(
        <h1>404 NOT FOUND </h1>
    )
}
root.render(<div> <h1>pathname: {currentpath}</h1> </div>)
