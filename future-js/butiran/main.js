/*
	butiran.js
	Simulation for granular particles system
	
	Sparisoma Viridi | dudung@gmail.com
	
	Execute:
	node main.js
	
	Compile:
	webpack main.js --mode=production -o dist\butiran.min.js
	webpack main.js --mode=none -o dist\butiran.js
	
	Version info:
		Node.js	v10.1.0
		webpack	4.8.3
		npm 5.6.0
	
	20180519
	Start recreating this library, now with node.js support
	and try to use ES modules, which is still experimental.
	20180520
	Write how to node and webpack of butiran.js to get
	butiran.js.min file in dest folder.
	Add class of Polynomial to this script, test it, and ok.
	Random, Integration, RGB functions and Timer class are
	also ok.
	20180527
	Port Vect3, Grain from old version.
	20180603
	Fix Grain and add new Buoyant, Gravitation, Electrostatic,
	Normal, Spring.
	Change folder structure.
	20180612
	Add grid/tablet.js for grid based simulation of tablet
	dissolution.
	20180613
	Find webpack with mode=none which produces not optimized
	output of butiran.js in one file.
	20180614
	Add css/style.js library to this. Change folder from lib/css
	to lib.
	Add tabtext.js and tabcanvas.js libraries and functions.
	20180618
	Add math/transformation.js for drawing in tab.js class.
	20180619
	Add tabs and bgroup from app to lib/ui folder.
	20180627
	Add pile from lib/grid folder.
	
	20190528 Revisit last year code and start selecting.
	0221 Remove Resistor in lib/electronic.
	0222 Remove lib/log.
	0223 Remove lib/ui.
	0230 Resort storing libraries in window.
	0232 Rename butiran.js to main.js as main library of butiran.
	0238 Test compiling after cleaning and ok.
	
	20190528
	0844 Add lib/math/path for scspg app.
	
	20190530
	1222 Add lib/data/points for spfwfs app.
	
	20190602
	1718 Add lib/ui for sslssgm app.
	
	20190616
	2019 Add lib/box for gfhtgr app.
	2032 Empty class is ok, fix at 2041.
	
	20160617
	0733 Finally install webpack in campus with command
	npm config set proxy http://user:pwd@proxy:port
	npm install -g webpack
	npm install -g webpack-cli
	0805 Done and webpack works as usual.
	0903 Add veio in lib/ui.
	
	References
	1. url https://www.competa.com/blog/how-to-run-npm
	   -without-sudo/ [20190617].
*/

// lib
var Grain = require('./lib/grain')();
var Style = require('./lib/style');
var Vect3 = require('./lib/vect3')();
var Box = require('./lib/box')();

// lib/color
var RGB = require('./lib/color/rgb');

// lib/force
var Buoyant = require('./lib/force/buoyant')();
var Drag = require('./lib/force/drag')();
var Electrostatic = require('./lib/force/electrostatic')();
var Gravitational = require('./lib/force/gravitational')();
var Magnetic = require('./lib/force/magnetic')();
var Normal = require('./lib/force/normal')();
var Spring = require('./lib/force/spring')();

// lib/generator
var Generator = require('./lib/generator/generator')();
var Random = require('./lib/generator/random');
var Sequence = require('./lib/generator/sequence')();
var Timer = require('./lib/generator/timer')();
var Sample = require('./lib/generator/sample')();

// lib/grid
var Tablet = require('./lib/grid/tablet');
var Pile = require('./lib/grid/pile')();

// lib/math
var Integration = require('./lib/math/integration');
var Polynomial = require('./lib/math/polynomial')();
var Transformation = require('./lib/math/transformation');
var Path = require('./lib/math/path')();

// lib/data
var Points = require('./lib/data/points')();

// lib/ui
var TabText = require('./lib/ui/tabtext.js');
var TabCanvas = require('./lib/ui/tabcanvas.js');
var Parse = require('./lib/ui/parse.js');
var Tabs = require('./lib/ui/tabs.js')();
var Bgroup = require('./lib/ui/bgroup.js')();
var Veio = require('./lib/ui/veio.js');

// Store information 
if(typeof window !== 'undefined') {
	// Store to window object -- 20180519.2358
	
	// lib
	window["Grain"] = Grain;
	window["Style"] = Style;
	window["Vect3"] = Vect3;
	window["Box"] = Box;
	
	// lib/color
	window["RGB"] = RGB;
	
	// lib/force
	window["Buoyant"] = Buoyant;
	window["Drag"] = Drag;
	window["Electrostatic"] = Electrostatic;
	window["Gravitational"] = Gravitational;
	window["Magnetic"] = Magnetic;
	window["Normal"] = Normal;
	window["Spring"] = Spring;
	
	// lib/generator
	window["Generator"] = Generator;
	window["Random"] = Random;
	window["Sequence"] = Sequence;
	window["Timer"] = Timer;
	window["Sample"] = Sample;
	
	// lib/grid
	window["Tablet"] = Tablet;
	window["Pile"] = Pile;
	
	// lib/math
	window["Path"] = Path;
	window["Polynomial"] = Polynomial;
	window["Integration"] = Integration;
	window["Transformation"] = Transformation;
	
	// lib/data/points
	window["Points"] = Points;
	
	// lib/ui
	window["TabText"] = TabText;
	window["TabCanvas"] = TabCanvas;
	window["Parse"] = Parse;
	window["Tabs"] = Tabs;
	window["Bgroup"] = Bgroup;
	window["Veio"] = Veio;
}
