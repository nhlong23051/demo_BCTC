import { Route } from "react-router-dom";
import { lazy } from "react";

let id: number = 0
const routes = [
    {
        path: "",
        element: "../Component",
        nested: [
            { path: "", element: lazy(() => import("../Component/body")) },
        ]
    },
];

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                >
                    {route.nested.map((item) => {
                        return (
                            <Route
                                key={item.path}
                                path={item.path}
                                element={<item.element />}
                            />
                        )
                    })}
                </Route>
            )
        } else {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            )
        }
    })
};



export default renderRoutes;