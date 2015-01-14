# mdc-dashboard 

## Purpose

The purpose of this project is to iterate the [Miami-Dade County Permit inquiry page](http://egvsys.miamidade.gov:1608/WWWSERV/ggvt/bnzaw960.dia) hoping to do the following:

- Find details about all permits associated under a given identifier: a name, a contracting license number, folio number or a property/address.
- We are making assumptions that the dashboard can be used both internally - by county employees - as well as externally, through homeowners or contractors.
- The application should be modular: we’re starting with permits, but dashboards could include other types of licensing, inspections, status checks, etc.

## Technical Details

The first iteration of the prototype will be presented in HTML, CSS and Javascript. Assume that we are building for IE8.

Our goal is to use stubbed data (in the form of JSON objects) and then to do research on whether it would be feasible to scrape single-form submissions (Ruby or Python library? KimonoLabs?) or use the [fixed data set that was provided from Code for Miami](https://github.com/Code-for-Miami/2013-14-Permits-Issued-Data-Set).

Also note that the Brigade took this fixed data and [imported the data set into Socrata](https://brigades.opendatanetwork.com/LAND-USE/Miami-Dade-County-Permits-Subset-/jjtb-34fh), which [comes with a baked RESTful API](https://brigades.opendatanetwork.com/developers/docs/miami-dade-county-permits-subset-).

### Installation Instructions

```
First install Node http://nodejs.org/download/. From the command line at root
`sudo npm update -g npm`
`sudo npm install -g grunt-cli`
`sudo npm install -g grunt-init`
`git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile`

Next up is Ruby, also at command line at the root
We'll install RVM for safety's sake:
`\curl -L https://get.rvm.io | bash -s stable --rails --autolibs=enabled`
IF THAT FAILS with error 1, do: `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` and then run the RVM curl command again

http://code.tutsplus.com/tutorials/how-to-install-ruby-on-a-mac--net-21664
go to step 2: load into the shell
restart terminal after following Step 2.
I'm installing Rails: `gem install rails` (just in case)
and this to install Sass: `gem install sass`
`gem install compass` (because we'll be using Compass to manage Gruntfile)
`npm install grunt-contrib-sass --save-dev`
```

### Examples

- Valid address: 4605 SW 12 ST
- Valid permit numbers: 2014049209, 2015006143, 2014037756, 2014041747, 2014054509, 1992080776
- Valid folio numbers: 3041808170540, 3059330000030, (format: 30-5933-000-0030)

## Team Members

Sophia Dengo, Mathias Gibson, Ernie Hsiung.
