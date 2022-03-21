import Home from "../page/Home";
import Error404 from "../page/Error404";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        path: "/",
        exact: true,
        page: Home
    },
    {
        path: "*",
        page: Error404
    }
];