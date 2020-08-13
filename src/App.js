import React from 'react';
import './App.css';
import AppleImage from './images/apple.svg';

class App extends React.Component {
	constructor(props) {
		super (props);
		this.state = {
			apple: {
				xPos : 537.5,
				yPos : 388.5,
				width : 200,
				height : 200
			},
			percent: 100,
			opacity: 0
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', (e) => this.handleScrollToElement(e));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', (e) => this.handleScrollToElement(e));
		console.log(this.refs.vfAyba);
	}

	
	handleScrollToElement(event) {
		if( event.srcElement.defaultView.scrollY <= 1000 )  {
			this.setState({
				percent: 100 + event.srcElement.defaultView.scrollY * (1 + event.srcElement.defaultView.scrollY / 150),
			})
		} else {
			this.setState({
				percent: 100 + event.srcElement.defaultView.scrollY * (2 + event.srcElement.defaultView.scrollY / 100),
			})
		}
	}

	updateCanvas() {
		const { xPos, yPos, width, height } = this.state.apple;
		const ctx = this.refs.aim_apple_img.getContext('2d');
		let base_image = new Image();
		base_image.src = AppleImage;
		base_image.onload = function(){
			ctx.drawImage(base_image, xPos, yPos, width, height );
		}
	}

   	render() {
		const { percent } = this.state;
      	return (		   
			<section className="section section-a13 theme-dark" data-anim-scroll-group="A13" data-analytics-section-engagement="name:a13" >
				<div className="a13-intro icon-intro enhanced" data-component-list="A13" data-analytics-xp="null">
					<div className="sticky-container sticky-scroll-height">
						<div className="content-above-sticky">
							<div className="section-content">
								<div className="row align-items-center">
									<div className="column large-8 large-offset-2 medium-10 medium-offset-1 small-11 small-offset-0">
										<h2 className="eyebrow-icon">
											<span className="visuallyhidden">A13 Bionic</span>
										</h2>
										<h3 className="section-headline section-headline-space-below typography-section-headline-super will-change" style={{transform: 'matrix(1, 0, 0, 1, 0, 0)', opacity: 0}}>
											iPhone&nbsp;11&nbsp;Pro called. 
											<br className="large-show small-hide" /> It&nbsp;wants its&nbsp;chip&nbsp;back.
										</h3>
										<p className="base-only section-intro typography-section-intro-elevated">
											We put the brains of iPhone&nbsp;11&nbsp;Pro in&nbsp;the&nbsp;body of iPhone&nbsp;SE. A13&nbsp;Bionic is the fastest chip ever in a smartphone, period. So everything feels fluid, whether you’re launching apps, playing the latest games, or exploring new ways to work and play with augmented&nbsp;reality.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="sticky-content">
							<div className="sticky-overflow-hidden">							
								<div className="masked" style={{ WebkitMaskSize: `${percent}px` }}>
									<div className="inline-video-container" style={{transform: 'matrix(1.89137, 0, 0, 1.89137, 0, 0)'}}>
										<div className="inline-video-media">
											<div style={{ backgroundColor: 'white', height: '100%', opacity: percent < 3000 ? 1 : 3000 / percent, position: 'relative', zIndex: 2 }}>

											</div>
											<video muted={true} playsInline="" loop="1" ref="vfAyba" 
												data-video-source-basepath="https://www.apple.com/105/media/us/iphone-se/2020/90024c0f-285a-4bf5-af04-2c38de97b06e/anim/arcade-loop/" 
												className="enhanced-only vp-large video-loaded video-can-play video-download-complete" 
												src="https://www.apple.com/105/media/us/iphone-se/2020/90024c0f-285a-4bf5-af04-2c38de97b06e/anim/arcade-loop/large.mp4"
												autoPlay playsInline loop
												>
											</video>
											<div className="inline-video-frame-start no-inversion">

											</div>
										</div>
									</div>
								</div>
								<div className="sticky-overlay enhanced-only will-change" style={{opacity: 0}}></div>
							</div>
							<div className="hero-transition-overlay" data-anim-tween="{anchors;: [.section-a13], start: a0t - 100vh,end: a0t,opacity: [1, 0]}" style={{opacity: 0}}></div>
							<div className="playback-control-container">
								<button className="playback-control play disabled" data-aria-paused="Play animation of video gameplay" data-aria-playing="Pause animation of video gameplay" data-analytics-click-play="prop3: play - a13" data-analytics-title-play="play - a13" data-analytics-click-pause="prop3: pause - a13" data-analytics-title-pause="pause - a13" aria-label="Play animation of video gameplay" data-analytics-click="prop3: pause - a13" data-analytics-title="pause - a13"></button>
							</div>
						</div>
					</div>
				</div>
			</section>
      	);
   }
}

export default App;