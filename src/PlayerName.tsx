import { useEffect, useState } from 'react';
import { Img, Text, AbsoluteFill, Video, staticFile, Composition, useCurrentFrame, useVideoConfig, useFont, interpolate, Blur as MBlur } 
  from 'remotion';
import { SkiaCanvas } from '@remotion/skia';
import {useFont, Text, Canvas, Fill, Group, Skia, TextBlob, RoundedRect, Image, ImageSVG,
Paint, Blur, LinearGradient, rect, topLeft, topRight, mix, DiscretePathEffect, useSVG, useImage } 
  from '@shopify/react-native-skia';
import * as d3 from 'd3';

const domain = [0, 300];

export const PlayerName: React.FC = () => {
	const config = useVideoConfig();
	const frame = useCurrentFrame();


	const length = d3.scaleLinear().domain(domain).range([10, 0]);
	const opacity = d3.scaleLinear().domain(domain).range([0, 1]);
	const deviationPath =  d3.scaleLinear().domain(domain).range([5, 0]);
	const teamNamePath = d3.scalePow(100).domain(domain).range([0, 700])
	const nameTextBlob = d3.scalePow().exponent(.5).domain(domain).range([0,300]);
	const pointsTextBlob = d3.scalePow().exponent(.5).domain(domain).range([0,375]);
	const reboundsTextBlob = d3.scalePow().exponent(.55).domain(domain).range([0,450]);
	const assistsTextBlob = d3.scalePow().exponent(.55).domain(domain).range([0, 525]);
	const miniColors = ['#1D428A', '#FFC72C']
	const colorRange = d3.scaleLinear().domain(domain).range(miniColors);

	const bigFont = useFont(staticFile('Roboto-Bold.ttf'), 64);
	
	if(bigFont === null){
		return null;
	}

	const fullname = Skia.TextBlob.MakeFromText("Stephen Curry", bigFont);
	const playerPoints = Skia.TextBlob.MakeFromText("Points: 31", bigFont);
	const playerRebounds = Skia.TextBlob.MakeFromText("Rebounds: 12", bigFont);
	const playerAssists = Skia.TextBlob.MakeFromText("Assists: 8", bigFont);
	const teamName = Skia.TextBlob.MakeFromText("Golden State Warriors", bigFont);

	
	return  (
    <AbsoluteFill style={{ backgroundColor: 'white'}}>
    <div>
    <div style={{ flexDirection: 'row', display: 'flex'}}>
    <React.Fragment>
      <div style={{flex: 2, backgroundColor: 'white', width: 500 }}>
	    <Canvas width={config.width / 2} height={400}>
	      
	      { teamName && <TextBlob blob={teamName} color={colorRange(frame)} y={80} x={teamNamePath(frame)} /> }
	      { fullname && <TextBlob blob={fullname} color={colorRange(frame)} x={64} y={nameTextBlob(frame)} />  }
	      { playerPoints && <TextBlob blob={playerPoints} color={colorRange(frame)} x={64} y={pointsTextBlob(frame)} /> }
	      { playerRebounds && <TextBlob blob={playerRebounds} color={colorRange(frame)} x={64} y={reboundsTextBlob(frame)} /> }
	      { playerAssists && <TextBlob blob={playerAssists} color={colorRange(frame)} x={64} y={assistsTextBlob(frame)} /> }
	      <DiscretePathEffect length={length(frame)} deviation={deviationPath(frame)} />
	    </Canvas>
	   </div> 
	 </React.Fragment>
	 <React.Fragment>
	   <div style={{ flex: 1, height: 400 }}>
	     <Video style={{ padding: '20% 0', margin: '0 15%', height: 1000 }} src={staticFile('steph-curry.mp4')} />
	   </div>
	 </React.Fragment>
	 </div>
	 <React.Fragment>
	   <div style={{ flex: 1,textAlign: 'center'}}>
	     <Img style={{ width: 500, opacity: 0.5, height: 400, objectFit: 'contain' }} src={staticFile('ballstar-black.png')} />
	   </div>
	 </React.Fragment>
	 </div>
	 </AbsoluteFill>
	);
}