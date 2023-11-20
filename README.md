# TemplateOutletApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

sEE https://www.tutorialspoint.com/ngx_bootstrap/ngx_bootstrap_environment.htm

See https://angular.io/api/common/NgTemplateOutlet
See https://angularindepth.com/posts/1405/ngtemplateoutlet
See https://dev.to/railsstudent/customize-template-with-ngtemplateoutlet-and-ngtemplate-in-angular-k5l
See https://angularindepth.com/posts/1405/ngtemplateoutlet
See https://dzone.com/articles/not-sure-how-to-use-ngtemplateoutlet-let-us-show-y
See https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/
See https://angular.io/api/common/NgComponentOutlet



NgTemplateOutlet

ngTemplateOutlet acts as a placeholder to render a template after providing that template with context. In our case we want a template placeholder for each dropdown option and the context would be the shark.

The Angular documentation for ngTemplateOutlet is currently a little lacking. This issue has been raised and ideas on how to demonstrate the feature have started being shared.
Defining a Template

Before we can use ngTemplateOutlet we must first define a template using <ng-template>. The template is the body of the <ng-template> element.

<ng-template #myTemplate>
  <div>Hello template</div>
</ng-template>

To reference the template we name it via # syntax. By adding #myTemplate to the element we can get a reference to the template using the name myTemplate . The type of myTemplate is [TemplateRef](https://angular.io/api/core/TemplateRef).
Rendering a Template

The content of a <ng-Template> element is not rendered in the browser. To have the template body rendered we must now pass the template reference to a ngTemplateOutlet.

<!-- Define our template -->
<ng-template #myTemplate> World! </ng-template>
 
Hello
<!-- Render the template in this outlet -->
<ng-container [ngTemplateOutlet]="myTemplate"></ng-container>

Hello World Template

Rendered output of our template and outlet

ng-template and ngTemplateOutlet enable us to define re-usable templates which in itself is a powerful feature but we are just getting started!
Supplying the Template Context

We can take templates to the next level by supplying a context. This enables us to pass data to the template. In our case the data is the shark for the current option. To pass context to a template you use [ngTemplateOutletContext].

Here we are passing each dropdown option to the optionTemplate. This will enable the option template to display a different value for each item in the list. We are also setting the current index to the idx property of our context as this can be useful for styling.

<li *ngFor="let item of items; index as i">
  <!-- Setting the option as the $implicit property of our context along with the row index -->
  <ng-container
    [ngTemplateOutlet]="optionTemplate"
    [ngTemplateOutletContext]="{ $implicit: option, idx: i }"
  ></ng-container>
</li>
 
<!-- selector.component.html -->

You can also use the abbreviated syntax below.

<!-- Alternative syntax -->
<ng-container
  *ngTemplateOutlet="optionTemplate; context:{ $implicit: option, idx: i }"
></ng-container>

Using the Context in your template

To access the context in our template we use let-* syntax to define template input variables. To bind the $implicit property to a template variable called option we add let-option to our template. We can use any name for our template variable so let-item or let-shark would also bind to the $implicit property in the context.

This enables us to define a template outside of the selector component but with access to current option just as if our template was defined in the dropdown itself!

<ng-template #optionTemplate let-option let-position="idx">
  {{ position }} : {{option}}
</ng-template>
 
<!-- client-one.component.html -->

To access the other properties on our context we have to be more explicit. To bind the idx value to a template variable called position we add let-position=idx. Alternatively we could name it id by adding let-id=idx.

Note that we must know the exact property name when extracting values from the context that are not the $implicit property. The $implicit property is a handy tool which means users do not have to be aware of this name as well as having to write less code.

By using template input variables we are able to combine state from where we define the template, with the context provided to us where the template is instantiated. This provides us with some amazing capabilities!



See https://angularindepth.com/posts/1234/implementing-shared-logic-for-crud-ui-components-in-angular
See https://github.com/dasch-swiss/dsp-ui-lib/blob/f27b1758822d56e8f38ffdfa2b7d03b443dedeb6/projects/knora-ui/src/lib/viewer/operations/display-edit/display-edit.component.html

See https://angularindepth.com/posts/1189/angular-bad-practices-revisited
See https://angularindepth.com/posts/1155/build-your-own-observable-part-1-arrays;
See https://angularindepth.com/posts/1157/building-your-own-observable-part-3-the-observer-pattern-and-creational-methods
See https://angularindepth.com/posts/1158/build-your-own-observable-part-4-map-filter-take-and-all-that-jazz

See https://angularindepth.com/posts/1297/building-a-reusable-menu-component
See https://angularindepth.com/posts/1314/agnostic-components-in-angular
See https://angularindepth.com/posts/1439/learn-angular-component-design-patterns-creating-a-drawer-component-2
See https://angularindepth.com/posts/1065/do-you-really-know-what-unidirectional-data-flow-means-in-angular
See https://angularindepth.com/posts/1119/the-essential-difference-between-constructor-and-ngoninit-in-angular
See https://angularindepth.com/posts/1004/the-mechanics-of-property-bindings-update-in-angular
See https://angularindepth.com/posts/1163/implementing-custom-component-decorator-in-angular
See https://angularindepth.com/posts/1129/the-mechanics-of-dom-updates-in-angular
See https://angularindepth.com/posts/1405/ngtemplateoutlet
See https://angularindepth.com/posts/1414/angular-and-solid-principles
See https://angularindepth.com/posts/1414/angular-and-solid-principles
See https://angularindepth.com/posts/1478/designing-angular-architecture-container-presentation-pattern
See https://angularindepth.com/posts/1494/complete-guide-angular-lifecycle-hooks
See https://angularindepth.com/posts/1512/change-detection-and-component-trees-in-angular-applications




