const Modal = {
    open (){
        //abrir modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close (){
        //fechar modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Criação de website',
        amount: 500000,
        date: "19/11/2021",
    },

    {
        id: 2,
        description: 'Luz',
        amount: -50000,
        date: "19/11/2021",
    },

    {
        id: 3,
        description: 'Mercado',
        amount: -150000,
        date: "19/11/2021",
    },

    {
        id: 4,
        description: 'Aluguel',
        amount: -100000,
        date: "19/11/2021",
    },
]

const Transaction = {
    incomes(){

    },
    expenses (){

    },
    total(){
        
    }
}