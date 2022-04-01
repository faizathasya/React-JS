import { useState, useEffect } from "react";
import { Modal } from "bootstrap"
import BookList from "../components/BookList";
export default function Books(props){
    let [books, setBooks] = useState([])

    useEffect(() => {

        let arrBooks= [
            {
                isbn: 1, title: 'Mariposa', creator: 'Luluk HF',
                publisher: 'Coconut Books', income: 1000, rating: 3,progress: 40,
                cover: 'https://images.app.goo.gl/GEcSN2ouqJL7ocb87'
            },
            {
                isbn: 2, title: 'Doraemon', creator: 'Gatau',
                publisher: 'Kencana', income: 5000, rating: 4,progress:70,
                cover: 'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/nobita-doraemon-new.jpg'
            }
        ]

        setBooks(arrBooks)
    }, [])
    return(
        <div className="container-fluid">
            {books.map(item => (
                <BookList
                key={'key${item.isbn}'}
                isbn={(item.isbn)}
                title={(item.title)}
                creator={(item.creator)}
                publisher={(item.publisher)}
                rating={item.rating}
                cover={(item.cover)}
                progress={item.progress}>

                </BookList>
            ))}
        </div>
    )
}