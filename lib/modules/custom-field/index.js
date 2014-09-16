module.exports = customField;

function customField(options, callback) {
  return new customField.CustomField(options, callback);
}

customField.CustomField= function(options, callback) {

  var self = this;

  var _apos = options.apos;
  var _app = options.app;
  var _pages = options.pages;

 
  var years = [];
  for(var y =new Date().getFullYear(); y > 1990 ; y--){
    years.push({label:y,value:y});
  }

  console.log(years);
  options.addFields.push({
      name: 'year',
      label: 'Year',
      type : 'select',
      choices: years,
      required: true
  });

  console.log(options);
  module.exports.Super.call(this, options, null);

  if (callback) {
    process.nextTick(function() { return callback(null); });
  }
};