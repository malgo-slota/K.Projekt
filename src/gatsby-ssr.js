import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./src/assets/styles/theme";

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
