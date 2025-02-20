import * as React from "react"
// import HeroImg from 'src/assets/images/hero.jpg';
import HeroBgClouds from 'src/assets/images/wind-spring-white-stratosphere-pure.jpg';
import HeroRender from 'src/assets/images/hero-render.png';
import HeroSketch from 'src/assets/images/hero-sketch.png';
import HeroImage from 'src/assets/images/hero.png';
// import HeroRectangle from 'src/assets/images/rectangle.svg';

import { IoIosStar } from "react-icons/io/";

import { Link } from 'gatsby';

import {
	Hero,
  HeroImageLeft,
  HeroImageRight,
  HeroImageWrapper,
  HeroImageClouds,
  ImageRender,
  ImageSketch,
  AnimatedText,
	HeroHeading,
  ReviewInfo,
  TextBottom,
} from '../assets/styles/pages/homepage.styles';
import { PresentationSection } from "../components/PresentationSection/PresentationSection";
import { OfferSection } from "../components/OfferSection/Offersection";
import { CallToActionSection } from "../components/CallToActionSection/CallToActionSection";
import { OpinionsSection } from "../components/OpinionsSections/OpinionsSection";
import { ShortPresentationSection } from "../components/ShortPresentationSection/ShortPresentationSection";
import { StyledButton } from "../components/ContactForm/ContactForm.styles";
import { GoArrowRight } from "react-icons/go";

const IndexPage = () => {

  return (
    <main>
      <Hero>      
            {/* 1 col */}
            <HeroHeading>
            <h1>
              <AnimatedText>
                <p>
                  <span>A</span>
                  <span>r</span>
                  <span>c</span>
                  <span>h</span>
                  <span>i</span>
                  <span>t</span>
                  <span>e</span>
                  <span>k</span>
                  <span>t</span>
                  <span>,&nbsp;</span>
                </p>
                <p>
                  <span>k</span>
                  <span>t</span>
                  <span>ó</span>
                  <span>r</span>
                  <span>e</span>
                  <span>g</span>
                  <span>o&nbsp;</span>
            
                  <span>s</span>
                  <span>z</span>
                  <span>u</span>
                  <span>k</span>
                  <span>a</span>
                  <span>s</span>
                  <span>z</span>
                </p>
              </AnimatedText>
            </h1>
          <TextBottom>
            <div>
              <p>Biuro projektowe <span>K.Projekt</span> Barbara Kuryło</p>
              <p>w Dębicy</p>
            </div>
            
            <StyledButton>
                           <Link to="/kontakt">
                              Umów się na konsultację
                          </Link>
                           <GoArrowRight />
            
            </StyledButton>
          </TextBottom>
          <ReviewInfo>
            <Link to="https://www.google.com/search?sca_esv=78340331a9a19b7d&hl=pl&gl=PL&sxsrf=AHTn8zqPniopGcZC4dOnyh2YJPw_v739vw:1738851558809&uds=ABqPDvztZD_Nu18FR6tNPw2cK_RRMVituz9GJCiMnfPKnKIowupS2aI2kk1-KFxLTYwcma8bSwmVt5SfM_IMSXpiQqo9g38VxjXxz2q6svcoasdgk6MtdFgJhS78TMyJvDpVYlJ-czO4f2uWLDVk3hXKQsAcs6td6R8hH4w5i8N9L8JcaNxlO9JpUtNkDhZmi_7H1JDXeZsa&q=Biuro+architektoniczne+K.Projekt+Opinie&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzbW1U-qNu6ntXTvmsfeOuj2uw7H_YPNY3hawTQNUWuv5jVNddhjz2gL5F-Iu_Nl8WVfvznyQ64N93yST3TwDjIRwMg6vcQGxZp0-bw0vK24pJwUxSw%3D%3D&sa=X&ved=2ahUKEwjKlOvrnq-LAxUjIhAIHU0cAuUQ_4MLegQIORAN&biw=1738&bih=864&dpr=2" target="_blank">
              <div><span>5/5</span><span><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></span></div>
              <div>Ocena na Google</div>
            </Link>
          </ReviewInfo>
        </HeroHeading>
        <HeroImageWrapper imageSource={HeroImage}>
         {/* 2 col */}
        {/* <HeroImageLeft> */}
          {/* <ImageSketch imageSource={HeroSketch} /> */}
        {/* </HeroImageLeft> */}
        {/* 3 col */}
        {/* <HeroImageRight > */}
          {/* <HeroImageClouds imageSource={HeroBgClouds}/> */}
          {/* <ImageRender imageSource={HeroRender}/> */}
        {/* </HeroImageRight>  */}
        </HeroImageWrapper>
		  </Hero>

   




        <PresentationSection />
    

      
      <ShortPresentationSection />

      
         <div>
          <OfferSection />     
        </div>
    
      <CallToActionSection />

      <div id="opinions-section">
        <div>
          <OpinionsSection />
        </div>
      </div>

    

    </main>
  )
}

export default IndexPage;
