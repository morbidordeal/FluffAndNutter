import { Component, OnInit } from '@angular/core';
import { Scene, PerspectiveCamera, TextureLoader, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, Color } from 'three-full'
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'jacks-kingdom',
  templateUrl: './jacksKingdom.component.html',
  styleUrls: ['./jacksKingdom.component.scss']
})
export class JacksKingdomComponent implements OnInit {
  ngOnInit(): void {
    this.threeJsDemo();
  }

  renderer: WebGLRenderer;
  scene: Scene;
  camera: PerspectiveCamera;
  cube: Mesh;
  textureLoader: TextureLoader;

  threeJsDemo() {
    this.red = 0;
    this.green = 30;
    this.blue = 70;

    this.textureLoader = new TextureLoader();
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    var geometry = new BoxGeometry( 1, 1, 1 );

    //var material = new MeshBasicMaterial( { color: 0x00ff00 } );
    var material = this.getImageMaterial();

    this.cube = new Mesh( geometry, material );
    this.scene.add( this.cube );

    this.camera.position.z = 5;
    this.animate();
  }

  getImageMaterial(){
    var texture0 = this.textureLoader.load( '../../assets/images/ahegao1.jpg' );
    var texture1 = this.textureLoader.load( '../../assets/images/ahegao2.jpg' );
    var texture2 = this.textureLoader.load( '../../assets/images/ahegao3.jpg' );
    var texture3 = this.textureLoader.load( '../../assets/images/ahegao4.jpg' );
    var texture4 = this.textureLoader.load( '../../assets/images/ahegao5.jpg' );
    var texture5 = this.textureLoader.load( '../../assets/images/ahegao6.gif' );

    return [
        new MeshBasicMaterial( { map: texture0 } ),
        new MeshBasicMaterial( { map: texture1 } ),
        new MeshBasicMaterial( { map: texture2 } ),
        new MeshBasicMaterial( { map: texture3 } ),
        new MeshBasicMaterial( { map: texture4 } ),
        new MeshBasicMaterial( { map: texture5 } )
    ];
  }

  red: number;
  green: number;
  blue: number;

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    // this.updateColors();
    // var colorValue = parseInt(this.hexColorString());
    // var color = new Color( colorValue );
    // this.cube.material.color.set(color);
    this.renderer.render( this.scene, this.camera );
  }

  updateColors(){
    this.red = this.red > 99 ? 0 : this.red + 1;
    this.green = this.green > 99 ? 0 : this.green + 1;
    this.blue = this.blue > 99 ? 0 : this.blue + 1;
  }

  hexColorString(){
    return `0x${this.colorString(this.red)}${this.colorString(this.green)}${this.colorString(this.blue)}`;
  }

  colorString(color: number){
    return color < 10 ? "0" + color.toString() : color.toString();
  }

  title = 'fluff-and-nutter';
}
