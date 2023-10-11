import { DefaultLayout } from "@/components/Layout/DefaultLayout";
import { ProfileRatings } from "@/components/ProfileRatings";
import { HomeContainer } from "@/styles/pages/home";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const ProfilePage: NextPageWithLayout= () => {
    return (
        <HomeContainer>
            <ProfileRatings />
        </HomeContainer>
    )
}

ProfilePage.getLayout = (page: ReactElement) => {
    return (
        <DefaultLayout title="Perfil">
            {page}
        </DefaultLayout>
    )
}

export default ProfilePage