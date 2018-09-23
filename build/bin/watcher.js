const path = require('path');
const templates = path.resolve(process.cwd(), './examples/pages');

const chokidar = require('chokidar');
let watcher = chokidar.watch([templates]);

watcher.on('ready', function() {
  watcher
    .on('change', function() {
      exec('echo "examples/pages/* changed!" ');
    });
});

function exec(cmd) {
  return require('child_process').execSync(cmd).toString().trim();
}
