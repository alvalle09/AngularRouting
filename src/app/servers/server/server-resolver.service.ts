import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";



export class ServerResolver implements Resolve<{id: number, name: string, status: string}> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{id: number, name: string, status: string}> {

    }
}


