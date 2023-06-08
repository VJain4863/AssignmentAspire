import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ticket } from '../_models/ticket';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';

@Injectable({ providedIn: 'root' })
export class TicketService {
    user:any;
    constructor(private http: HttpClient, private acc:AccountService) { 
        this.user= this.acc.userValue;
    }    
    
    public getAllTicket() {
        return this.http.get<Ticket[]>(`${environment.apiUrl}/api/Ticket`);
    }

    public getById(id: number) {
        return this.http.get<Ticket[]>(`${environment.apiUrl}/api/Ticket/`+id);
    }

    public registerTicket(ticket: Ticket) : Observable<any> {
        ticket.userName = this.user.userName;
        return this.http.post<any>(`${environment.apiUrl}/api/Ticket`, Ticket);
    }
    public deleteTicket(id:number):Observable<number>{
        console.log("please confirm",id);
        console.log('${environment.apiUrl}/api/Ticket/${id}');
        return this.http.delete<number>(`${environment.apiUrl}/api/Ticket/`+id);
        //return this.http.delete<number>(`${environment.apiUrl}/api/Ticket`,{params:{id}});
    }
    public updateTicket(data:any, id: number):Observable<any> {
        return this.http.patch<Ticket[]>(`${environment.apiUrl}/api/Ticket/${id}`,data);
    }
 
}