import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/404/Error";
import HorizontalSlider from "../sliders/horizontal slider/HorizontalSlider";
import VarticalSlider from "../sliders/vartical slider/VarticalSlider";
import Cart from "../components/cart/Cart";

export const route = createBrowserRouter ([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <VarticalSlider/>
            },
            {
                path: '/horizontal-slider',
                element: <HorizontalSlider/>
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ]
    }
])