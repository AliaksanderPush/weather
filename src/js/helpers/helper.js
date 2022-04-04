export const scrollToBottom = () => {
	const element = document.getElementById('element-selector');
	element.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
};

export function formatDateTime(dt) {
	const year = dt.getFullYear();
	const month = dt.getMonth() + 1;
	const day = dt.getDate();
	const hours = dt.getHours();
	const minutes = dt.getMinutes();
	const seconds = dt.getSeconds();
	return (
		str0l(day, 2) +
		'.' +
		str0l(month, 2) +
		'.' +
		year +
		' ' +
		str0l(hours, 2) +
		':' +
		str0l(minutes, 2) +
		':' +
		str0l(seconds, 2)
	);
}

export function formatDay(dt) {
	const nDt = new Date(dt * 1000);
	const month = nDt.getMonth() + 1;
	const day = nDt.getDate();
	return str0l(day, 2) + '.' + str0l(month, 2);
}

export function formatTime(dt) {
	const nDt = new Date(dt * 1000);
	const hours = nDt.getHours();
	const minutes = nDt.getMinutes();
	return str0l(hours, 2) + ':' + str0l(minutes, 2);
}

export function convTodeg(param) {
	return Math.floor(param - 273);
}

function str0l(val, len) {
	let strVal = val.toString();
	if (strVal.length < len) strVal = '0' + strVal;
	return strVal;
}
