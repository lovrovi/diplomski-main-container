import { createBrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Homepage from "../components/Homepage/Homepage";
import CreationForm from "creationForm/CreationForm";
import Listing from "listing/Listing";
import Dashboard from "dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        index: true,
        element: (
          <Box sx={{ paddingTop: 8 }}>
            <Dashboard />
          </Box>
        ),
      },
      {
        path: "listing",
        element: (
          <Box sx={{ paddingTop: 4 }}>
            <Listing />
          </Box>
        ),
      },
      {
        path: "form",
        element: (
          <Box sx={{ paddingTop: 4 }}>
            <CreationForm />
          </Box>
        ),
      },
    ],
  },
]);

export default router;
