import Phaser from 'phaser'

import CoronaBusterScene from './scenes/CoronaBusterScene'

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 620,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [CoronaBusterScene]
}

export default new Phaser.Game(config)
