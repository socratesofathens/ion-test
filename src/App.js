import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import { useState } from 'react'
import './style.css'

class Scene extends Phaser.Scene {
  init () {
    this.cameras.main.setBackgroundColor('#24252A')
  }

  create () {
    const r1 = this.add.circle(200, 150, 150, 0x6666ff);

    const r2 = this.add.circle(400, 150, 150, 0x9966ff).setStrokeStyle(4, 0xefc53f);

    this.physics.add.existing(r1);
    this.physics.add.existing(r2);

    r1.body.velocity.x = 100;
    r1.body.velocity.y = 100;
    r1.body.bounce.x = 1;
    r1.body.bounce.y = 1;
    r1.body.collideWorldBounds = true;

    r2.body.velocity.x = -100;
    r2.body.velocity.y = 100;
    r2.body.bounce.x = 1;
    r2.body.bounce.y = 1;
    r2.body.collideWorldBounds = true;
  }
}

export default function App () {
  const [show, setShow] = useState(true)

  const game = {
    type: Phaser.AUTO,
    width: 1000,
    height: 1000,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: Scene
  }

  if (show) {
    return <>
      <button onClick={() => setShow(false)}>Hide</button>
      <IonPhaser game={game} initialize />
    </>
  } else {
    return <button onClick={() => setShow(true)}>Show</button>
  }
}
