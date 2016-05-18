export var name = "@redsift/d3-rs-text-icon";
export var version = "0.0.1";
export var description = "Generates a square text icon using D3v4.";
export var keywords = ["text","redsift","d3","icon"];
export var homepage = "https://github.com/redsift/d3-rs-text-icon";
export var license = "MIT";
export var author = {"name":"Rahul Powar","url":"https://medium.com/@rahulpowar"};
export var main = "distribution/d3-rs-text-icon.umd-es2015.min.js";
export var repository = {"type":"git","url":"https://github.com/redsift/d3-rs-text-icon.git"};
export var scripts = {"serve":"gulp -o d3-rs-text-icon -g d3-selection -g @redsift/d3-rs-svg serve","build":"gulp -o d3-rs-text-icon -g d3-selection -g @redsift/d3-rs-svg build","pretest":"npm outdated && npm run build","test":"tape 'test/**/*-test.js' && eslint index.js src","version":"json2module package.json > package.js","prepublish":"npm run build"};
export var dependencies = {"d3-selection":"~0.7.2","@redsift/d3-rs-svg":"~0.2.3"};
export var devDependencies = {"@redsift/tape-reel":"~0.0.2","babel-preset-es2015-rollup":"^1.1.0","browser-sync":"^2.12.8","del":"^2.2.0","eslint":"^2.10.2","gulp":"^3.9.1","gulp-rename":"^1.2.2","gulp-sourcemaps":"^2.0.0-alpha","gulp-uglify":"^1.5.3","gulp-util":"^3.0.7","json2module":"~0.0.3","rollup":"^0.26","rollup-plugin-babel":"^2.4.0","rollup-plugin-includepaths":"^0.1.2","rollup-stream":"^1.4.1","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.1.0","yargs":"^4.7.1"};
