## Hello team

**AngularJS**: Model View Controller, JavaScript<br>
**Angular2+**: Model(Service) View(templates) ViewModel(Component), TypeScript

### Angular Command Line Interface
**Install**: ```npm install -g @angular/cli@15```

**New project**:```ng new projectName```

**New module**: ```ng g m moduleName```
<br>
**New component**: ```ng g c componentName```
<br>
**Run project**: ```ng serve```

### TypeScript
- **Superset** of JavaScript. 
- **Transpile** to JS
- **Static type**

## Service
- Reusable piece of code with a specific purpose such as handling the data
- Singleton
- Dependency Injection(DI)

## HttpClient
- service, exists in HttpClientModule
- contains Http methods like GET, POST, PUT, DELETE...
## Observables VS Promise
- Stream of data; Single value
- Lazy ; Eager
- Can be stopped by unsubscribing; cannot stop
- Operators
- Observer(Followers) subscribes to Observerble(Youtube Channel) / Subscription

## Forms
- Template-driven forms: logics stay in the template; using directives like ngModel, ngSubmit
- Model-driven Forms / Reactive forms: FormControl, FormGroup, FormArray; FormBuilder

## Subject
- Multiple subscribers to the same instance
- **BehaviorSubject**: Emit latest value
- **ReplaySubject**: Save all the values and emit all of them when subscribed

## RxJS Operators
- Creation operators: of, from, fromEvent, interval, forkJoin
- Pipeable Operators: pipe, tap, delay, debounceTime, thorttleTime, filter, take, takeUntil, concatMap, switchMap, mergeMap, map

## Advanced Routing
- Navigation Events
- Lazy loading
- Route Parameters: Path parameter, Query Parameter(Optional), Data injection
- Route Guards: CanActivate, CanDeactivate, CanActivateChild, CanLoad, CanMatch
- Resolver: retrieve data before the route is activated
