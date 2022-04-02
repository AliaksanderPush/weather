import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

// Init Autocomplete
const autocomplete = document.querySelector('.autocomplete');
M.Autocomplete.init(autocomplete, {
	data: {
		Apple: null,
		Microsoft: null,
		Google: 'https://placehold.it/250x250',
	},
});

export function getAutocompleteInstance(elem) {
	return M.Autocomplete.getInstance(elem);
}
