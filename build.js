var marked = require('marked')
  , handlebars = require('handlebars')
  , fs = require('fs')
  , path = require('path')

  , template = handlebars.compile(fs.readFileSync(path.join(__dirname, 'template.hbs')).toString())
  , readme = fs.readFileSync(path.join(__dirname, 'README.md')).toString()
  ;

fs.writeFileSync('index.html', template({readme: marked(readme)}))
