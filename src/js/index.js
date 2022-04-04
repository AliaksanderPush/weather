import { storage } from './storage/Storage';
import Weather from './app/Weather';
import inputUI from './views/InputUI';
import { scrollToBottom } from './helpers/helper';
import './plagins';
import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
	initApp();
	const form = inputUI._form;
	async function initApp() {
		await storage.init();
		inputUI.setAutoCompleteData(storage.shortlist);
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		onFormSubmit();
	});

	async function onFormSubmit() {
		const data = inputUI.getInputValue();
		const responce = await storage.getCityWeather(data);
		const weather = new Weather(responce, data);
		weather.start();
		scrollToBottom();
	}
});
