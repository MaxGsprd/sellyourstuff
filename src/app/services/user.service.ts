import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { IUserResponseDto } from '../models/dtos/IUserResponseDto';
import { IUserRequestDto } from '../models/dtos/IUserRequestDto';
import { IUserLoginDto } from '../models/dtos/IUserLoginDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private url: string = "Users";

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<IUserResponseDto[]> {
    return this.http.get<IUserResponseDto[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getUser(id: number): Observable<IUserResponseDto> {
    return this.http.get<IUserResponseDto>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public registerUser(userDto: IUserRequestDto): Observable<IUserResponseDto> {
    return this.http.post<IUserResponseDto>(`${environment.apiUrl}/${this.url}`, userDto);
  }

  public userLogin(credentials: IUserLoginDto): Observable<string> {
    return this.http.post(`${environment.apiUrl}/${this.url}/login`, credentials, {
      responseType:  'text'
    });
  }

  public updateUser(user: IUserRequestDto) :Observable<IUserRequestDto> {
    return this.http.patch<IUserRequestDto>(`${environment.apiUrl}/${this.url}`, user);
  }

  public deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${this.url}/${id}`);
  }
}
