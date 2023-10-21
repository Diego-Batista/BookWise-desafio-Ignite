import { api } from "@/lib/axios"
import { ChartLineUp } from "@phosphor-icons/react"
import { useQuery } from '@tanstack/react-query'
import { useSession } from "next-auth/react"
import { RatingCard, RatingWithAuthorAndBook } from "../RatingCard"
import { Text } from "../Typography"
import { Link } from "../Ui/Link"
import { PageTitle } from "../Ui/PageTitle"
import { Container, LatestRatingContainer } from "./styles"

export const LatestRatings = () => {
    const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>(["latest-ratings"], async () => {
        const { data } = await api.get('/ratings/latest')
        return data?.ratings ?? []
    })

    const { data: session } = useSession()

    const  userId = session?.user.id

    const { data: latestUserRating } = useQuery<RatingWithAuthorAndBook>(["latest-user-ratings", userId], async () => {
        const { data } = await api.get('/ratings/user-latest')
        return data?.rating ?? []
    }, {
        enabled: !!userId
    })

    return (
        <Container>
            <PageTitle title="Início" icon={<ChartLineUp size={32}/>} css={{
                marginBottom: 40
            }}/>

            {latestUserRating && (
                <LatestRatingContainer>
                    <header>
                        <Text size='sm'>Sua ultima avaliação</Text>
                        <Link text="Ver todos" href={`/profile/${userId}`} />
                    </header>

                    <RatingCard variant="compact" rating={latestUserRating} />
                </LatestRatingContainer>
            )}

            <Text size='sm'>Avaliações mais recentes</Text>

            <section>
                {ratings?.map(rating => (
                    <RatingCard key={rating.id} rating={rating}/>
                ))}
            </section>
        </Container>
    )
}