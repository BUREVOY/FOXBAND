let num = 255;
num.toString(16)//ff
parseInt("ff", 16)//255
alert( Math.random().toFixed(1)*10)
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
