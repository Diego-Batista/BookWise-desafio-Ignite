import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { signOut, useSession } from "next-auth/react"
import { NextPageWithLayout } from "./_app"

const HomePage: NextPageWithLayout = () => {
  const { data } = useSession()
  return (
    <>
        <div>
          <h1>{data?.user.name}</h1>
          <p>{data?.user.email} </p>
        </div>

      <button onClick={() => signOut()}>Deslogar</button>
    </>
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
