function createCubes() {
    const numcubes = 100; 

    for (let i = 0; i < numcubes; i++) {
        const cube = document.createElement("div");
        cube.className = "cube";
        cube.style.top = Math.random() * 100 + "%";
        cube.style.left = Math.random() * 100 + "%";
        cube.style.animationDelay = Math.random() + "s";
        document.body.appendChild(cube);
    }
}

createCubes();