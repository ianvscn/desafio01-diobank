import { DioAccount } from "./DioAccount";

export class SavingAccount extends DioAccount{

    deposit = (valor:number): void => {
        this.setBalance(this.getBalance()+valor+10)
        console.log("Depósito feito! Novo saldo: "+this.getBalance())
    }
}