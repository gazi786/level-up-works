import React, { useState } from "react";
import StudentDashboard from "./Dashboard/StudentDashboard";
import TeacherDashboard from "./Dashboard/TeacherDashboard";
import NavigationDashboard from "../components/Navigation/NavBar/NavigationDashboard";
import SideBar from "../components/Navigation/SideBar/SideBar";
import { Box, Stack } from "@mui/material";
import FooterDashboard from "../components/Navigation/Footer/FooterDashboard";
import { AuthContext } from "../store/management/AuthContext";

const Dashboard = () => {
  const { role } = useContext(AuthContext);

  const [open, setOpen] = useState(true);

  const appBarRef = useRef(null);
  const footerRef = useRef(null);

  const [navbarHeight, setNavbarHeight] = useState(appBarRef);
  const [footerHeight, setFooterHeight] = useState(footerRef);

  useEffect(() => {
    if (navbarHeight.current) {
      setNavbarHeight(navbarHeight.current.offsetHeight);
    }
    if (footerHeight.current) {
      setFooterHeight(footerHeight.current.offsetHeight);
    }
  }, [navbarHeight, footerHeight]);

const Dashboard = ({ role }) => {
  return (
    <>
      {role === "teacher" && <TeacherDashboard />}
      {role === "student" && <StudentDashboard />}
    </>
  );
};

export default Dashboard;
