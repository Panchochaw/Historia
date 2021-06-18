const app = document.getElementById('typewriter');
const typewriter = new Typewriter(app,{
    loop: true,
    delay:75
});
 typewriter
 .typewriter('Historiainador, perry xd')
 .pauseFor(200)
 .start();