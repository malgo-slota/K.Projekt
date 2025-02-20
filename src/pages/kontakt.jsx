import React from 'react';
import { 
        ContactPhone, 
        FormContainer,
        MapWrapper, 
        SecondaryText, 
        SubpageContact 
    } from '../assets/styles/pages/kontakt.styles';
import { HeadingSubpage } from '../components/HeadingSubpage/HeadingSubpage.styles';
import { ContactForm }  from '../components/ContactForm/ContactForm.jsx';

const Kontakt = () => (
        <SubpageContact>
            <div>
                <HeadingSubpage>
                    Kontakt
                    <SecondaryText>
                        Potrzebujesz fachowej pomocy w zakresie moich usług ? <br/>
                        Zadzwoń, skorzystaj z poniższego formularza i napisz wiadomość email, lub po wcześniejszym kontakcie telefonicznym odwiedź biuro.
                    </SecondaryText>
                    <ContactPhone>
                        <span>Zadzwoń</span>
                        <a href="tel:+48604381381">+48 604 381 381</a>
                    </ContactPhone>
                </HeadingSubpage>
                       
                <FormContainer>
                    <ContactForm />
                </FormContainer>
            </div>

            <MapWrapper>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.8987863363036!2d21.4086557!3d50.0507273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d0b3e9000dca1%3A0x7e9078d89d292379!2sBiuro%20architektoniczne%20K.Projekt!5e0!3m2!1spl!2spl!4v1733405417371!5m2!1spl!2spl" 
                    width="100%" 
                    height="300"
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </MapWrapper>
        </SubpageContact>
);


export default Kontakt;