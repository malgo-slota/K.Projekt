import React from 'react';
import { Link } from 'gatsby';
import { OfferContentWrapper, SubtitleText, OfferGrid, OfferWrapper } from '../assets/styles/pages/oferta.styles';
import { HeadingSubpage } from '../components/HeadingSubpage/HeadingSubpage.styles';

const Oferta = () => (

    <OfferContentWrapper>
        <HeadingSubpage>
            Jak mogę Ci pomóc?
            <SubtitleText>
                <p>Oferuję pomoc na każdym etapie, dbając o interes klienta.</p>
                <p>Sprawdź, co mówią Ci, którzy mieli już okazję korzystać z moich usług <Link to="/#opinions-section">Opinie klientów</Link></p>
            </SubtitleText>
        </HeadingSubpage>
        
        <OfferGrid>
            <OfferWrapper>
                <h2>Projekty budynków mieszkalnych i użytku publicznego</h2>
                <p>
                    Projektowanie ergonomicznych przestrzeni, dostosowanych do konkretnych potrzeb zgodnie z obowiązującymi normami, przepisami i uwarunkowaniami terenu. Projektowanie budynków mieszkalnych jedno- i wielorodzinnych, obiektów zamieszkania zbiorowego, budynków przeznaczonych dla nauki, oświaty, wychowania oraz kultury i sztuki, obiektów sportowych, turystycznych, rekreacyjnych, a także budynków administracyjnych.
                </p>
            </OfferWrapper>
            <OfferWrapper>
                <h2>Projekty budynków produkcyjnych i usługowych</h2>
                <p>
                    Opracowanie projektu od podstaw w sposób dostosowany do oczekiwań klienta oraz do warunków wynikających z lokalizacji, przepisów budowlanych i dokumentów planistycznych. Z uwzględnieniem specyficznych wymagań dla danego rodzaju budynku. Projektowanie budynków przemysłowych, produkcyjnych, handlowo-usługowych, magazynów oraz obiektów rolniczych do produkcji i składowania.
                </p>
            </OfferWrapper>
            <OfferWrapper>
                <h2>Projekty indywidualne domów jednorodzinnych</h2>
                <p>
                    Opracowanie projektu od podstaw i dostosowanie go do oczekiwań klienta oraz warunków wynikających z lokalizacji i ukształtowania działki, w zgodzie z dokumentami planistycznymi obowiązującymi dla danego terenu (Miejscowych Planów Zagospodarowania przestrzennego lub Decyzji o Warunkach Zabudowy). Projektowanie według norm i wytycznych aktualnych wymogów dot. energooszczędności.
                </p>
            </OfferWrapper>
            <OfferWrapper>
                <h2>Adaptacje projektów typowych</h2>
                <p>
                    Dostosowanie gotowego projektu do indywidualnych potrzeb klienta, specyficznych warunków ukształtowania działki i otoczenia oraz do wymagań lokalnych przepisów planistycznych. Przykładowo zmiany te mogą dotyczyć układu ścian, wymiarów otworów okiennych, użytych materiałów budowlanych (np. Okładzin elewacyjnych, pokrycia dachu).
                </p>
            </OfferWrapper>
            <OfferWrapper>
                <h2>Adaptacje obiektów i zmiany sposoby użytkowania</h2>
                <p>
                    Przystosowywanie istniejących budynków do nowych funkcji i potrzeb, według współczesnych standardów, w sposób spełniający wszelkie wymogi (tj. sanitarne, przeciwpożarowe, dostępności dla osób niepełnosprawnych). Poprawa ich funkcjonalności, estetyki oraz efektywności energetycznej, przy jednoczesnym zachowaniu wartości historycznych i architektonicznych.
                </p>
            </OfferWrapper>
            <OfferWrapper>
                <h2><span>Pomoc i doradztwo</span> w sprawach formalnych</h2>
                <p>
                    Pomoc przy uzyskaniu niezbędnych pozwoleń i zgód związanych ze zgłoszeniem i pozwoleniem na budowę oraz w przygotowaniu wniosku Decyzji o Warunkach Zabudowy. Nawigowanie i fachowe doradztwo w zakresie architektury, konstrukcji i instalacji przez cały proces projektowy. Wygodna dla inwestora możliwość podpisania pełnomocnictwa do reprezentowania go w sprawach urzędowej obsługi inwestycji. 
                </p>
            </OfferWrapper>
            <OfferWrapper>
                <h2>Projekty wnętrz</h2>
                <p>
                    Zaprojektowanie ergonomicznych przestrzeni w nowo powstających budynkach oraz adaptacja już istniejących pomieszczeń. Projekty tworzone w zgodzie z indywidualnymi potrzebami, wymaganiami estetycznymi i funkcjonalnymi, uwzględniające osobiste preferencje klienta dotyczące stylu. Propozycje i konsultacja możliwych rozwiązań wyglądu wnętrza na życzenie klienta.
                </p>
            </OfferWrapper>
        </OfferGrid>
    </OfferContentWrapper>
);

export default Oferta;