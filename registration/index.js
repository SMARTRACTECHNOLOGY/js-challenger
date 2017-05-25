const regList = [];
let serverList = [];

function fakeWebService (json) {
	serverList = json.parse();
}

function addNew () {
	const hospital = document.getElementsByClassName('hospital')[0];
	const age      = document.getElementsByName('age')[0].value;
	const rel      = document.getElementsByName('rel')[0].value;
	const smoker   = document.getElementByName('smoker')[0].value;

	// validation
	if (parseInt(age, 10) > 0 && /(self|spouse|child|parent|grandparent|other)/.test(rel)) {
		regList.push({age, rel, smoker});

		const htmlItem = `<li>
			${regList.length}-${age}-${rel}-${smoker}
		</li>`;

		// Add new to html
		hospital.insertAdjacentHTML('beforeend', htmlItem);

		// Add to regList
		regList.push({age, rel, smoker});
	}
};

function submit () {
	const jsonBody = JSON.stringify(regList);
	fakeWebService(jsonBody);
}

const form      = document.getElementsByTagName('form')[0];
const submitBtn = document.getElementByTagName('button')[1];
const addBtn    = document.getElementByClass('add')[0];

// Events

form.addEventListener('submit', submit, false);
submitBtn.addEventListener('click', submit, false);
addBtn.addEventListener('click', addNew, false);
