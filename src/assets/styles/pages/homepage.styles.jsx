import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	0% {
    		opacity: 0;
			transform: translate(0%, 50%) rotateX(-90deg);
  	}
  	100% {
    		opacity: 1;
			transform: translate(0%, 0%) rotateX(none);
  	}
`;

// const heroAnimation = keyframes`
// 	0% {
	
// 			  transform: scale(1.1) translate(20px, -15px);
// 			  transform-origin: right top;
			  
// 	}
// 	100% {
// 			  transform: scale(1) translate(0px, 0px);
// 			  transform-origin: 84% 16%;
			 
// 	}
// `;

const reveal = keyframes`
	0% {
    		transform: translate(0,-100%);
			opacity: 0;
  	}
  	100% {
    		transform: translate(0,0);
			opacity: 1;
  	}

`;

export const Hero = styled.section`
	display: flex;
	height: 100vh;
	${({ theme }) => theme.mq.tablet} {
		/* display: flex; */
	}
`;

export const HeroHeading = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	left: 0;
	padding: 0.7rem;
	font-weight: 100;
	${({ theme }) => theme.mq.tablet} {
		top: 0;
		/* position: relative; */
		padding: 4.5rem;
	}
	h1 {
		margin-bottom: 0;
	}
`;

export const AnimatedText = styled.div`
	p {
		font-weight: 200;
		white-space: nowrap;
		color: ${({ theme }) => theme.color.smoke};
		font-size: 2.5rem;
		line-height: 3.125rem;
		span {
			opacity: 0;
			animation: ${fadeIn} .1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
			animation-delay: 0.1s;
		}
		${({ theme }) => theme.mq.tablet} {
			font-size: 3.5rem;
			line-height: 4.125rem;
		}
		${({ theme }) => theme.mq.desktop} {
			font-size: 4.5rem;
			line-height: 5.125rem;
		}
	}
	p:nth-child(1) {
		span:nth-child(1) { animation-delay: 0s; }
		span:nth-child(2) { animation-delay: 0.1s; }
		span:nth-child(3) { animation-delay: 0.2s; }
		span:nth-child(4) { animation-delay: 0.3s; }
		span:nth-child(5) { animation-delay: 0.4s; }
		span:nth-child(6) { animation-delay: 0.5s; }
		span:nth-child(7) { animation-delay: 0.6s; }
		span:nth-child(8) { animation-delay: 0.7s; }
		span:nth-child(9) { animation-delay: 0.8s; }
		span:nth-child(10) { animation-delay: 0.9s; }
	}
	p:nth-child(2) {
		span:nth-child(1) { animation-delay: 1s; }
		span:nth-child(2) { animation-delay: 1.1s; }
		span:nth-child(3) { animation-delay: 1.2s; }
		span:nth-child(4) { animation-delay: 1.3s; }
		span:nth-child(5) { animation-delay: 1.4s; }
		span:nth-child(6) { animation-delay: 1.5s; }
		span:nth-child(7) { animation-delay: 1.6s; }
		span:nth-child(8) { animation-delay: 1.7s; }
		span:nth-child(9) { animation-delay: 1.8s; }
		span:nth-child(10) { animation-delay: 1.9s; }
		span:nth-child(11) { animation-delay: 2s; }
		span:nth-child(12) { animation-delay: 2.1s; }
		span:nth-child(13) { animation-delay: 2.2s; }
		span:nth-child(14) { animation-delay: 2.3s; }
		span:nth-child(15) { animation-delay: 2.4s; }
	}	
`;

export const TextBottom = styled.div`
	p {
		color: ${({ theme }) => theme.color.warmGrey};
			font-size: 1.5rem;
			line-height: 2rem;
		${({ theme }) => theme.mq.tablet} {
			font-size: 1.5rem;
			line-height: 2.125rem;
		}

	}
	div {
		opacity: 0;
		animation: ${reveal} 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
		animation-delay: 2.4s;
	}
	button {
		opacity: 0;
		margin-top: 25px;
		animation: ${reveal} 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
		animation-delay: 2.8s;
		span {
			
		}
	}
`;

export const ReviewInfo = styled.div`
	opacity: 0;
	width: 100px;
	font-size: 11px;
	line-height: 18px;
	margin-top: 25px;
	animation: ${reveal} 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
	animation-delay: 2.6s;
	a {
		color: ${({ theme }) => theme.color.smoke};
		font-weight: 400;
	}
	span {
		font-size: 0.8rem;
		span:nth-child(1) {
		padding-left: 12px;
		}
	}
	
`;


export const HeroImageWrapper = styled.div`
	/* border: 1px solid blue; */
	background-image: url('${({ imageSource }) => imageSource}');
	background-size: cover;
	position: absolute;
	${({ theme }) => theme.mq.tablet} {
	
	}
	${({ theme }) => theme.mq.tablet} {
		width: 90%;
		height: 100%;
		right: 0%;
		z-index: -100;
	}
	/* display: flex; */
`;

export const HeroImageLeft = styled.div`
	/* position: relative;
	border: 2px solid blue;
	width: 100%;
	height: 100%;  */

`;

export const ImageSketch = styled.div`
	/* border: 1px solid blue; */
	position: absolute; 
	/* background: lightblue; */
	background-image: url('${({ imageSource }) => imageSource}');
	background-size: cover;
	clip-path: polygon(0% 0%, 100% 0%, 60% 100%, 0% 100%);
	background-position: 0px 0;
	bottom: -10px;
	right: 47%;
	width: 90%;
	height: 54.5%;
`;

export const HeroImageRight = styled.div`
	/* position: relative;
	border: 2px solid blue;
	width: 100%;
	height: 100%;  */
`;

export const ImageRender = styled.div`	
/* border: 1px solid blue; */
	/* background: lightcoral; */
	position: absolute; 
	background-image: url('${({ imageSource }) => imageSource}');
	background-size: cover;
	background-position: 850px 0;
	/* mask-image: linear-gradient(300deg, rgba(0,0,0,1) 600px, rgba(0,0,0,0) 600px); */
	/* bottom: 100%; */
	right: 0;
	bottom: 0;
	width: 100%;
	height: 56%;
	clip-path: polygon(45% 0%, 100% 0%, 100% 100%, 0% 100%);
	/* height: 65%; // 65% * 100vh */
	/* height: 100%;	 */
`;


export const HeroImageClouds = styled.div`
	background-image: url('${({ imageSource }) => imageSource}');
`; 