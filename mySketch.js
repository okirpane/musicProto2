let osc, fft;

function setup() {
  createCanvas(windowWidth, windowHeight);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(0.5);
	osc2 = new p5.TriOsc();
	osc2.amp(0.5);
	osc3 = new p5.TriOsc();
	osc3.amp(0.25);
	
  fft = new p5.FFT();
  osc.start();
	osc2.start();
	osc3.start();
}

function draw() {
  background(255);

  let waveform = fft.waveform(); // analyze the waveform
  beginShape();
  //strokeWeight(5);
  //for (let i = 0; i < waveform.length; i++) {
    //let x = map(i, 0, waveform.length, 0, width);
    //let y = map(waveform[i], -1, 1, height, 0);
    //vertex(x, y);
  //}
  //endShape();

  // change oscillator frequency based on mouseX
  let freq = map(mouseX, 0, width, 40, 880);
  osc.freq(freq);
	osc2.freq(freq-12);
	osc3.freq(freq+12);
  let amp = map(mouseY, 0, height, 1, 0.01);
  osc.amp(amp);
	osc2.amp(amp);
	osc3.amp(amp);
	noStroke();
	fill(34, freq,80);
	for (let i = 0; i < 300; i++) {
		ellipse(randomGaussian(width/2, height/2), 300, 150);
	}
	fill(34, 150, freq);
	for (let i = 0; i < 300; i++) {
		ellipse(randomGaussian(300, 60), 280, 10);
		ellipse(randomGaussian(300, 60), 320, 10);
	}
}