import styled, { keyframes, css } from 'styled-components';

const menuSlideIn = keyframes`
	0% {
		transform: translateX(-100%);
		opacity: 0;
	}
	100% {
		transform: translateX(0%);
		opacity: 1;
	}
`;

const menuSlideOut = keyframes`
	0% {
		transform: translateX(0%);
		opacity: 1;
	}
	100% {
		transform: translateX(-100%);
		opacity: 0;
	}
`;

export const OuterWrapper = styled.div`
	scroll-snap-align: start;
	position: absolute;
	top: 0;
	z-index: 1000;
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	padding: 1rem 1.5rem;
`;

export const StyledLogo = styled.img`
	position: relative;
	z-index: 100;
    width: 64px;
    height: 74.85px;
`;

export const StyledBurger = styled.button`
	position: relative;
	width: 40px;
	height: 27px;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;
 	transform: rotate(0deg);
  	transition: .5s ease-in-out;
	span {
		display: block;
		position: absolute;
		width: 100%;
		height: 0.3rem;
		background: black;
		transition: .5s ease-in-out;
		transform-origin: left center;	
	}
	span:nth-child(1) {
		transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : '')};
		top: ${({ isOpen }) => (isOpen ? '-6px' : '0px')};
	} 
	span:nth-child(2) {
		top: 11px;
		width: ${({ isOpen }) => (isOpen ? '0%' : '')};
		opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
	} 
	span:nth-child(3) {
		top: 22px;
		transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : '')};
	}

	${({ theme }) => theme.mq.desktop} {
		display: none;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background-color: hsl(51, 14%, 90%);
	justify-content: center;
	padding: 50px;
	font-size: ${({ theme }) => theme.font.size.mobileMenu};
	
	${({ isOpen }) =>
                isOpen 
                    ? css`
                       	animation: ${menuSlideIn} 1s ease-out forwards;
                    `
					: css`
				 		animation: ${menuSlideOut} 1s ease-out forwards;
					`}

	animation-fill-mode: forwards;

	${({ theme }) => theme.mq.desktop} {
		position: static;
		display: flex;
		flex-direction: row;
		width: 100%;
		height: unset;
		background-color: transparent;
		padding: 25px 0px;
		font-size: ${({ theme }) => theme.font.size.desktopMenu};
		animation: none;
	}
`;

export const StyledNavigation = styled.nav`
	ul {
		list-style: none;
		padding: 0;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		li {
			a {
				display: inline-block;
				padding: 45px;
				color: ${({ theme }) => theme.color.smoke};
				text-decoration: none;
				font-weight: 100;
			}
			
		}

		${({ theme }) => theme.mq.desktop} {
			li {
				a {
					padding: 0;
				}
			}
		}
	}

	${({ theme }) => theme.mq.desktop} {
		margin-left: auto;
		margin-right: 150px;
		ul {
			flex-direction: row;

			li {
				margin: 0 20px;
			}
		}
	}
`;