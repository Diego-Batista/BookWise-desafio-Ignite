import { signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data } = useSession()
  return (
    <>
      {data?.user ?
        <div>
          <h1>{data?.user.name}</h1>
          <p>{data?.user.email} </p>
        </div>
        :
        <div>
          <h1>Usuario não logado</h1>
        </div>
      }

      <button onClick={() => signOut()}>Deslogar</button>
    </>
  )
}
