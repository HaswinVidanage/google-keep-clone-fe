const SetItem = (key, value) => {
	localStorage.setItem(key, value);
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
