class Course {
	constructor(courseCode) {
		if (courseCode == "id100i") {
			this.courseObjective = [
				"kunna redogöra för och definiera vetenskapliga begrepp\ninom interaktionsdesign med hjälp av litteratur och\nforskning inom området (1)",
				"kunna identifiera och redogöra för grundläggande\ndesignprinciper vid design av digitala artefakter (2)",
				"kunna modifiera användargränssnitt för att passa\nanvändare och användningssammanhang (3)",
				"självständigt kunna genomföra en användarcentrerad\ndesignprocess med fokus på design av digitala artefakter (4)",
				"kunna värdera och formulera sitt behov av ytterligare\nkunskap inom interaktionsdesign för att självständigt utveckla sin designkompetens (5)",
				"kunna identifiera användbarhet i digitala artefakter och\ndess betydelse för individer och organisationer (6)"
			];
			this.examination = [
				[false,true,false,false,false,true],
				[false,false,true,true,true,false],
				[true,false,false,false,false,false]
			];
			this.grade = ["u","g","vg"];
		} else if (courseCode == "id406i") {
			this.courseObjective = [
				"utifrån forskning inom informatik, designteori och\ninteraktionsdesign kunna använda centrala begrepp och metoder\ngällande analys och design av mobil IT i designarbetets\ntidiga skeden (1)",
				"kunna kritiskt tillämpa designstrategier i designprojekts\nolika faser och där förutsättningar för designarbetet\nändrats (2)",
				"kunna producera ändmålsenliga skisser och designkoncept i\nolika former och format för mobil IT i form av skisser\noch prototyper (3)",
				"självständigt kunna skapa ändamålsenliga prototyper med en\nlämplig grad av interaktivitet avsedda för mobila\nenheter (4)",
				"kunna utifrån de centrala begreppen; designbrief,\ndesignkoncept, idéhöjd, komplexitet, video som designmaterial\noch prototyp genomföra ett designarbete i tidigt skede och\nvärdera dess lösningar individuellt och i dialog med andra (5)",
				"i gestaltande format kunna skissa, argumentera, iterera och\ndokumentera olika faser av designarbetet för att\nspåra och säkra designarbetets progression (designlogg) (6)",
				"kunna bedöma etiska dilemman gällande design och användning\nav mobil IT (7)",
				"på ett kritiskt sätt kunna formulera och bedöma behovet av\nytterligare kunskap och kompetens som reflekterande\ndesigner i förhållande till designarbetets progression,\niteration, komplexitet, idéhöjd och framtida yrkesroll (8)",
				"fortlöpande kunna dokumentera och presentera designarbetet\nsom ett led i kritisk värdering av designkoncept,\nprototyper, metoder och processer (9)",
				"kunna bedöma värdet av gestaltande designmetoder och hur\ndessa fogar sig i designarbetet (10)"
			];
			this.examination = [
				[true,true,true,false,false,false,true,false,true,false],
				[true,true,true,true,true,true,true,true,true,false],
				[true,false,false,false,false,false,true,true,false,true],
				[true,true,true,true,true,true,true,true,false,true],
				[true,true,true,true,true,true,true,true,false,true]
			];
			this.grade = ["u","g","vg"];
		} else if (courseCode == "id430i") {
			this.courseObjective = [
				"kunna definiera, diskutera och tillämpa begrepp inom\ninformatik och interaktionsdesign gällande fysiska\nanvändargränssnitt och datorstöd för samarbete med hjälp av litteratur\noch forskning (1)",
				"kunna värdera fysiska användargränssnitt och datorstöd\nför samarbete (2)",
				"kunna skissera designkoncept av fysiska användargränssnitt\noch datorstöd för samarbete (3)",
				"kunna orientera sig bland metoder, tekniker, verktyg och\nmaterial för fysiska användargränssnitt och design\nför samarbete (4)",
				"kunna sammanfatta forskningsresultat och värdera deras\nbetydelse gällande fysiska användargränssnitt och\ndatorstöd för samarbete utifrån kunskapens roll i samhället och om\nmänniskors ansvar för hur den används (5)",
				"kritiskt kunna bedöma sitt behov av ytterligare kunskap\noch designkompetens som reflektiv designer gällande\nfysiska användargränssnitt och datorstöd för samarbete (6)"
			];
			this.examination = [
				[true,true,false,true,true,false],
				[false,true,true,true,false,true]
			];
			this.grade = ["u","g","vg"];
		} else if (courseCode == "dp601i") {
			this.courseObjective = [
				"självständigt kunna relatera begrepp, processer och\narbetsmetoder från huvudområdet informatik och\ndesignvetenskap till design av och med digitala medier (1)",
				"självständigt kunna planera och genomföra ett större\ndesignprojekt (2)",
				"självständigt kunna gestalta för att demonstrera ett\ndesignkoncept (3)",
				"självständigt kunna gestalta för att skapa kunskap i ett\ndesignprojekt (4)",
				"självständigt kunna leda, facilitera och aktivt delta i\ndesignworkshops (5)",
				"självständigt kunna kommunicera designarbete och dess\nresultat i utställningsformat (6)",
				"självständigt kunna kommunicera designarbete och dess\nresultat muntligt (7)",
				"självständigt kunna värdera och kritisera designarbete (8)",
				"självständigt kunna värdera och kritisera designerns\nyrkesroll (9)",
				"självständigt kunna utveckla sin kunskapsskapande och\ndesignkritiska kompetens i rollen som designer (10)"
			];
			this.examination = [
				[true,true,true,true,true,true,true,true,true,true]
			];
			this.grade = ["u","g","vg"];
		} else {
			this.courseObjective = [];
			this.examination = [];
			this.grade = [];
		}
	}
}

class Radarchart {
	constructor(p) {
		this.x = p.x;
		this.y = p.y;
		this.d = p.d;
		this.c = p.c;
	}

	// Rita radardiagram.
	draw() {
		// TEST
		let g = 0.5;
		let vg = 0.75;

		if (this.c !== null) {
			// MAIN CODE BULK HERE
			noFill();
			stroke(224);
			ellipse(this.x, this.y, this.d);
			ellipse(this.x, this.y, this.d * g / 2);
  		ellipse(this.x, this.y, this.d * g);
  		ellipse(this.x, this.y, this.d * vg);
		} else {
			noFill();
			stroke(224);
			ellipse(this.x, this.y, this.d);
		}

  	if (mouseIsPressed) {
  		// within sector i and sector i is visible
  			// within circle j
  				// if i j true
  					// toggle i j
  				// else clear i
  					// i j true
  	}

  	

  	// check where mouseClick sector grade

  	// update sector grade

  	// TEST
  	// Flytta hit kod från draw().
	}
}

var input, link, checkboxes;
var course, chartDiameter, radarChart;

function setup() {
	// TEST
	frameRate(0.5);

	// Sökformulär.
	input = createInput();
  input.parent('search-form');

  // Sökknapp.
  let button = createButton("Sök");
  button.mousePressed(reset);
  button.parent('search-form');

  // Flervalsknappar.
	checkboxes = [];

	// Canvas.
	let canvas = createCanvas(1200, 600);
	canvas.parent('frame');

	// Radardiagram.
	chartDiameter = 500;
	radarChart = new Radarchart({x: width / 2, y: height / 2, d: chartDiameter, c: null});

	// Dagens datum.
	const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  var today = createP(date.getDate() + " " + month + " " + date.getFullYear());
  today.parent('assessment-form');

  // Bedömningsformulär.
  let textarea = createElement('textarea');
  textarea.elt.cols = 75;
  textarea.parent('assessment-form');
}

function reset() {
	// Ny kurs.

	let courseCode = input.value();

	course = new Course(courseCode);

	radarChart.c = course;

	// länk till kursplan
	if (link !== undefined) {
		link.remove();
	}
	link = createA("https://www.hkr.se/kurs/" + courseCode + "/kursplan", courseCode.toUpperCase() + " Kursplan", "_blank");
	link.parent('url');
	

	// flervalsknappar
	if (checkboxes != []) {
    	for (var i = 0; i < checkboxes.length; i++) {
      	checkboxes[i].remove();
    	}
    	checkboxes = [];
  	} 

  	for (var i = 0; i < course.examination.length; i++) {
    	checkboxes[i] = createCheckbox('Delprov ' + (i + 1), true);
    	checkboxes[i].parent('view');
  	}

  radarChart.v = [];
  for (var i = course.courseObjective.length - 1; i >= 0; i--) {
  	radarChart.v.push(0.75);
  }
	
	// TEST
	console.log("Variabler: " + radarChart.v);
}

function draw() {
	// TEST
	var n = PI + HALF_PI;
  var s;

  // TEST
  //var levels = [0.25, 0.5, 0.75, 1];
  var diameter;
  var x, y;

	clear();
	radarChart.draw();

	// TEST
	// Flytta till Radarchart.draw().
	if (course !== undefined) {
		s = TWO_PI / (course.courseObjective.length);
		// ITERATE THROUGH ASSESSMENTS
		for (var j = 0; j < course.examination.length; j++) {
			// ITERATE THROUGH ASSESSMENT GOALS
			for (var i = 0; i < course.examination[j].length; i++) {
				if (checkboxes[j].checked()) {
					if (course.examination[j][i]) {
						// TEST
						diameter = chartDiameter * radarChart.v[i];
						//diameter = chartDiameter * random(levels);
						x = width / 2 + diameter * cos(n + i * s + s / 2);
						y = height / 2 + diameter * sin(n + i * s + s / 2);

						if (i % 2 !== 0) {
							stroke(20, 130, 0, 128);
							fill(20, 130, 0, 128);
						} else {
							stroke(190, 65, 145, 64);
							fill(190, 65, 145, 64);
						}
						//ellipse(x, y, 50, 50);
            arc(width / 2, height / 2, diameter, diameter, n + i * s, n + (i + 1) * s, PIE);

						// TEST
						diameter = chartDiameter / 1.8;
						x = width / 2 + diameter * cos(n + i * s);
						y = height / 2 + diameter * sin(n + i * s);

						stroke(0);
						fill(0);
						rectMode(CENTER);
						text(course.courseObjective[i], x, y);

						// TEST
						//console.log("TBD");
					}
				}
				noFill();
        arc(width * 0.5, height * 0.5, chartDiameter, chartDiameter, n + i * s, n + (i + 1) * s, PIE);       
			}
		}	
	}
}