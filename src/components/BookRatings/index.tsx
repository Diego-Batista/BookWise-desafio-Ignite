import { Text } from "../Typography"
import { Link } from "../Ui/Link"
import { RatingWithAuthor, UserRatingCard } from "../UserRatingCard"
import { Container } from "./styles"

type BookRatingsProps = {
    ratings: RatingWithAuthor[]
}

export const BookRatings = ({ ratings }: BookRatingsProps) => {
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
               {ratings?.map((rating) => (
                <UserRatingCard key={rating.id} rating={rating}/>
               ))}
            </section>
        </Container>
    )
}