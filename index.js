// console.log("helo ")

let mainContainer = document.getElementsByClassName("mainContainer")
// console.log(mainContainer)

let images = ['images/crash.png', 'images/kick.png', 'images/snare.png']
for (let index = 0; index < 4; index++) {
    images.push(`images/tom${index+1}.png`)
}
// console.log(images)

let sounds = ['sounds/crash.mp3', 'sounds/kick-bass.mp3', 'sounds/snare.mp3']
for (let index = 0; index < 4; index++) {
    sounds.push(`sounds/tom-${index+1}.mp3`)
}

// console.log(sounds)

for (let index = 0; index < mainContainer.length; index++) {
    img = document.createElement('img')
    img.src = images[index]
    img.className = `imgs ${sounds[index].split('/')[1].split('.')[0]}`
    img.style.width = '150px'
    img.style.height = '150px'
    mainContainer[index].prepend(img)
    // console.log('sd')
}

let arrImgSrcs = Array.from(images)
images = document.getElementsByClassName('imgs')

// console.log(arrImgSrcs)
let audio = new Audio()
for (let index = 0; index < images.length; index++) {
    images[index].addEventListener('click', (e)=>{
        let index = arrImgSrcs.indexOf(e.target.src.split('/')[4]+ '/' + e.target.src.split('/')[5])
        // console.log(index)
        audio.src = sounds[index]
        audio.play()
        console.log(e.target.src.split('/')[5])
        console.log(sounds[index])
    })
}

function keySwitch(val){
    let player = ''
    switch(val){  // plays the sound by clicking the img and btn pressing
        case 'w':
            player = document.getElementsByClassName('crash')[0]
            player.click()
            break;
        case 'a':
            player = document.getElementsByClassName('kick-bass')[0]
            player.click()
            break;
        case 's':
            player = document.getElementsByClassName('snare')[0]
            player.click()
            break;
        case 'd':
            player = document.getElementsByClassName('tom-1')[0]
            player.click()
            break;
        case 'j':
            player = document.getElementsByClassName('tom-2')[0]
            player.click()
            break;
        case 'k':
            player = document.getElementsByClassName('tom-3')[0]
            player.click()
            break; 
        case 'l':
            player = document.getElementsByClassName('tom-4')[0]
            player.click()   
            break;
    }
}

document.getElementsByTagName('body')[0].onkeydown = (e) =>{
    keySwitch(e.key)
}

let dispBtns = document.getElementsByTagName('button')
for (let index = 0; index < dispBtns.length; index++) {
    dispBtns[index].addEventListener('click', (e)=>{
        // console.log(e.target.innerHTML)
        keySwitch(e.target.innerHTML)
    })
}

// now working on buttonUp