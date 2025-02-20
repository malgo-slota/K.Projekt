import * as React from "react"
import { HeadingSubpage } from "../components/HeadingSubpage/HeadingSubpage.styles"
import { NotFoundPageContent } from "../assets/styles/pages/404.styled"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <NotFoundPageContent>
        <HeadingSubpage>
          404: Nie znaleziono strony
        </HeadingSubpage>
        <Link to="/">Wróć do strony głównej</Link>
      </NotFoundPageContent>
    </main>
  )
}

export default NotFoundPage;

export const Head = () => <title>404: Nie znaleziono strony</title>
