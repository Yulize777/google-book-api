import React, { Suspense} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {DetailCard, Main} from "./lazyPages";

const Routing = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Suspense fallback={'loading'}>
                <Main/>
            </Suspense>
        },
        {
            path: "/:id",
            element:
            <Suspense fallback={'loading'}>
                <DetailCard/>
            </Suspense>
        }
    ])
    return <RouterProvider router={routes}/>
};

export default Routing;