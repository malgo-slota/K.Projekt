import React from 'react';
import { HeadingSubpage } from '../components/HeadingSubpage/HeadingSubpage.styles';
import { Content, SubpageContent, StyledTitle, ProfilePicture, TextContent } from '../assets/styles/pages/pracownia.styles';
import ProfilePic from 'src/assets/images/profile-pic.png';

const Pracownia = () => (

    <SubpageContent>
         <HeadingSubpage>
            Biuro architektoniczne K.Projekt
            <p></p>
            <p>w Dębicy</p>
        </HeadingSubpage>
	<Content>
        <TextContent>
            <StyledTitle>
                <h2>Barbara Kuryło</h2>
                <p>Architekt</p>
            </StyledTitle>
            <div>
                <p>
                    Absolwentka Politechniki Rzeszowskiej wydziału Architektury. Pracuje w zawodzie od 2015 roku. Od 2018 roku posiada uprawnienia budowlane w specjalności architektonicznej do projektowania oraz kierowania robotami budowlanymi bez ograniczeń. Posiada 9 letnie doświadczenie w zawodzie i w pracy z klientem. W 2023 roku założyła własne biuro projektowe K.projekt. Prywatnie artystka amatorka, zapalona czytelniczka ze szczególnym zamiłowaniem do fantasy.
                </p>
            </div>
        </TextContent>
        <ProfilePicture imageSource={ProfilePic} />
    </Content>
    </SubpageContent>
    
);

export default Pracownia;