import { LatestRatings } from "@/components/LatestRatings"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { PopularBooks } from "@/components/PopularBooks"
import { HomeContainer } from "@/styles/pages/home"
import { useSession } from "next-auth/react"
import { NextPageWithLayout } from "./_app"

const HomePage: NextPageWithLayout = () => {
  const { data } = useSession()
  return (
    <HomeContainer>
        <LatestRatings />
        <PopularBooks />
    </HomeContainer>
  )
}

HomePage.getLayout = (page) => {
  return (
    <div>
      <DefaultLayout title="Inicio">
        {page}
      </DefaultLayout>
    </div>
  )
}

export default HomePage;
