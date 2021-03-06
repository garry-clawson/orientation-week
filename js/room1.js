/**
 * fun javascript doodle that lets you doodle
 * 💦🎨 (spray paint?)
 */

// play with these
var settings = {
  colorChangeSpeedFactor: .1, // how fast does the color changes? Lower is slower, exponential
  trailLength: 100, // how long is the trail?
  diameter: 18, // how wide is the spray mark?
  fadeStart: .8 // where does the trail start fading out? percentage along itself
}
var __meta_settings__ = {
  disabled: true
}

const cursor = document.getElementById('cursor');

// just some dummy data to make a not blank initial page
var cursorTrail = JSON.parse(`[{"hue":311.454399995273,"speed":7.0710678118654755,"x":157,"y":131},{"hue":313.1217999965884,"speed":4.242640687119285,"x":160,"y":128},{"hue":314.7891999979038,"speed":7.211102550927978,"x":164,"y":122},{"hue":316.4565999992192,"speed":5.385164807134504,"x":166,"y":117},{"hue":318.1240000005346,"speed":14.035668847618199,"x":167,"y":103},{"hue":319.7913999960292,"speed":10.04987562112089,"x":166,"y":93},{"hue":321.4587999973446,"speed":8.54400374531753,"x":163,"y":85},{"hue":323.12619999866,"speed":0,"x":163,"y":85},{"hue":324.7935999999754,"speed":9.219544457292887,"x":161,"y":76},{"hue":326.46099999547005,"speed":6.082762530298219,"x":160,"y":70},{"hue":328.12839999678545,"speed":3.1622776601683795,"x":159,"y":67},{"hue":329.79579999810085,"speed":3,"x":159,"y":64},{"hue":331.46319999941625,"speed":2,"x":159,"y":62},{"hue":334.7979999962263,"speed":2.8284271247461903,"x":161,"y":60},{"hue":336.4653999975417,"speed":4.123105625617661,"x":165,"y":59},{"hue":338.1327999988571,"speed":6,"x":171,"y":59},{"hue":339.8002000001725,"speed":5,"x":176,"y":59},{"hue":341.4675999956671,"speed":9,"x":185,"y":59},{"hue":343.1349999969825,"speed":8.06225774829855,"x":193,"y":60},{"hue":344.8023999982979,"speed":8.54400374531753,"x":201,"y":63},{"hue":346.4697999996133,"speed":7.280109889280518,"x":208,"y":65},{"hue":348.13719999510795,"speed":6.708203932499369,"x":214,"y":68},{"hue":349.80459999642335,"speed":5.0990195135927845,"x":219,"y":69},{"hue":351.47199999773875,"speed":3.1622776601683795,"x":222,"y":70},{"hue":353.13939999905415,"speed":3,"x":225,"y":70},{"hue":354.80680000036955,"speed":2,"x":227,"y":70},{"hue":356.4741999958642,"speed":5.385164807134504,"x":232,"y":68},{"hue":358.1415999971796,"speed":3.605551275463989,"x":234,"y":65},{"hue":359.808999998495,"speed":6.082762530298219,"x":235,"y":59},{"hue":1.4763999998103827,"speed":5.0990195135927845,"x":236,"y":54},{"hue":3.1437999953050166,"speed":4,"x":236,"y":50},{"hue":4.811199996620417,"speed":5,"x":236,"y":45},{"hue":6.478599997935817,"speed":7.810249675906654,"x":231,"y":39},{"hue":8.145999999251217,"speed":9.219544457292887,"x":224,"y":33},{"hue":9.813400000566617,"speed":11.180339887498949,"x":214,"y":28},{"hue":11.48079999606125,"speed":11.180339887498949,"x":204,"y":23},{"hue":13.14819999737665,"speed":12.649110640673518,"x":192,"y":19},{"hue":14.81559999869205,"speed":0,"x":192,"y":19},{"hue":16.48300000000745,"speed":7.280109889280518,"x":185,"y":17},{"hue":18.150399995502084,"speed":10.198039027185569,"x":175,"y":15},{"hue":19.817799996817484,"speed":15.297058540778355,"x":160,"y":12},{"hue":21.485199998132885,"speed":0,"x":160,"y":12},{"hue":23.152599999448285,"speed":8.06225774829855,"x":152,"y":11},{"hue":24.81999999494292,"speed":5,"x":147,"y":11},{"hue":26.48739999625832,"speed":6,"x":141,"y":11},{"hue":28.15479999757372,"speed":7,"x":134,"y":11},{"hue":29.82219999888912,"speed":6.082762530298219,"x":128,"y":12},{"hue":31.48960000020452,"speed":6.324555320336759,"x":122,"y":14},{"hue":33.15699999569915,"speed":7.280109889280518,"x":115,"y":16},{"hue":34.82439999701455,"speed":10.295630140987,"x":106,"y":21},{"hue":36.49179999832995,"speed":5.830951894845301,"x":101,"y":24},{"hue":38.15919999964535,"speed":8.54400374531753,"x":93,"y":27},{"hue":39.826599995139986,"speed":7.810249675906654,"x":87,"y":32},{"hue":41.493999996455386,"speed":9.219544457292887,"x":80,"y":38},{"hue":43.161399997770786,"speed":5.656854249492381,"x":76,"y":42},{"hue":44.828799999086186,"speed":12.041594578792296,"x":67,"y":50},{"hue":46.496200000401586,"speed":3.605551275463989,"x":65,"y":53},{"hue":48.16359999589622,"speed":0,"x":65,"y":53},{"hue":49.83099999721162,"speed":4.242640687119285,"x":62,"y":56},{"hue":51.49839999852702,"speed":4.47213595499958,"x":60,"y":60},{"hue":53.16579999984242,"speed":5.0990195135927845,"x":59,"y":65},{"hue":54.833199995337054,"speed":6.324555320336759,"x":57,"y":71},{"hue":56.500599996652454,"speed":6.082762530298219,"x":56,"y":77},{"hue":58.167999997967854,"speed":7,"x":56,"y":84},{"hue":59.835399999283254,"speed":4,"x":56,"y":88},{"hue":61.502800000598654,"speed":3,"x":56,"y":91},{"hue":63.17019999609329,"speed":5.385164807134504,"x":61,"y":93},{"hue":64.83759999740869,"speed":9.486832980505138,"x":70,"y":96},{"hue":66.50499999872409,"speed":8,"x":78,"y":96},{"hue":68.17240000003949,"speed":13,"x":91,"y":96},{"hue":69.83979999553412,"speed":14,"x":105,"y":96},{"hue":71.50719999684952,"speed":11,"x":116,"y":96},{"hue":73.17459999816492,"speed":0,"x":116,"y":96},{"hue":74.84199999948032,"speed":10,"x":126,"y":96},{"hue":76.50939999497496,"speed":7,"x":133,"y":96},{"hue":78.17679999629036,"speed":7.0710678118654755,"x":140,"y":97},{"hue":79.84419999760576,"speed":2.23606797749979,"x":142,"y":98},{"hue":81.51159999892116,"speed":2.8284271247461903,"x":144,"y":100},{"hue":83.17900000023656,"speed":3.605551275463989,"x":146,"y":103},{"hue":84.84639999573119,"speed":5.0990195135927845,"x":147,"y":108},{"hue":86.51379999704659,"speed":7.280109889280518,"x":149,"y":115},{"hue":89.84859999967739,"speed":24.515301344262525,"x":144,"y":139},{"hue":91.51599999517202,"speed":15.231546211727817,"x":138,"y":153},{"hue":93.18339999648742,"speed":11.661903789690601,"x":132,"y":163},{"hue":94.85079999780282,"speed":8.54400374531753,"x":129,"y":171},{"hue":96.51819999911822,"speed":4.47213595499958,"x":127,"y":175},{"hue":98.18560000043362,"speed":2,"x":127,"y":177},{"hue":101.52039999724366,"speed":1,"x":127,"y":178},{"hue":103.18779999855906,"speed":1,"x":127,"y":179},{"hue":104.85519999987446,"speed":25.179356624028344,"x":152,"y":182},{"hue":106.52259999536909,"speed":23.194827009486403,"x":175,"y":185},{"hue":109.85739999799989,"speed":16.0312195418814,"x":191,"y":186},{"hue":113.19220000063069,"speed":24.331050121192877,"x":215,"y":190},{"hue":119.86180000007153,"speed":12.36931687685298,"x":227,"y":193},{"hue":123.19659999688156,"speed":4.47213595499958,"x":231,"y":195},{"hue":126.53139999951236,"speed":1,"x":232,"y":195},{"hue":129.8661999963224,"speed":1,"x":233,"y":195},{"hue":131.5335999976378,"speed":0,"x":233,"y":195},{"hue":133.2009999989532,"speed":0,"x":233,"y":195},{"hue":134.8684000002686,"speed":0,"x":233,"y":195}]`);

// keep track of where the cursor is
var cursorPos = {
  x: -100, // start outside the screen
  y: -100
};

function getPos(event) {
  return {
    x: event.pageX,
    y: event.pageY
  }
}
// can't get the mouse position outside of events, so cache it in the cursorPos object
document.addEventListener('mousemove', function(e) {
  cursorPos = getPos(e);
});
document.addEventListener('touchmove', function(e) {
  cursorPos = getPos(e.changedTouches[0]); // no multitouch support (yet? 😜)
  e.preventDefault(); // prevent touch scrolling
});

// "hide" the cursor by moving it off screen
function goAway(e) {
  cursorPos.x = -1000;
  cursorPos.y = -1000;
}
document.addEventListener('mouseleave', goAway);
document.addEventListener('touchend', goAway);

document.addEventListener('click', function(e) {
  //console.log(JSON.stringify(cursorTrail));
});

function frame(time) {
  var hue = (time * settings.colorChangeSpeedFactor) % 360;
  
  cursorTrail.push(Object.assign({
    hue: hue,
    speed: cursorTrail.length <= 1 ? 0 : ((pos, lastPos) => {
      // distance between points ~ speed. Might be nice to smooth this by averaging over the last few points
      return Math.sqrt(Math.pow(lastPos.x - pos.x, 2) + Math.pow(lastPos.y - pos.y, 2));
    })(cursorPos, cursorTrail[cursorTrail.length - 1])
  }, cursorPos));
  
  // keep popping off the first one
  // nice little following effect, plus your browser would probably die if everything was kept
  if (cursorTrail.length > settings.trailLength) {
    cursorTrail.shift();
  }

  // follow the mouse!
  cursor.style.top = `${cursorPos.y}px`;
  cursor.style.left = `${cursorPos.x}px`;
  
  // make it look like the circle is solid  
  cursor.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;

  // generate a trail of shadows
  cursor.style.boxShadow = cursorTrail.map((pos, i) => {
    const offsetX = pos.x - cursorPos.x;
    const offsetY = pos.y - cursorPos.y;
    const age = (settings.trailLength - i) / settings.trailLength;
    const fadeOut = age < settings.fadeStart ? 0 : Math.pow(4 * (age - settings.fadeStart), 2); 
    const color = `hsla(${pos.hue}, 50%, 50%, ${1 - fadeOut})`;
    // return `${offsetX}px ${offsetY}px ${pos.speed + 1}px ${age * settings.diameter + settings.diameter}px ${color}`;
    return `${offsetX}px ${offsetY}px ${pos.speed + 1}px ${settings.diameter}px ${color}`;
  }).reverse().join(', ');

  window.requestAnimationFrame(frame);
}

window.requestAnimationFrame(frame);

console.log('initialized');


// Check answer to challange
// Yep, it's not going to be that easy! Now stop cheating!!!

var answer = "4576ebaa4b8ddfffcbec185ece644110da9f6ed0"; //SHA1 value of correct answer

function getAnswer() {
  var y = document.getElementById("answer");

  var x = SHA1(y.value);

  if(x != answer){
        document.getElementById('answer').style.backgroundColor = "red"; //when answer is incorrcet turn red
        return false;
    }else{
        document.getElementById('answer').style.backgroundColor = "green"; //when answer is correct turn green

        var wellDone; //sets the variable for the text output
        wellDone = "Congratulations you've completed this task!";
        document.getElementById("results").innerHTML = wellDone; //inserts 'text' into the yourscore ID element

        localStorage.setItem("room1", "complete");
    };
}

// SHA1 Function
function SHA1 (msg) {

    function rotate_left(n,s) {
        var t4 = ( n<<s ) | (n>>>(32-s));
        return t4;
    };

    function lsb_hex(val) {
        var str="";
        var i;
        var vh;
        var vl;

        for( i=0; i<=6; i+=2 ) {
            vh = (val>>>(i*4+4))&0x0f;
            vl = (val>>>(i*4))&0x0f;
            str += vh.toString(16) + vl.toString(16);
        }
        return str;
    };

    function cvt_hex(val) {
        var str="";
        var i;
        var v;

        for( i=7; i>=0; i-- ) {
            v = (val>>>(i*4))&0x0f;
            str += v.toString(16);
        }
        return str;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };

    var blockstart;
    var i, j;
    var W = new Array(80);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A, B, C, D, E;
    var temp;
    msg = Utf8Encode(msg);
    var msg_len = msg.length;
    var word_array = new Array();

    for( i=0; i<msg_len-3; i+=4 ) {
        j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
        msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
        word_array.push( j );
    }

    switch( msg_len % 4 ) {

        case 0:
            i = 0x080000000;
            break;
        case 1:
            i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
            break;
        case 2:
            i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
            break;
        case 3:
            i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8    | 0x80;
            break;
    }

    word_array.push( i );

    while( (word_array.length % 16) != 14 ) word_array.push( 0 );
      word_array.push( msg_len>>>29 );
      word_array.push( (msg_len<<3)&0x0ffffffff );

    for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {

        for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
        for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);

        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;

        for( i= 0; i<=19; i++ ) {
            temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        for( i=20; i<=39; i++ ) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        for( i=40; i<=59; i++ ) {
            temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        for( i=60; i<=79; i++ ) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }

    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

    return temp.toLowerCase();
}

