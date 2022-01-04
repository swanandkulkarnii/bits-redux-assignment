# bits-redux-assignment
1. Created a basic react application with folder structure provided below
- Folder structure
src
 -> ConnorsGroup.Client.React
    -> features
       -> app
	  ->users
            -> components
            -> action
            -> reducers
            -> selector
            -> styles
            -> routes.js  
    -> store
	-> configureStore.dev.js
    -> styles
        -> style.scss
    -> App.js
    -> Root.js
    -> index.js
    -> routes.js
    -> rootReducer.js
    -> node_modules
    -> package.json
-> readme.md

2. Installed kendo grid community edition @progress/kendo-react-grid
-Install the Grid package together with its dependencies by running the following command:

 npm install --save @progress/kendo-angular-grid @progress/kendo-angular-dropdowns @progress/kendo-angular-treeview @progress/kendo-angular-inputs @progress/kendo-angular-dateinputs @progress/kendo-data-query @progress/kendo-angular-intl @progress/kendo-angular-l10n @progress/kendo-angular-label @progress/kendo-drawing @progress/kendo-angular-excel-export @progress/kendo-angular-buttons @progress/kendo-angular-common @progress/kendo-angular-pdf-export @progress/kendo-angular-popup @progress/kendo-licensing
The next step is to style the component by installing one of the available Kendo UI themes—Kendo UI Default, Kendo UI Material, or Kendo UI Bootstrap.

2.1 To start using a theme, install its package through NPM.

Default theme

npm install --save @progress/kendo-theme-default
Bootstrap theme

npm install --save @progress/kendo-theme-bootstrap
Material theme

npm install --save @progress/kendo-theme-material
 
3. Created a kendoGrid to show users list using the users listing api with pagination
-Using Grid, GridColumn components- and their props like- height,rowHeight,data,pageSize,total,skip,scrollable,onPageChange.

4. Pagination mode should be virtual scrolling with server side pagination
-Using scrollable virtual

5. Use Map functions get/set to set new page data in reducer, use selector to fetch data for the grid
-Set the initial state using immutable Map. 
