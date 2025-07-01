import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Userdetails from "./Userdetails";
import Browse from "../components/Browse";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Userdetails />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
