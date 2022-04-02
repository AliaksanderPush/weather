import ComponentWeather from '../views/ComponentWeather';

export default class Weather {
	constructor(params, city) {
		this.params = params;
		this.city = city;
		this.currentWeather = document.querySelector('.container_current');
		this.dailyWeather = document.querySelector('.container_daily');
	}

	renderDailyWeather() {
		if (this.params) {
			const { daily } = this.params;
			let fragment = '';
			daily.forEach((item) => {
				const template = ComponentWeather.renderDailyWeather(item, this.city);
				fragment += template;
			});
			this.dailyWeather.insertAdjacentHTML('afterbegin', fragment);
		}
	}

	renderCurrentWeather() {
		if (this.params) {
			const { current } = this.params;
			const currWeather = ComponentWeather.renderCurrentWeather(current, this.city);
			this.currentWeather.innerHTML += currWeather;
		}
	}

	start() {
		this.clearContainer();
		this.renderCurrentWeather();
		this.renderDailyWeather();
	}

	clearContainer() {
		this.currentWeather.innerHTML = '';
		this.dailyWeather.innerHTML = '';
	}
}
