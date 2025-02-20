import * as React from "react"
import { HeadingSubpage } from "../components/HeadingSubpage/HeadingSubpage.styles";
import { PrivacyPolicyContent } from "../assets/styles/pages/privacypolicy.styles";

const PrivacyPolicy = () => {
  return (
    <>
      <HeadingSubpage>
        Polityka Prywatności
      </HeadingSubpage>
      <PrivacyPolicyContent>
        <p>Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.</p>
        <h3>1. Informacje ogólne</h3>
          <ol>
            <li>Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: kurylo-projekt.pl</li>
            <li>Operatorem serwisu oraz Administratorem danych osobowych jest: Barbara Kuryło ul. Rynek 26, 39-200 Dębica</li>
            <li>Adres kontaktowy poczty elektronicznej operatora: arch.kurylo@gmail.com</li>
            <li>Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</li> 
            <li>Serwis wykorzystuje dane osobowe w następujących celach:
              <ol>
                <li>Obsługa zapytań przez formularz</li>
              </ol>
            </li>
            <li>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
              <ol>
                <li>Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</li>
                <li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</li>
              </ol>
            </li>
          </ol>
          <h3>2. Hosting</h3>
          <ol>
            <li>Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: OVH</li>
            <li>Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:
              <ol>
                <li>zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików),</li>
                <li>czas nadejścia zapytania,</li>
                <li>czas wysłania odpowiedzi,</li>
                <li>nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,</li>
                <li>informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,</li>
                <li>adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik,</li>
                <li>informacje o przeglądarce użytkownika,</li>
                <li>informacje o adresie IP,</li>
                <li>informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na stronie,</li>
                <li>informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez Operatora.</li>
              </ol>
            </li>
          </ol>
          <h3>3. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h3>
          <ol>
            <li> W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:
              <ol>
                <li>osoby upoważnione przez nas, pracownicy i współpracownicy, którzy muszą mieć dostęp do danych osobowych w celu wykonywania swoich obowiązków,</li>
                <li>firma hostingowa,</li>
                <li>firmy obsługująca mailingi,</li>
              </ol>
            </li>
          </ol>
          <h3>4. Informacje w formularzach</h3>
          <ol>
            <li>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</li>
            <li>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
            <li>Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.</li>
            <li>Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.</li>
          </ol>
          <h3>5. Istotne techniki marketingowe</h3>
          <ol>
            <li>Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/</li>
            <li>Operator stosuje techniki remarketingowe, pozwalające na dopasowanie przekazów reklamowych do zachowania użytkownika na stronie, co może dawać złudzenie, że dane osobowe użytkownika są wykorzystywane do jego śledzenia, jednak w praktyce nie dochodzi do przekazania żadnych danych osobowych od Operatora do operatorom reklam. Technologicznym warunkiem takich działań jest włączona obsługa plików cookie.</li>
            <li>Operator stosuje korzysta z piksela Facebooka. Ta technologia powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA) wie, że dana osoba w nim zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych, wobec których sam jest administratorem, Operator nie przekazuje od siebie żadnych dodatkowych danych osobowych serwisowi Facebook. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.</li>
            <li>Operator stosuje rozwiązanie badające zachowanie użytkowników poprzez tworzenie map ciepła oraz nagrywanie zachowania na stronie. Te informacje są anonimizowane zanim zostaną przesłane do operatora usługi tak, że nie wie on jakiej osoby fizycznej one dotyczą. W szczególności nagrywaniu nie podlegają wpisywane hasła oraz inne dane osobowe.</li>
            <li>Operator stosuje rozwiązanie automatyzujące działanie Serwisu w odniesieniu do użytkowników, np. mogące przesłać maila do użytkownika po odwiedzeniu konkretnej podstrony, o ile wyraził on zgodę na otrzymywanie korespondencji handlowej od Operatora.</li>
            <li>Operator może stosować profilowanie w rozumieniu przepisów o ochronie danych osobowych</li>
          </ol>
          <h3>6. Informacja o plikach cookies</h3>
          <ol>
            <li>Serwis korzysta z plików cookies.</li>
            <li>Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</li>
            <li>Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</li>
            <li>Pliki cookies wykorzystywane są w następujących celach:
              <ol>
                <li>realizacji celów określonych powyżej w części "Istotne techniki marketingowe";</li>
              </ol>
            </li>
            <li>W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.</li>
            <li>Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.</li>
            <li>Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</li>
            <li>Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).</li>
          </ol>
          <h3>7. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</h3>
          <ol>
            <li>Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www</li>
          </ol>        
      </PrivacyPolicyContent>
    </>
  )
}

export default PrivacyPolicy;
