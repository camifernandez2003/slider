var sliders = [];
var angle = 0;

function setup() {
  // Crear el lienzo y colocarlo dentro del contenedor 'sliders-container'
  createCanvas(400, 400).parent("sliders-container");

  // Crear los sliders y añadirlos al mismo contenedor
  for (var i = 0; i < 100; i++) {
    sliders[i] = createSlider(0, 255, 50);
    sliders[i].parent("sliders-container"); // Los sliders van dentro del contenedor
  }
}

function draw() {
  var offset = 0;
  for (var i = 0; i < sliders.length; i++) {
    var x = map(sin(angle + offset), -1, 1, 0, 255);
    sliders[i].value(x);

    // Cambiar el color de fondo del slider según su valor
    let colorValue = sliders[i].value();
    sliders[i].style("background", color(255 - colorValue, colorValue, 150));

    offset += 0.02345;
  }
  angle += 0.01;
}
