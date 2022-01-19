import React, { Component, useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

// class BookList extends Component {
//     static contextType = ThemeContext
//     render () {
//         const {isLightTrue, light, dark} = this.context
//         const theme = isLightTrue ? light : dark

//         return (
//             <div className="book-list">
//                 <ul style={{background: theme.bg, color: theme.syntax}}>
//                     <li style={{background: theme.ui}}>Rich Dad Poor Dad</li> 
//                     <li style={{background: theme.ui}}>Eat that frog</li> 
//                     <li style={{background: theme.ui}}>Pyjama Profit</li> 
//                 </ul> 
//             </div>
//         )
//     }
// }

const BookList = () => {
    const {books} = useContext(BookContext)
    const {isLightTrue,light,dark} = useContext(ThemeContext)
    const theme = isLightTrue ? light:dark
    return (
        <div className="book=list">
            <ul style={{background: theme.bg, color: theme.sytax}}>
                {books.map(book => {
                    return (<li style={{background: theme.ui}} key={book.id}>{book.title}</li>)
                })}
            </ul>
        </div>
    )
}

export default BookList 