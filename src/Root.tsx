import {Composition} from 'remotion';
import {HelloSkia} from './HelloSkia';
import {BallstarLogo} from './BallstarLogo';
import {BallstarFade} from './BallstarFade';
import {PlayerName } from './PlayerName';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="BallstarLogo"
				component={BallstarLogo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="BallstarFade"
				component={BallstarFade}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="PlayerName"
				component={PlayerName}
				durationInFrames={300}
				fps={20}
				width={1920}
				height={1080}
			/>

			<Composition
				id="HelloSkia"
				component={HelloSkia}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
