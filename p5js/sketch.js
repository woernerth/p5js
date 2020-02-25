let mySizePrctg = 0.96;
let slider;

function setup()
{
 let canvas = createCanvas(windowWidth*mySizePrctg, windowHeight*mySizePrctg);
 canvas.parent('p5Canvas');
 colorMode(HSB);
 slider = createSlider(0, 100, 10, 4);
 slider.position(10, 10);
 slider.size(width);
 
 
}

function draw()
{
    let val = slider.value();
    clear();
    strokeWeight(val);
    line(0, 0, width, height);
}

function windowResized()
{
 resizeCanvas(windowWidth*mySizePrctg, windowHeight*mySizePrctg);
 slider.size(width);

}