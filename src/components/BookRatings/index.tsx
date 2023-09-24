import { Text } from "../Typography"
import { Link } from "../Ui/Link"
import { UserRatingCard } from "../UserRatingCard"
import { Container } from "./styles"

export const BookRatings = () => {
    const handleRate = () => {
        console.log('avaliar')
    }

    return (
        <Container>
            <header>
                <Text>Avaliações</Text>
                <Link withoutIcon onClick={handleRate} text="Avaliar"/>
            </header>

            <section>
               {Array.from({ length: 10 }).map((_, index) => (
                <UserRatingCard 
                    key={index}
                    rating={{
                        rate: 3,
                        user: {
                            name: 'John Doe',
                            avatar_url: 'https://github.com/Diego-Batista.png',
                        },
                        created_at: new Date(),
                        description: 'BLA CLbla bla vla bla blavbla'
                    }}
                />
               ))}
            </section>
        </Container>
    )
}