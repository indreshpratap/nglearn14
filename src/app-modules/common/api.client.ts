import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface ApiResponse {
    data:any;
    status:boolean;
}
@Injectable({ providedIn: 'root' })
export class ApiClient {

    constructor(private http: HttpClient) {

    }

    public get(segment){
        return this.http.get<ApiResponse>(this.getUrl(segment));
    }
    public post(segment,payload){
        return this.http.post<ApiResponse>(this.getUrl(segment), payload);
    }
    public put(segment,payload){
        return this.http.put<ApiResponse>(this.getUrl(segment), payload);
    }


    private getUrl(segment) {
        return environment.apiPath+segment;
    }



}