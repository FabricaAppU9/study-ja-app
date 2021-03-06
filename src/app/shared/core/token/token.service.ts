import { Injectable } from "@angular/core";

const KEY = 'authToken';
@Injectable()

export class TokenService{

    hasToken(){
        return !!this.getToken();
    }

    setToken(token){
        window.localStorage.setItem(KEY, token);
    }

    getToken(){
        window.localStorage.getItem(KEY);
    }

    removeToken(){
        window.localStorage.removeItem(KEY);
    }

}