import Phaser from 'phaser'
var platforms
var player
var cursors
var stars
var score = 0
var scoreText
var bombs
var gameOver = false
export default class CollectingStarsScene extends Phaser.Scene
{
	constructor()
	{
        super('collecting-stars-scene')

    }
    
	preload()
	{
        this.load.image('ground', 'images/platform.png')
        this.load.image('sky', 'images/sky.png')
        this.load.image('star', 'images/star.png')
        this.load.image('bomb', 'images/bomb.png')

        this.load.spritesheet('dude', 'images/dude.png', {
            frameWidth : 32, frameHeight : 48
        })
        
    }

    create()
    {
        this.add.image(400, 300, 'sky')
        // this.add.image(400, 300, 'star')

        platforms = this.physics.add.staticGroup()

        platforms.create(400, 568, 'ground').setScale(2).refreshBody()

        platforms.create(600, 400, 'ground')
        platforms.create(50, 250, 'ground')
        platforms.create(750, 220, 'ground')

        player = this.physics.add.sprite(100, 450, 'dude');
        player.setCollideWorldBounds(true);
        player.setBounce(0.2);

        this.physics.add.collider(player, platforms)

        cursors = this.input.keyboard.createCursorKeys()

        stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        
        stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
        });

    }


    update()
    {

    }

}