import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/home";
import ArtistPage from "./pages/artist";
import { TooltipProvider } from "./components/ui/tooltip";
import SongDetails from "./pages/song";
import { PlayerFullSyncProvider } from "@splicemood/react-music-player";

import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Auth from "./components/auth";
import UserPage from "./pages/user";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/artists/:artistId",
    element: <ArtistPage />,
  },
  {
    path: "/songs/:songId",
    element: <SongDetails />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth>
        <PlayerFullSyncProvider>
          <TooltipProvider>
            <RouterProvider router={router} />
          </TooltipProvider>
        </PlayerFullSyncProvider>
      </Auth>
    </QueryClientProvider>
  </StrictMode>,
);
