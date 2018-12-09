import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_URL = 'https://studyja-api.azurewebsites.net/';

@Injectable()

export class Signup {
    constructor(private http: HttpClient) { }

    signup(email: String, name: String, lastName: String, genre: String, from: String, cpf: Number, institute: String, date: String, password: String) {
        return this.http.post(`${API_URL}usuarios/cadastro`,
            {
                usu_nome: name,
                usu_sobrenome: lastName,
                usu_naturalidade: from,
                usu_sexo: genre,
                usu_dat_nascimento: date,
                usu_email: email,
                usu_senha: password,
                usu_cpf: cpf,
                usu_not_email: "T",
                usu_not_telefone: "T",
                usu_dat_autenticacao: new Date().toISOString().slice(0, 19).replace('T', ' '),
                usu_ins_id: 1
            })
    }
}

