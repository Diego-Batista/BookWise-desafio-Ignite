
import { BookCard } from "../BookCard"
import { Text } from "../Typography"
import { Link } from "../Ui/Link"
import { Container } from "./styles"

export const PopularBooks = () => {
    return (
        <Container>
            <header>
                <Text size='sm'>Livros populares</Text>
                <Link href='/explore' text="Ver todos" />
            </header>

            <section>
                {Array.from({ length: 4 }).map((_, i) => (
                    <BookCard 
                        key={i}
                        book={{
                            author: 'John Doe',
                            avgRating: 4,
                            cover_url: 'https://user-images.githubusercontent.com/68654450/239754141-3fe75e48-54a2-4f13-81d0-6e38a1c457b2.png',
                            created_at: new Date(),
                            id: 'bsyhuobsa',
                            name: 'Algum livro Algum livro Algum livro Algum livro Algum livro',
                            summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur repellat',
                            total_pages: 100
                        }}
                    />
                ))}
            </section>
        </Container>
    )
}