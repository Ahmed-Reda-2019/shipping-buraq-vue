import {Action, Mutation, Module, VuexModule} from "vuex-module-decorators";
import {Actions, Mutations} from "@/store/enums/StoreEnums";

interface Breadcrumb {
    title: string;
    pageBreadcrumbPath: Array<string>;
}

interface Currency {
    iso_code;
    multiplier;
    symbol;
}

interface StoreInfo {
    breadcrumbs: Breadcrumb;
}

@Module
export default class CurrencyModule extends VuexModule {
    currency_iso_code = 'EUR';
    currency_symbol = '€';
    currency_multiplier = 1;
    allCurrencies = [];

    /**
     * Get breadcrumb object for current page
     * @returns object
     */
    get getIso() {
        return this.currency_iso_code;
    }

    get getSymbol() {
        return this.currency_symbol;
    }

    get getMultiplier() {
        return this.currency_multiplier;
    }

    get getallCurrencies() {
        return this.allCurrencies;
    }

    @Mutation
    [Mutations.SET_Currencies](payload) {
        if (this.allCurrencies[payload]) {
            this.currency_multiplier = this.allCurrencies[payload]['multiplier'];
            this.currency_symbol = this.allCurrencies[payload]['symbol'];
            this.currency_iso_code = this.allCurrencies[payload]['iso_code'];
            return true;
        }
        return false
    }

    @Action
    [Mutations.SET_ALL_Currencies](payload) {
        this.allCurrencies = payload
    }
}
