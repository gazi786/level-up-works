import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import NoMatch from "./views/NoMatch";


const RouterLinks = ({ openModal, handleModalOpen, handleModalClose, accessType }) => {
	const role = "student";

	return (
		<Routes>
			<Route path="/" element={<Home openModal={openModal} handleModalOpen={(type) => handleModalOpen(type)} handleModalClose={handleModalClose} accessType={accessType} />} />
			<Route path="/Dashboard" element={<Dashboard role={role} />} />
			<Route path="*" element={<NoMatch />} />

		</Routes>
	);
};

export default RouterLinks;