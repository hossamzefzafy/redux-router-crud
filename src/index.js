import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";

import AddPost from "./components/pages/AddPost";

import Edit from "./components/pages/Edit";
import Details from "./components/pages/Details";
import Index from "./components/pages/Index";
import ErrorPage from "./components/pages/ErrorPage";
import { Provider } from "react-redux";
import store from "./components/state/Index"

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  
  children: [
    {
      index: true,
      element: <Index/>,
    },
    {
      path: "post",
      element: <Index/>,
    },
    {
      path: "add",
      element: <AddPost/>,
    },
    {
      path: "post/:id/edit",
      element: <Edit/>,
    },
    {
      path: "post/:id",
      element: <Details/>,
      loader: ({
        params
        })=>{
       if(isNaN(params.id)){
        throw new Response("Bad Request", { statusText:'Please enter a valid ID',status: 400 }
         
        );
       }
      }
    }
  ],
}]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
 <RouterProvider router={router}/>
  </Provider>
 
 
);
