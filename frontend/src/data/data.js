
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon  from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon  from "@mui/icons-material/Person";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import DashboardIcon from '@mui/icons-material/Dashboard';

export const SidebarData = [
     {
          linkTo: '/dashboard',
          icon : <DashboardIcon/>,
          heading : "Dashboard",
     },
     {
          linkTo: '/profile',
          icon :< PersonIcon/>,
          heading : "Profile",
     },
     {
          linkTo: '/reports',
          icon : <AnalyticsIcon/>,
          heading : "Reports",
     },
     {
          linkTo: '/all',
          icon : <GroupIcon/>,
          heading : "All Alumni",
     },
     {
          linkTo: '/bs',
          icon : <GroupIcon/>,
          heading : "BS Alumni",
     },
     {
          linkTo: '/ms',
          icon : <GroupIcon/>,
          heading : "MS Alumni",
     },
     {
          linkTo: '/phd',
          icon : <GroupIcon/>,
          heading : "PHD Alumni",
     },
     {
          linkTo: '/settings',
          icon : <SettingsIcon/>,
          heading : "Settings",
     },
     {
          linkTo: '/logout',
          icon : <LogoutIcon/>,
          heading : "Logout",
     }
]