import theme from "./src/assets/styles/theme";
import { ThemeProvider } from "styled-components"

const React = require('react');
const { MainTemplate } = require('./src/components/MainTemplate');


exports.wrapPageElement = ({ element, props }) => (
	<ThemeProvider theme={theme}>
		<MainTemplate {...props}>{element}</MainTemplate>
	</ThemeProvider>
);