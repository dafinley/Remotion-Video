import { Img, AbsoluteFill, staticFile, useCurrentFrame } from 'remotion';

export const BallstarFade: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = Math.max(0, 1 / frame * 5 );
	
	return (<AbsoluteFill style={{ backgroundColor: 'white', padding:'0 25%', justifyContent: 'center', margin: '0 auto'}}>
	  <Img style={{ opacity }} src={staticFile('ballstar-black.png')} />
	</AbsoluteFill>);
}