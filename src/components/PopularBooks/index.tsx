
import { api } from "@/lib/axios"
import { useQuery } from '@tanstack/react-query'
import { BookCard, BookWithAvgRating } from "../BookCard"
import { Text } from "../Typography"
import { Link } from "../Ui/Link"
import { Container } from "./styles"

export const PopularBooks = () => {
    const { data: popularBooks } = useQuery<BookWithAvgRating[]>(["popular-books"], async () => {
        const { data } = await api.get('/books/popular')
        return data?.books ?? []
    })

    return (
        <Container>
            <header>
                <Text size='sm'>Livros populares</Text>
                <Link href='/explore' text="Ver todos" />
            </header>

            <section>
                {popularBooks?.map(book => (
                    <BookCard 
                        key={book.id}
                        book={book}
                    />
                ))}
            </section>
        </Container>
    )
}