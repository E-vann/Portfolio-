let els = document.querySelectorAll('.effect-oscar')


for (const el of els) {

    el.addEventListener('mousemove', (e) => handleMove(e, el))
    el.addEventListener('mouseout', function() {
        el.style.transform = 'perspective(500px)  rotateX(0) rotateY(0)'
    })

    el.addEventListener('mousedown', function() {
        el.style.transform = 'perspective(500px)  rotateX(0) rotateY(0)'
    })

    el.addEventListener('mouseup', function() {
        el.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
    })

}



function handleMove(e, el) {
    const height = el.clientHeight
    const width = el.clientWidth

    const xVal = e.layerX
    const yVal = e.layerY
    const yRotation = 7 * ((xVal - width / 2) / width)
    const xRotation = -7 * ((yVal - height / 2) / height)
    const string = 'perspective(500px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
    el.style.transform = string
}