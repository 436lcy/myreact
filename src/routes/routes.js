
import About from "../pages/About";
import Down from "../pages/Down";
import LazyCat from "../pages/LazyCat";
import Provider from "../pages/Provider";
import Store from "../pages/Store";
import Raiders from "../pages/Raiders";
export default [
    {
        path:'/',
        element:<LazyCat/>
    },
    {
        path:'down',
        element:<Down/>
    },
    {
        path:'store',
        element:<Store/>
    },
    {
        path:'provider',
        element:<Provider/>
    },
    {
        path:'raiders',
        element:<Raiders/>
    },
    {
        path:'about',
        element:<About/>
    }
]