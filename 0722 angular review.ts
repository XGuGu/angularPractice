// angualr version jungle
angularJS(2010)
angular2(2016) completely rewrite
after angualr2, focusing on treating single page applications, and they are highly component driven

angular4(2017)
angular5(2017)
angular(2018)

// why do I need CLI ?
TypeScript instead of Javascript (compilation step to vanilla Jacascript)
Components and Templates (compilation step to Javascript code)
Optimizations Required (Bundle, minify, codesplitting(lazy load))

Webpack, tsc, ....

CLI does all that !

// Debugging Angular Apps
Read the Error Message!
Good old console.log() debugging !
Use Source maps & browser dev tools
augury !
Redux DevTools

// How can I pass data from Component A to Component B ?
appComponent <=> ProductsComponent <=> ProductComponent
1.[Property Binding] => @Input()
2.By Service
3.(EventBinding) => @Output()

// Angular + PHP/Node/Ruby ..... ?
Angular -> Only good at creating SPAs
Backend -> Provide RESTful API(and potentially render first page => index.html)

// Can I use Redux?
with ngRX, we can send data between Services and using ngRx and subscribes()

Redux offers a Redux store, where is the center of our application, and we store data, and where we connect different parts of our app. So our components can receives
data from the store or dispatch actions to the store

// My state is lost after page reloaded .
store state across page reloads :
local storage

// Using third party css libraries
<link href="..." > in index.html
npm install LIBRARY + Entry in styles[] in angular-cli.json file 
