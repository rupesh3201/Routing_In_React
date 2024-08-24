import reactDOM from "react-dom/client";
import Home  from "./home";
import About from "./about";
import Contact from "./contact";

const root = reactDOM.createRoot(document.getElementById('root'));
const currentpath = window.location.pathname;

if(currentpath == "/")
{
    root.render(<Home/>)
}
else if (currentpath == "/About")
{
    root.render(<Contact/>)

}
root.render(<div> <h1>pathname: {currentpath}</h1> </div>)
