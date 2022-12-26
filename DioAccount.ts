export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name:string, accountNumber:number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    setBalance = (balance:number): void => {
        this.balance = balance
    }

    getBalance = (): number => {
        return this.balance
    }

    deposit = (valor:number): void => {
        if(this.validateStatus()){
            this.balance += valor
            console.log("Depósito feito! Novo saldo: "+this.balance)
        }
    }

    withdraw = (valor:number): void => {
        if(this.validateStatus()){
            if(this.balance>valor){
                this.balance -= valor
                console.log("Saque feito! Novo saldo: "+this.balance)
            }else{
                console.log('Valor solicitado maior que saldo')
            }
        }
    }

    private validateStatus = (): boolean => {
        if(this.status) {
            return this.status
        }

        throw new Error('Conta invalida')
    }

    getStatus = (): boolean => {
        return this.status
    }
}