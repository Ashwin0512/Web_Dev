import React, { createContext, useState } from "react";

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const[books, setBooks] = useState([
        {title: 'Rich Dad Poor Dad', id: 1},
        {title: 'Economics of Small Things', id:2},
        {title: 'Pyjama Profit', id:3},
        {title: 'Eat that frog', id:4}
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider