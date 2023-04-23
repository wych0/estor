const data = {
    users: [
        {id: 1, name: 'admin', password: 'admin', role: 'admin', isBlocked: false, email: 'admin@gmail.com'},
        {id: 2, name: 'albert', password: 'haslo', role: 'customer', isBlocked: false, email: 'albert@gmail.com'},
        {id: 3, name: 'uzytkownik', password: 'haslo', role: 'customer', isBlocked: true, email: 'user@gmail.com'},
    ],
    orders: [
        {id: 1111111, customer: 2, date: '16.04.2023', cost: 6400, status: 'W realizacji', isDisplayDetails: 'false', products: [1, 2],
        addres:{
            name: 'Albert',
            secName: 'Wychowaniec',
            street: 'Chopina 13',
            postalCode: '52-460',
            city: 'Chorzów',
            email: 'xyz@gmail.com',
            country: 'Polska'
        }},
        {id: 2222222, customer: 2, date: '18.04.2023', cost: 3200, status: 'Zakończone', isDisplayDetails: 'false', products: [3],
        addres:{
            name: 'Albert',
            secName: 'Wychowaniec',
            street: 'Chopina 13',
            postalCode: '52-460',
            city: 'Chorzów',
            email: 'xyz@gmail.com',
            country: 'Polska'
        }},
        {id: 3333333, customer: 3, date: '20.04.2023', cost: 9600, status: 'Anulowane', isDisplayDetails: 'false', products: [4, 5, 6],
        addres:{
            name: 'Albert',
            secName: 'Wychowaniec',
            street: 'Chopina 13',
            postalCode: '52-460',
            city: 'Chorzów',
            email: 'xyz@gmail.com',
            country: 'Polska'
        }},
        {id: 4444444, customer: 3, date: '20.04.2023', cost: 3200, status: 'W realizacji', isDisplayDetails: 'false', products: [7],
        addres:{
            name: 'Albert',
            secName: 'Wychowaniec',
            street: 'Chopina 13',
            postalCode: '52-460',
            city: 'Chorzów',
            email: 'xyz@gmail.com',
            country: 'Polska'
        }},
    ],
    products: [
        {id: 1, brand: 'Apple', name: 'IPhone 12 mini', price: '3200', isSold: 'false'},
        {id: 2, brand: 'Apple', name: 'IPhone 13 Pro', price: '3200', isSold: 'false'},
        {id: 3, brand: 'Apple', name: 'IPhone 13', price: '3200', isSold: 'false'},
        {id: 4, brand: 'Apple', name: 'IPhone 13 Pro Max', price: '3200', isSold: 'false'},
        {id: 5, brand: 'Apple', name: 'IPhone 14', price: '3200', isSold: 'false'},
        {id: 6, brand: 'Apple', name: 'IPhone 12', price: '3200', isSold: 'false'},
        {id: 7, brand: 'Apple', name: 'IPhone 14 Pro', price: '3200', isSold: 'false'},
        {id: 8, brand: 'Apple', name: 'IPhone 13 mini', price: '3200', isSold: 'false'},
        {id: 9, brand: 'Apple', name: 'IPhone 12 Pro Max', price: '3200', isSold: 'false'},
        {id: 10, brand: 'Apple', name: 'IPhone 12 Pro', price: '3200', isSold: 'false'},
    ]
}

export default data 