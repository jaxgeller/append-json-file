var fs = require('fs-extra');
var _ = require('lodash');

function append(prop, file, cb) {
  
  fs.readJson(file, function(err, data) {

    if (err && err.code === 'ENOENT') {
      fs.outputJson(file, prop, function(err) {
        return cb()
      })
    }
    else if (!data) {
      fs.outputJson(file, prop, function(err) {
        return cb()
      })
    }
    else {
      var merged = _.merge(data, prop);
      fs.outputJson(file, merged, function(err) {
        return cb()
      })
    }

  })

}


module.exports = append;
