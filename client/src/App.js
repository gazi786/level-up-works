import { Box, ThemeProvider } from '@mui/material'
// import HomePage from './components/Home/HomePageMain'

import { ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { myCustomtheme } from './theme'
import RouterLinks from './routes'
import Navbar from './components/Navigation/NavBar/NavbarMain'
// import HomePage from './components/Home/HomePageMain'
import Footer from './components/Navigation/Footer/FooterMain'
import { myCustomtheme } from './theme'
import './App.css'
// import StudentProfileViewerPage from './Pages/StudentProfileViewerPage'
// import StudentProfile from './components/StudentProfiles/StudentProfiles'
// import ProjectLibraryPage from './Pages/StudentProjectLibraryPage'

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [accessType, setaccessType] = useState("");

  const handleModalOpen = (type) => {
    setOpenModal(true);
    setaccessType(accessType === type ? "" : type);

  }

  const handleModalClose = () => setOpenModal(false);

  return (

    <ThemeProvider theme={myCustomtheme}>
      <Box>
        <Navbar />
        {/* <StudentProfileViewerPage /> */}
        {/* <StudentProjectLibraryPage /> */}
        {/* <StudentProfile></StudentProfile> */}
        <Footer />
      </Box>
      <Navbar handleModalOpen={(type) => handleModalOpen(type)} accessType={accessType} />
      <RouterLinks openModal={openModal} handleModalOpen={(type) => handleModalOpen(type)} handleModalClose={handleModalClose} accessType={accessType} />
    </ThemeProvider>

  );
};

export default App
