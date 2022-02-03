interface IBaseComponent {
	id: number;
	name: string;
	injectToken: (subname: string) => void;
}
class BaseComponent implements IBaseComponent {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	injectToken = (subname: string) => {
		console.log(
			`Injecting token for component ${this.id} aka ${this.name}, with ${subname}`
		);
	};
}

class RegularComponent extends BaseComponent {
	subname: string;

	constructor(id: number, name: string, subname: string) {
		super(id, name);
		this.subname = subname;
	}
}

let regularOne = new RegularComponent(11, 'FirstComponent', 'Subfirst name');
regularOne.injectToken('Subname passed in');
