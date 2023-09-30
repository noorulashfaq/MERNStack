let customersData = [
    {
        'acc_holder': 'Noorul',
        'acc_number': 6002206892,
        'acc_balance': 400
    },
    {
        'acc_holder': 'Subash',
        'acc_number': 9874563210,
        'acc_balance': 1000
    }
];

const view = () => {
    customersData.map((value, index) => {
        console.log(value)
    })
}

const openAccount = (accNum, accName, accBal) => {
    customersData.push({
        'acc_holder':accName, 'acc_number':accNum, 'acc_balance':accBal
    });
    console.log(accName+" has opened a new account")
}

const withdrawal = (accNum, withdrawalAmt) => {
    for(var i of customersData){
        if(i.acc_number == accNum){
            if(withdrawalAmt<=i.acc_balance){
                i.acc_balance -= withdrawalAmt
                console.log(withdrawalAmt+ " debited from "+i.acc_holder+"'s account")
            }
            else{
                console.log("Insufficient balance in account")
            }
        }
        else{
            console.log("Invalid account")
        }
        break
    }
}

// view()

openAccount(1234567890,'Ashfaq',500)
view()

withdrawal(6002206892,400)
view()

// console.log(Welcome)
// console.log('-----------------------')
