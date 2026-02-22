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

import { ThemeProvider } from "next-themes";

import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Auth from "./components/auth";
import UserPage from "./pages/user";
import { THEMES } from "./components/theme-picker";
import Likes from "./pages/like";

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
    path: "/playlists/:playlistId/songs/:songId",
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
  {
    path: "/likes",
    element :<Likes />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      themes={THEMES}
      attribute={"class"}
      enableSystem={false}
      defaultTheme={"base"}
    >
      <QueryClientProvider client={queryClient}>
        <Auth>
          <PlayerFullSyncProvider>
            <TooltipProvider>
              <RouterProvider router={router} />
            </TooltipProvider>
          </PlayerFullSyncProvider>
        </Auth>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
