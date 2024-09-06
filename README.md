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


# Backend: NestJS
- Controllers: handling HTTP requests and returning reponses to the client
- Services: handle data operations and interact with database/external APIs
- Modules: logical units that group related functionilities
## Data Transfer Object(DTO): used to transfer data from client to server
- Validators: Validation pipe
- Whitelisting: handling unnecessary data from the request; forbidding non-whitelisted properties
- Transformation: Instance transformation (DTO), Type Transformation from URL parameters
## MongoDB
- Collections, Documents, Schema
- Mongoose library
## Authentication and Authorization
- Authentication: verify the identity of a user
- Authorization: determine whether a user has the permission to do sth
## JSON Web Tokens(JWT)
- represents the proof of authentication
- **Encoding**: converting data from one to another format; reversible; one-to-one; transform object into a string format
- **Encryption**: required a key; not always one-to-one; hard to reverse
- Structure
    - Header: contains algorithm and type of token
    - Payload: contains the information we want to transmit
    - Signature: gernerated by encode the header+payload+secretKey
- Workflow:
    - Login: the server authenticates the user and generates a JWT 
    - Server sends the jwt to the client, and client stores it (cookies/localstorage)
    - The browser sends an Http request along with the token in the header
    - The serve recieve the token, verifies the singature and decodes the payload
    - Grant access if token is valid and user has the access
- A: Encoded header, B: Encoded payload, C: signature(S secretKey)
    - server -> A.B.C -> client/localstorage 
    - {role: 'user'} => {role:'admin'} (B -> B+)
    - client -> A.B.C -> server -> A, B, C -> decode B -> new singature C+(A, B+, S) -> compare C+ with C -> valid if matched / Not valid
- Client side: Http Interceptor
- XSS: http-only cookie, Refresh token
1. user logs in, server issue an access token(AT) and a refresh token(RT)
2. For subsequent requests, if AT is available -> procceed normally
3. If At expired, return error to the client
4. Recieve the error, automatically send the Rt to the server
5. IF RT available, server generates a new access token; otherwise, user has to log in again