import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface UserDetails {
  id: number
  pseudo: string
  email: string
  mdp: string
  exp: number
  iat: number
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  id: number
  pseudo: string
  email: string
  mdp: string
}

@Injectable()
export class AuthenticationService {
  private token: string

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public register(user: TokenPayload): Observable<any> {
    return this.http.post('/api/register', user)
  }

  public login(user: TokenPayload): Observable<any> {
    /*const base = this.http.post(`/api/login`, user)
    alert("ON EST DANS LOGIN DE AUTHENTICATION SERVICE")
    const request = base.pipe(
      map((data: TokenResponse) => {
        alert("ON EST DANS LE MAP DE LOGIN DANS AUTHENTICATION SERVICE")
        if (data.token) {
          alert("LE DATA TOKEN EXISTE")
          this.saveToken(data.token)
        }
        alert("On a finit le map et on renvoie data: "+data)
        return data
      })
    )
    return request*/
    return this.http.post('/api/login', user)
  }

  public profile(): Observable<any> {
    return this.http.get(`/api/profile`, {
      headers: { Authorization: ` ${this.getToken()}` }
    })
  }

  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/')
  }
}