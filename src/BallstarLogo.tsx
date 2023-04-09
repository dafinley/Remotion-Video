import { Img, AbsoluteFill, staticFile, useCurrentFrame } from 'remotion';

export const BallstarLogo: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = Math.min(1, frame / 30);
	
	return (<AbsoluteFill style={{ backgroundColor: 'white', padding:'0 25%', justifyContent: 'center', margin: '0 auto'}}>
	  <Img style={{ opacity }} src={staticFile('ballstar-black.png')} />
	</AbsoluteFill>);
}