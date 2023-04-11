import { ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { myCustomtheme } from './theme'
import RouterLinks from './routes/routes'

import './App.css'
import { AuthProvider } from './store/management/AuthContext'

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [accessType, setaccessType] = useState(""); //either Login or Signup

  const handleModalOpen = (type) => {
    setOpenModal(true);
    setaccessType(accessType === type ? "" : type);
  }

  const handleModalClose = () => setOpenModal(false);

  return (
    <ThemeProvider theme={myCustomtheme}>
      <AuthProvider >

        <RouterLinks
          modalProps={{
            openModal: openModal,
            handleModalOpen: (type) => handleModalOpen(type),
            handleModalClose: handleModalClose,
            accessType: accessType
          }}
        />

      </AuthProvider>
    </ThemeProvider>
  );
};

export default App
