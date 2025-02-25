import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useForm, ValidationError } from '@formspree/react';
import {
    Form,
    FormField,
    DropdownField,
    PrivacyPolicy,
    StyledButton,
	
} from './ContactForm.styles';
import Dropdown from '../Dropdown/Dropdown';
import arrowIcon from 'src/assets/images/free_icon_1.svg';

export const ContactForm = () => {

  const [state, handleSubmit] = useForm("xkgnlbda");
  const [subject, setSubject] = useState("");

    return (
        <Form onSubmit={handleSubmit}>
            Wypełnij formularz kontaktowy
            <FormField>
                <label htmlFor="firstname">Imię</label>
                <input type="text" placeholder='Podaj swoje imię' required id="firstname" name="firstname" />
                <ValidationError 
                    prefix="FirstName" 
                    field="firstname"
                    errors={state.errors}
                  />
            </FormField>
            <FormField>
                <label htmlFor='lastname'>Nazwisko</label>
                <input type="text" placeholder='Podaj swoje nazwisko' required id="lastname" name="lastname" />
                <ValidationError 
                    prefix="LastName" 
                    field="lastname"
                    errors={state.errors}
                  />
            </FormField>

            <FormField>
                <label htmlFor="email">Adres email</label>
                <input type="email" placeholder='Wprowadź swój adres email' required id="email" name="email" />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
            </FormField>
            <FormField>
                <label htmlFor='subject'>Temat wiadomości</label>
                <DropdownField>
                  <input type="" placeholder='Wybierz z listy temat wiadomości' id="subject" name="subject" value={subject} required /> 
                  <Dropdown subject={subject} setSubject={setSubject}/>
                </DropdownField>
            </FormField>
            <FormField>
                <label htmlFor='message'>Treść wiadomości</label>
                <textarea placeholder='Treść twojej wiadomości' required id="message" name="message"/>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
            </FormField>
            <FormField>
                <PrivacyPolicy>
                    <input type="checkbox" id="agreetoprivacypolicy" name="agreetoprivacypolicy" required/>
                    <label for="agreetoprivacypolicy">Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z <Link to="/privacypolicy">polityką prywatności</Link>.</label>
                </PrivacyPolicy>
            </FormField>

            <StyledButton type="submit" disabled={state.submitting}>
                {!state.succeeded ? <p>Wyślij</p> : <p>Dziękuję za wiadomość!</p>}
                <img src={arrowIcon} />
            </StyledButton>
            
            {/* {state.errors.length
              ? state.errors.map((e) => (
                  <p key={e.message}>
                    {e.code === 'EMPTY' &&
                      'Uzupełnij pola przed wysłaniem wiadomości'}
                  </p>
                ))
              : null} */}
        </Form>
    );   
}