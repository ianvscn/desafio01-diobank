import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingAccount } from './class/SavingsAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Ian', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
peopleAccount.withdraw(11)
peopleAccount.withdraw(5)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(200)
console.log(companyAccount)

const savingAccount: SavingAccount = new SavingAccount('Poupança', 30)
savingAccount.deposit(100)
console.log(savingAccount)