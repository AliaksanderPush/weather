import { getAutocompleteInstance } from '../plagins/materialize';

class InputUI {
	constructor(autocompleteInstance) {
		this._form = document.forms['locationControls'];
		this._input = document.getElementById('autocomplete-input');
		this.autocompleteInstance = autocompleteInstance;
		this.originAutocomplete = autocompleteInstance(this._input);
	}

	getForm() {
		return this._form;
	}
	getInputValue() {
		return this._input.value;
	}

	setAutoCompleteData(data) {
		this.originAutocomplete.updateData(data);
	}
}

const inputUI = new InputUI(getAutocompleteInstance);
export default inputUI;
