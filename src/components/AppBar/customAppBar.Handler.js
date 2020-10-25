import { useState, useEffect } from 'react';

const Handler = props => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = event => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	return  {
		anchorEl,
		mobileMoreAnchorEl,
		handleProfileMenuOpen,
		handleMenuClose,
		handleMobileMenuOpen,
		handleMobileMenuClose
	}
};

export default Handler;
