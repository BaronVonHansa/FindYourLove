
/* kommentarer */

let profilArray = [
	{
		profilNavn: "Stian",
		profilAlder: 23,
		profilBio: "Alphamale fra Oslo, ute etter en gøy kveld",
		sex: false,
		profilBilde: "images/man1.jpg",
	},
	{
		profilNavn: "Robert",
		profilAlder: 25,
		profilBio: "Egentlig ganske snill",
		sex: false,
		profilBilde: "images/man2.jpg",
	},
	{
		profilNavn: "Kjetil",
		profilAlder: 36,
		profilBio: "Nordsjøarbeider med naust",
		sex: false,
		profilBilde: "images/man3.jpg",
	},
	{
		profilNavn: "Sandra",
		profilAlder: 34,
		profilBio: "Ute etter en Vin Vin situasjon",
		sex: true,
		profilBilde: "images/woman1.jpg",
	},
	{
		profilNavn: "Lene",
		profilAlder: 24,
		profilBio: "Jordnær og glad i tur",
		sex: true,
		profilBilde: "images/woman2.jpg",
	},
	{
		profilNavn: "Rita",
		profilAlder: 22,
		profilBio: "Koden min fungerer ikke, og jeg aner ikke hvorfor",
		sex: true,
		profilBilde: "images/woman3.jpg",
	},
];

let ageLimit = 25;

function profilePrinter(htmlObject, profile) {
	htmlObject.innerHTML += `<h2>${profile.profilNavn}</h2>
    <h2>${profile.profilAlder}</h2>
    <img src='${profile.profilBilde}'>
    <h4>${profile.profilBio}</h4>`;
}


function initAlleProfiler() {
	for (i = 0; i < profilArray.length; i++) {
		profilePrinter(resultat, profilArray[i]);
	}
}


function ageChecker(age, profiles, ageCheck) {
	if (age >= ageCheck) {
		let tmp = profiles.filter(profile => profile.profilAlder >= ageCheck);
		for (let i = 0; i < tmp.length; i++) {
			profilePrinter(forslag_resultat, tmp[i]);
		};
	} else {
		let tmp = profiles.filter(profile => profile.profilAlder < ageCheck)
		for (let i = 0; i < tmp.length; i++) {
			profilePrinter(forslag_resultat, tmp[i]);
		};
	}
}

function profileButtonClick() {
	let alder = document.getElementById("profil_alder").value;
	let male = document.getElementById("male").checked;
	let female = document.getElementById("female").checked;

	forslag_resultat.innerHTML = "";

	if (alder === "") return forslag_resultat.innerHTML = "<h1>Legg til alder din Nepe!</h1>"

	alder = parseFloat(alder);

	if (Number.isNaN(alder)) return forslag_resultat.innerHTML = "<h1>Du vet forskjellen på tall og bokstaver sant? <br> SO GO DO IT AGAIN!</h1>"


	if (male) {
		let tmp = profilArray.filter(profile => !profile.sex)
		ageChecker(alder, tmp, ageLimit)
	} else if (female) {
		let tmp = profilArray.filter(profile => profile.sex)
		ageChecker(alder, tmp, ageLimit)
	} else {
		forslag_resultat.innerHTML += `<h1>Venligst velg et kjønn!</h1>`
	}
}
