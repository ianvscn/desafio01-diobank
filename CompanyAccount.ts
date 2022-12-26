import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{

    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    getLoan = (valor:number): void => {
        if(this.getStatus()){
            this.setBalance(this.getBalance()+valor)
            console.log("Empréstimo solicitado! Novo saldo: "+this.getBalance())
        }
    }

    deposit = (): number => {
        return 2
    }
}
