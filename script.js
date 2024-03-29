const Modal = {
    open() {
        //abrir modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        //fechar modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}
const Storage = {
    get(){
        return JSON.parse(localStorage.getItem("transactions")) || []
    },

    set(){
        localStorage.setItem("transactions",JSON.stringify(Transaction.all))
    },
}

const Transaction = {
    all: Storage.get(),
    add(transaction) {
        Transaction.all.push(transaction)
        App.reload()
        console.log(Transaction.all)
    },
    remove(index) {
        Transaction.all.splice(index, 1)
        App.reload()
    },
    incomes() {
        let totalIncomes = 0
        Transaction.all.forEach(function (transaction) {
            if (transaction.amount > 0) {
                totalIncomes += transaction.amount
            }
        })

        return totalIncomes
    },
    expenses() {
        let totalExpenses = 0
        Transaction.all.forEach(function (transaction) {
            if (transaction.amount < 0) {
                totalExpenses += transaction.amount
            }
        })

        return totalExpenses
    },
    total() {

        return Transaction.incomes() + Transaction.expenses()
    }
}

const DOM = {
    transactionsContainer: document.querySelector("#data-table tbody"),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
        tr.dataset.index = index

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction, index) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        const amount = utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class= ${CSSclass}>${amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img onclick="Transaction.remove(${index})"src="./assets/minus.svg" alt="Remover"></td>
        </tr>`

        return html
    },
    updateBalance() {
        document.getElementById("incomeDisplay").innerHTML = utils.formatCurrency(Transaction.incomes(Transaction.all))
        document.getElementById("expenseDisplay").innerHTML = utils.formatCurrency(Transaction.expenses(Transaction.all))
        document.getElementById("totalDisplay").innerHTML = utils.formatCurrency(Transaction.total())
    },
    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")
        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    },

    formatAmount(value){
        value = Number(value) * 100

        return Math.round(value)
    },
    formatDate(value){
        const date = value.split("-")
        
        return `${date[2]}/${date[1]}/${date[0]}`
    },
}

const Form = {
    description: document.querySelector("input#description"),
    amount: document.querySelector("input#amount"),
    date: document.querySelector("input#date"),

    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value,
        }
    },

    validateFields() {
        const { description, amount, date } = Form.getValues()

        if (
            description.trim() == "" ||
            amount.trim() == "" ||
            date.trim() == "") {
                throw new Error("Por favor, preencha todos os campos")
        }
    },

    formatValues(){
        let { description, amount, date } = Form.getValues()

        amount = utils.formatAmount(amount)
        date = utils.formatDate(date)

        console.log(amount)
        console.log(date)
        return {
            description,
            amount,
            date
        }
    },

    clearFields(){
        Form.description.value =""
        Form.amount.value = ""
        Form.date.value = ""
    },

    submit(event) {
        event.preventDefault()

        try {
            Form.validateFields()
            const transaction = Form.formatValues()
            Transaction.add(transaction)
            Form.clearFields()
            Modal.close()
            App.reload()
        } catch (error) {  
            alert(error.message)
        }

    },
}

const App = {
    init() {
        Transaction.all.forEach((transaction, index) => {
            DOM.addTransaction(transaction, index)
        })

        DOM.updateBalance()
        Storage.set(Transaction.all)
    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },
}

App.init()






