import ApiService from "@/core/services/ApiService";
import JwtService, {getUserData} from "@/core/services/JwtService";
import {Actions, Mutations} from "@/store/enums/StoreEnums";
import {Module, Action, Mutation, VuexModule} from "vuex-module-decorators";
import {defaultDrawerOptions} from "@/assets/ts/components";
import axios from "axios";

export interface User {
    name: string;
    surname: string;
    email: string;
    password: string;
    token: string;
}

export interface UserAuthInfo {
    errors: Array<string>;
    user: User;
    isAuthenticated: boolean;
    submitted: boolean;
    guard: string;
}

@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
    errors = [];
    user = JwtService.getUserData();
    isAuthenticated = !!JwtService.getToken();
    submitted = false;
    guard = "";

    /**
     * Get current user object
     * @returns User
     */
    get currentUser(): User {
        return this.user;
    }

    /**
     * Verify user authentication
     * @returns boolean
     */
    get isUserAuthenticated(): boolean {
        return this.isAuthenticated;
    }

    get isCoustomer(): boolean {
        return this.isAuthenticated && this.guard == "customer";
    }

    get isCp(): boolean {
        return this.isAuthenticated && this.guard == "cp";
    }

    /**
     * Get authentification errors
     * @returns array
     */
    get getErrors(): Array<string> {
        return this.errors;
    }

    @Mutation
    [Mutations.SET_ERROR](error) {
        this.errors = error;
    }

    @Mutation
    [Mutations.SET_Submitted](status) {
        this.submitted = status;
    }

    @Mutation
    [Mutations.SET_AUTH](data) {
        data.data.guard = data.guard;
        this.isAuthenticated = true;
        this.user = data.data;
        this.errors = [];
        JwtService.saveToken(data.access_token, this.user);
    }

    @Mutation
    [Mutations.SET_USER](user) {
        this.user = user;
        if (user.token)
            JwtService.saveToken(this.user.token, this.user);
        else
            JwtService.saveUser(user);
    }

    @Mutation
    [Mutations.GET_USER](playload = "") {
      if (!JwtService.getUserData())
        return  {};

        if (playload == "")
            return JwtService.getUserData();
        else if (this.user[playload])
            return this.user[playload];
        else
            return this.user;
    }

    @Mutation
    [Mutations.SET_PASSWORD](password) {
        this.user.password = password;
    }

    @Mutation
    [Mutations.PURGE_AUTH]() {
        // ApiService.get("auth/login")
        this.isAuthenticated = false;
        this.user = {} as User;
        this.errors = [];
        JwtService.destroyToken();
    }


    @Action
    [Actions.LOGIN](credentials, url = "auth/login") {
        if (credentials.url) {
            url = credentials.url
            credentials = credentials.values
        }

        return axios.post(url, credentials).then(({data}) => {
            this.context.commit(Mutations.SET_AUTH, data);
        })

    }

    @Action
    [Actions.LOGOUT]() {
        this.context.commit(Mutations.PURGE_AUTH);
    }

    @Action
    [Actions.REGISTER](credentials, url = "auth/register") {

        if (credentials.url) {
            url = credentials.url
            credentials = credentials.values
        }

        return new Promise<void>((resolve, reject) => {
            ApiService.post(url, credentials)
                .then(({data}) => {
                    this.context.commit(Mutations.SET_AUTH, data);
                    resolve();
                })
                .catch((response) => {
                    ApiService.errors = response.data.errors;
                    this.context.commit(Mutations.SET_ERROR, response.data.errors);
                    // reject();
                });
        });
    }

    @Action
    [Actions.FORGOT_PASSWORD](payload) {
        return new Promise<void>((resolve, reject) => {
            ApiService.post("forgot_password", payload)
                .then(({data}) => {
                    this.context.commit(Mutations.SET_AUTH, data);
                    resolve();
                })
                .catch(({response}) => {
                    this.context.commit(Mutations.SET_ERROR, response.data.errors);
                    reject();
                });
        });
    }

    @Action
    [Actions.VERIFY_AUTH]() {
        if (JwtService.getToken() || JwtService.getUserData()) {
            ApiService.setHeader();
        } else {
            this.context.commit(Mutations.PURGE_AUTH);
        }
    }

    @Action
    [Actions.UPDATE_USER](payload) {
        ApiService.setHeader();
        return new Promise<void>((resolve, reject) => {
            ApiService.post("update_user", payload)
                .then(({data}) => {
                    this.context.commit(Mutations.SET_USER, data);
                    resolve();
                })
                .catch(({response}) => {
                    this.context.commit(Mutations.SET_ERROR, response.data.errors);
                    reject();
                });
        });
    }
}
