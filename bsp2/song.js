BSP.SONG = (function(SONG = {}) {
/* ----------------------------- */
Array.prototype.rotate=function(t){return this.slice(t,this.length).concat(this.slice(0,t))}

SONG.divide  = 6
SONG.bpm     = 80

SONG.patches = [
[0.85,1,0,0,0,0,0,0,0,0,8,0,0,0],
[0.87,3,0.57,0.79,0.324,0,617,14,0,0,4.82,1.56,-1416,0.04],
[0.84,1,0.08,0.67,0.256,0,993,15,0,0,3.6,1.56,-110,0.04],
[0.84,1,0.08,0.67,0.256,0,993,15,0,0,3.6,1.56,-110,0.04],
[0.84,1,0.08,0.67,0.256,0,993,15,0,0,3.6,1.56,-110,0.04],
]

var bass=[
['d-3'],       ,       ,       ,       ,['d-3'],
  -1   ,       ,['d-3'],       ,       ,['a#2'],
       ,       ,       ,       ,       ,['a#3'],
  -1   ,       ,['a#2'],       ,       ,['a#2'],
]
var bass2=[
['a-2'],       ,       ,       ,       ,['a-2'],
  -1   ,       ,['a-2'],       ,       ,['d#3'],
       ,       ,       ,       ,       ,['d#4'],
  -1   ,       ,['d#3'],       ,       ,       ,
]
var bass3=[
['a-2'],       ,       ,       ,       ,['a-2'],
  -1   ,       ,['a-2'],       ,       ,['g#2'],
       ,       ,       ,       ,       ,['g#3'],
  -1   ,       ,['g#2'],       ,       ,       ,
]
var pad0_0=[
['c-5'],       ,       ,       ,       ,       ,
       ,       ,       ,       ,  -1   ,['d-5'],
       ,       ,       ,       ,       ,       ,
       ,       ,       ,       ,       ,  -1   ,
]
var pad0_1=[
['c-5'],       ,       ,       ,       ,       ,
       ,       ,       ,       ,  -1   ,['d-5'],
       ,       ,       ,       ,       ,       ,
       ,       ,       ,       ,       ,  -1   ,
]
var pad0_2=[
['c-5'],       ,       ,       ,       ,       ,
       ,       ,       ,       ,  -1   ,['c-5'],
       ,       ,       ,       ,       ,       ,
       ,       ,       ,       ,       ,  -1   ,
]
var pad1_0=[
['f-5'],       ,       ,       ,       ,       ,
       ,       ,       ,       ,  -1   ,['f-5'],
       ,       ,       ,       ,       ,       ,
       ,       ,       ,       ,       ,  -1   ,
]
var pad1_1=[
['e-5'],       ,       ,       ,       ,       ,
       ,       ,       ,       ,  -1   ,['f-5'],
       ,       ,       ,       ,       ,       ,
       ,       ,       ,       ,       ,  -1   ,
]
var pad1_2=[
['e-5'],       ,       ,       ,       ,       ,
       ,       ,       ,       ,  -1   ,['d#5'],
       ,       ,       ,       ,       ,       ,
       ,       ,       ,       ,       ,  -1   ,
]
var pad2_0=[
['a-5'],       ,       ,       ,       ,       ,
       ,       ,       ,       ,  -1   ,['a-5'],
       ,       ,       ,       ,       ,       ,
       ,       ,       ,       ,       ,  -1   ,
]
var pad2_1=[
['g-5'],       ,       ,       ,       ,       ,
       ,       ,       ,       ,  -1   ,['a#5'],
       ,       ,       ,       ,       ,       ,
       ,       ,       ,       ,       ,  -1   ,
]
var pad2_2=[
['g-5'],       ,       ,       ,       ,       ,
       ,       ,       ,       ,  -1   ,['g-5'],
       ,       ,       ,       ,       ,       ,
       ,       ,       ,       ,       ,  -1   ,
]

var melody1=[
       ,       ,       ,['a-5'],  -1   ,['c-6'],
  -1   ,       ,['c-6'],  -1   ,       ,['c-6'],
       ,       ,       ,['d-6'],  -1   ,       ,
       ,       ,       ,['a-5'],       ,       ,
['g-5'],       ,       ,       ,  -1   ,['f-5'],
       ,       ,['e-5'],       ,       ,['f-5'],
       ,       ,       ,       ,       ,       ,
['a#5'],       ,       ,       ,       ,       ,
['c-6'],       ,       ,['a-5'],       ,['g-5'],
['f-5'],       ,['d-5'],  -1   ,       ,['c-5'],
       ,       ,       ,['d-5'],  -1   ,       ,
['c-5'],['d-5'],['f-5'],['g-5'],['a-5'],['c-6'],
['d-6'],       ,       ,       ,       ,       ,
       ,  -1   ,['f-6'],  -1   ,       ,['g-6'],
       ,       ,       ,       ,       ,       ,
       ,       ,       ,       ,       ,       ,
]

SONG.seq = [
bass.concat(bass2,bass,bass3),
melody1,
pad0_0.concat(pad0_1,pad0_0,pad0_2),
pad1_0.concat(pad1_1,pad1_0,pad1_2),
pad2_0.concat(pad2_1,pad2_0,pad2_2),
]


/* ----------------------------- */
return SONG;
/* ----------------------------- */
})();