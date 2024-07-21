Validation
    Required
    MinLength
    MaxLength
    Patten
    min
    max
    isNumeric
    Async/Remote Validation
    Custom Validation
    Dynamic Validation

Dynamic Forms
Strongly Typed Form
Angular 18 Event

Routing 
    Guard Security -- done 
    Lazy Module -- done
    Resolver -- done 
    Data -- done
    Event -- done 

HttpClient
    RXJS Operators --tap, map, switchmap, take, delay, distinctUntilChanged, debounce ==> done
    RXJS mutliple call ==> done
    Subject ==> done
    Signal // RXJS  
    
    Interceptor ==> done
    Api call on module load ==> done
    provideIn ==> done

ViewChildren ==> done
ViewChild  ==> done
Angular 18 ==> done
Curd API   ==> done

ReactJS 6 PM ==> .NET CORE, REACTJS
Typescript
Javascript 
ReduxJS 

JavaSpring + DOcker 13
Selenium
Golang 

DSA 
Java Spring Project


// Program.cs
//Add CORS to allow calls from FrontEnd.
builder.Services.AddCors(option => option.AddPolicy(name: "ABC_UI",
policy =>
{
    policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader()
}));
    
app.UseCors("ABC_UI");
app.UseHttpsRedirection();