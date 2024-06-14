import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../layouts/Dashboard";
import Home from "../main pages/Home";
import Team from "../main pages/Team";
import Mission from "../main pages/Mission";
import Features from "../main pages/Features";
import Contact from "../main pages/Contact";
import Login from "../main pages/Login";
import Registration from "../main pages/Registration";
import Profile from "../dashboard pages/Profile";
import AddTask from "../dashboard pages/AddTask";
import AllTasks from "../dashboard pages/AllTasks";
import ToDo from "../dashboard pages/ToDo";
import NotFound from "../components/NotFound";
import UpdatedTask from "../dashboard pages/UpdatedTask";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/team',
                element: <Team></Team>
            },
            {
                path: '/mission',
                element: <Mission></Mission>
            },
            {
                path: '/features',
                element: <Features></Features>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/dashboard/profile",
                element: <Profile></Profile>
            },
            {
                path: "/dashboard/alltasks",
                element: <AllTasks></AllTasks>
            },
            {
                path: "/dashboard/todos",
                element: <ToDo></ToDo>
            },
            {
                path: "/dashboard/todos/:id",
                element: <UpdatedTask></UpdatedTask>,
                loader: async ({ params }) => {
                    return fetch(`https://tasktrackerserver.onrender.com/api/tasks/${params.id}`);
                  },
            },
            {
                path: "/dashboard/addtask",
                element: <AddTask></AddTask>
            },
            
        ]
    }
]);