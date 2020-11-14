const SetItem = (key, value) => {
	try {
		localStorage.setItem(key, value);
	} catch (e) {
		// todo log errors
		throw e;
	}
};


const GetItem = (key) => {
	return localStorage.getItem(key);
};

const RemoveItem = (key) => {
	localStorage.removeItem(key);
};

export {
	SetItem,
	GetItem,
	RemoveItem
}
