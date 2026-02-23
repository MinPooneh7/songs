import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/home";
import ArtistPage from "./pages/artist";
import { TooltipProvider } from "./components/ui/tooltip";
import SongDetailsPage from "./pages/song";

import { ThemeProvider } from "next-themes";

import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import Auth from "./components/auth";
import UserPage from "./pages/user";
import { THEMES } from "./components/theme-picker";
import LikesPage from "./pages/like";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/artists/:artistId",
    element: <ArtistPage />,
  },
  {
    path: "/songs/:songId",
    element: <SongDetailsPage />,
  },
  {
    path: "/playlists/:playlistId/songs/:songId",
    element: <SongDetailsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/likes",
    element: <LikesPage />,
  },
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
          <TooltipProvider>
            <RouterProvider router={router} />
          </TooltipProvider>
        </Auth>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
