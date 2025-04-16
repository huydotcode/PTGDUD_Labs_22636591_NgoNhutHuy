import AnalyticsPage from "../pages/AnalyticsPage";
import DashboardPage from "../pages/DashboardPage";
import IntergrationPage from "../pages/IntergrationPage";
import MessagePage from "../pages/MessagePage";
import ProjectPage from "../pages/ProjectPage";
import TeamPage from "../pages/TeamPage";

export const routes = [
  {
    path: "/",
    element: DashboardPage,
  },
  {
    path: "/projects",
    element: ProjectPage,
  },
  {
    path: "/teams",
    element: TeamPage,
  },
  {
    path: "/analytics",
    element: AnalyticsPage,
  },
  {
    path: "/messages",
    element: MessagePage,
  },
  {
    path: "/intergrations",
    element: IntergrationPage,
  },
];
