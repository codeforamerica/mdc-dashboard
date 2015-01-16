# mdc-dashboard 

## Purpose

The purpose of this project is to iterate the [Miami-Dade County Permit inquiry page](http://egvsys.miamidade.gov:1608/WWWSERV/ggvt/bnzaw960.dia) hoping to do the following:

- Bring in empathic, user-driven design to iterate on a product that displays permits associated under a given identifier: a name, a contracting license number, folio number or a property/address.
- We are making assumptions that the dashboard can be used both internally - by county employees - as well as externally, through homeowners or contractors.
- The application should be modular: we’re starting with permits, but dashboards could include other types of licensing, inspections, status checks, etc.

## Technical Details

The first iteration of the prototype was presented as a static prototype using HTML, CSS and jQuery due to time restraints. We used the Railway font provided as part of the skeleton framework and light iconography was provided by Font-Awesome. Build tools included the use of the following: grunt, Sass, compass, assemble.io.


If we were the iterate on this prototype for the future, we would look into using stubbed JSON data to make this prototype dynamic (using a [fixed data set that was provided from Code for Miami](https://github.com/Code-for-Miami/2013-14-Permits-Issued-Data-Set)), and then investigate the feasibility to scrape single-form POST submissions (Ruby or Python library? KimonoLabs?) from the Miami-Dade County website itself.

## Team Members

Sophia Dengo, Mathias Gibson, Ernie Hsiung.
