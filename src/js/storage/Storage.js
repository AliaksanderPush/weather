import { api } from '../service/Api';
import { cities } from '../../locationCitys/locationCityes';

export default class Storage {
	constructor(api, cities) {
		this.cities = cities[0].regions;
		this.api = api;
		this.cityWeather = null;
		this.cityOnly = null;
		this.shortlist = null;
	}

	async init() {
		this.cityWithAreas = this.serelizeListCity(this.cities);
		this.cityWeather = this.serilizeByCity(this.cityWithAreas);
		this.shortlist = this.createShortCityList(this.cityWeather);
	}

	async getCityWeather(key) {
		const coord = this.cityWeather[key];
		const { lat, lng } = coord;

		const response = await api.getWheather(lat, lng);
		const serelizeResponce = {
			current: response.current,
			daily: response.daily,
		};

		return serelizeResponce;
	}

	serilizeByAreas(areas) {
		const areasFilter = areas.reduce((acc, item) => {
			acc[item.name] = item.cities;
			return acc;
		}, {});

		return areasFilter;
	}

	serelizeListCity(arr) {
		const result = arr.map((item) => {
			return this.addAreaToCity(item.cities, item.name);
		});

		return this.concatCityes(result);
	}

	addAreaToCity(obj, area) {
		let res = obj.reduce((acc, item) => {
			return [...acc, { ...item, area: area }];
		}, []);
		return res;
	}

	concatCityes(array) {
		const res = array.reduce((flat, current) => flat.concat(current), []);
		return res;
	}

	serilizeByCity(obj) {
		let res = obj.reduce((acc, item) => {
			const areas = item.area;
			const city = item.name;
			const key = `${city},${areas}`;
			acc[key] = { lat: item.lat, lng: item.lng };
			return acc;
		}, {});

		return res;
	}

	createShortCityList(cities) {
		return Object.entries(cities).reduce((acc, [key]) => {
			acc[key] = null;
			return acc;
		}, {});
	}
}

export const storage = new Storage(api, cities);
