import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";



export class AuthHttp implements HttpInterceptor{
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('interceptou');

        let valor = localStorage.getItem("armazenadoLocal");

        let request = req.clone({
            setHeaders: {
                'Content-Type' : 'application/json',
                 Authorization: `valor: ${valor}`
            }
        });

        console.log(request);
        return next.handle(request);
    }
 
  
 



}