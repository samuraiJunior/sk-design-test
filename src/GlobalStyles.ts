import { createGlobalStyle } from 'styled-components';
import GlobalStyles from '@mui/material/GlobalStyles';


export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	padding: 0px;
	margin: 0px;
	border: none;
	box-sizing: border-box;
}

/* Links */

a, a:visited  {
    color: inherit;
    text-decoration: none;
}

a:hover  {
    color: inherit;
    text-decoration: none;
}

a:focus,
a:active {
	outline: none;
}

/* Common */

aside, nav, footer, header, section, main {
	display: block;
}

h1, h2, h3, h4, h5, h6, p {
    //font-size: inherit;
	font-weight: inherit;
	line-height: inherit;
	color: #353238
}

p + p {
	margin-top: 1em;
}

ul {
	list-style: none;
}

img, svg {
	vertical-align: top;
	max-width: 100%;
	height: auto;
}

/* Form */

input, textarea, button, select {
	font-family: inherit;
    font-size: inherit;
}

input::-ms-clear {
	display: none;
}

button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    cursor: pointer;
}

input:focus, input:active,
button:focus, button:active {
    outline: none;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

label {
	cursor: pointer;
}

legend {
	display: block;
}
.MuiPaper-root{

	&.MuiPopover-paper{
		padding: 2px;
		min-width:135px!important;
		background: #FFFFFF;
		border: 2px solid #E3E3E3;
		box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
		border-radius: 8px;
	  }
}
.MuiList-root{
	&.MuiMenu-list{
		padding:0;
	}
}
.MuiButtonBase-root{
&.MuiMenuItem-root{
	font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #353238;
	&+&{
		border-top: 1px solid #E3E3E3
	}
	&.Mui-selected{
		background-color:#FAFAFA;
	}
}}




`