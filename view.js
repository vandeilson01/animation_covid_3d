
var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set(20, 20, 50);

var renderer = new THREE.WebGLRenderer(); 
var w = window.innerWidth;
w =600;
var h = window.innerHeight;
h = 600;

document.body.appendChild( renderer.domElement ); 

var geometry = new THREE.BoxGeometry( 1, 200, 200, 1, 100, 10); 
var material = new THREE.MeshNormalMaterial( {wireframe: true} );

var cube = new THREE.Mesh( geometry, material ); 
scene.add(cube); 

var material1 = new THREE.MeshBasicMaterial( {map: THREE.ImageUtils.loadTexture("teste.jpg") } );
var geometry1 = new THREE.BoxGeometry( 0.3, 13, 0.3); 

var a = new THREE.Mesh( geometry1, material1); 
var b = new THREE.Mesh( geometry1, material1); 
var c = new THREE.Mesh( geometry1, material1); 
var d = new THREE.Mesh( geometry1, material1); 
var e = new THREE.Mesh( geometry1, material1); 
var f = new THREE.Mesh( geometry1, material1); 
var g = new THREE.Mesh( geometry1, material1); 
var h = new THREE.Mesh( geometry1, material1); 
var i = new THREE.Mesh( geometry1, material1); 
var j = new THREE.Mesh( geometry1, material1); 

scene.add(a);
scene.add(b);
scene.add(c);
scene.add(d);
scene.add(e);
scene.add(f);
scene.add(g);
scene.add(h);
scene.add(i);
scene.add(j);



a.rotation.z += 10;
a.rotation.y += 100;

b.rotation.z += 20;
b.rotation.y += 200;

c.rotation.z += 30;
c.rotation.y += 300;

d.rotation.z += 40;
d.rotation.y += 400;

e.rotation.z += 50;
e.rotation.y += 500;

f.rotation.z += 60;
f.rotation.y += 600;

g.rotation.z += 70;
g.rotation.y += 700;

h.rotation.z += 80;
h.rotation.y += 800;

i.rotation.z += 90;
i.rotation.y += 900;

j.rotation.z+= 100;
j.rotation.y += 1000;

var clientX = 0, 
clientY = 0,
targetRotationX=0,
targetRotationY=0,
targetRotationOnMouseDownX=0,
targetRotationOnMouseDownY=0,
mouseXOnMouseDown=0,
mouseYOnMouseDown=0,
mouseX = 0,
mouseY = 0;

var canvasHalfX= w / 2;
var canvasHalfY= h /2;

var ge = new THREE.SphereGeometry( 5, 32, 32 );
var ma = new THREE.MeshBasicMaterial( {map: THREE.ImageUtils.loadTexture("teste.jpg") } );
var sp = new THREE.Mesh( ge, ma );
scene.add( sp );


function onMouseMove( event ) {

//targetRotationX = targetRotationOnMouseDownX + (mouseX - mouseXOnMouseDown) * 0.02;
//targetRotationY = targetRotationOnMouseDownY + (mouseY - mouseYOnMouseDown) * 0.002;

//mouse.x= event.clientX / window.innerWidth - w;
//mouse.y = event.clientY / window.innerHeight  - h; 

//camera.position.z +=1r;
//camera.position.y += targetRotationX ;
//camera.position.x += targetRotationY;

//camera.position.x += ( mouseX - camera.position.x ) * 0.04;
//camera.position.y += ( - mouseY - camera.position.y ) * 0.04;
} 

function render(){
	document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            // camera.position.z += 2;
        break;
        case 38:
            camera.position.y += 2;
        break;
        case 39:
        // camera.position.z -= 2;
        break;
        case 40:
            camera.position.y -= 2;
        break;
    }

};

// var intersects = raycaster.intersectObjects( scene.children ); 
// for ( var i = 0; i < intersects.length; i++ ) { 
// intersects[ i ].object.material.color.set( 'rgba(230, 223, 223, 0.43)' ); //0xff0000
// } 
// raycaster.setFromCamera( mouse, camera ); 


//cube.rotation.x += (targetRotationX - cube.rotation.x) * 0.05;
//cube.rotation.y += (targetRotationY - cube.rotation.y) * 0.05;

//a.rotation.x += (targetRotationX - cube.rotation.x) * 0.05;
//a.rotation.y += (targetRotationY - cube.rotation.y) * 0.05;

renderer.render( scene, camera ); 
renderer.setSize( window.innerWidth, window.innerHeight); 
// requestAnimationFrame( render );     
window.addEventListener( 'mousemove', onMouseMove, false ); 
window.requestAnimationFrame(render); 



camera.lookAt( scene.position );

a.rotation.x += 0.004;
b.rotation.y += 0.004;
c.rotation.x += 0.004;
d.rotation.y += 0.004;
e.rotation.x += 0.004;
f.rotation.y += 0.004;
g.rotation.x += 0.004;
h.rotation.y += 0.004;
i.rotation.x += 0.004;
j.rotation.y += 0.004;


	cube.position.y = 0;
    cube.position.x = 0;
    cube.position.z = 0;
    cube.rotation.x = 0;
    cube.rotation.z = 33;

	
    var b3 = document.querySelector('.buttt');

    var top = document.querySelector('.top');
    var bottom = document.querySelector('.bottom');
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');

    var time = Date.now() * 0.0005;

    camera.position.x = Math.cos( time ) * 10;
    camera.position.z = Math.sin( time ) * 10;


	b3.addEventListener('click', function() {
		camera.position.set(20, 2, 50);
	});

	// bottom.addEventListener('click', function() {

    //     camera.position.y -= 2 * 0.0009;
	// });
	// top.addEventListener('click', function() {

    //     camera.position.y += 2 * 0.0009;
	// });

	var mes = document.querySelector('.mes');
	setTimeout(() => {
		mes.style.display = 'none';
	}, 5000);
}

render();