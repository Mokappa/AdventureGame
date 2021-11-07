// Initializing the variables
let buttonStart = document.querySelector('#startButton')
let buttonCredit = document.querySelector('#creditButton')
let buttonClose = document.querySelector('#closeTag')

let bttnChs1 = document.querySelector('#buttonToChoose1')
let bttnChs2 = document.querySelector('#buttonToChoose2')
let bttnChs3 = document.querySelector('#buttonToChoose3')

let buttonValue = document.querySelector('#buttonStyle')


// Animation Text
let stopType
let stopType2

function StartTypeWriter(aText) {
    let destination = document.querySelector('#messageTextArea')
    destination.innerHTML = ``

    let iSpeed = 100
    let iIndex = 0

    function typewriter() {
        destination.innerHTML += aText[iIndex]

        if(iIndex < aText.length - 1) {
            ++ iIndex
            stopType = setTimeout(typewriter, iSpeed)
        }
    }

    stopType2 = setTimeout(typewriter, 1500)
}


// Sound effect
let clickySound = new Audio('./Effects/Clicky.mp3')
let deathSound = new Audio('./Effects/Death.mp3')
let wowSound = new Audio('./Effects/Wow.mp3')

function SoundPlay() {
    clickySound.play()
}


// Credit Text Area
buttonCredit.addEventListener('click', function() {
    document.querySelector('.creditAreaBackground').style.display = 'flex'
    document.querySelector('.creditAreaBackground').style.animation = 'fadeIn forwards 0.2s'
})

buttonClose.addEventListener('click', function() {
    document.querySelector('.creditAreaBackground').style.animation = 'fadeOut forwards 0.2s'
    setTimeout(function() {
        document.querySelector('.creditAreaBackground').style.display = 'none'
    }, 300);
})


// Start Input Button Animation
buttonStart.addEventListener('click', function() {
    document.querySelector('#startBackgroundBlack').style.display = 'inline-block'
    document.querySelector('#startBackgroundBlack').style.animation = 'fadeInBackground forwards 3s'

    setTimeout(function() {
        document.querySelector('.startBackground').style.display = 'none'
        document.querySelector('.gameTextArea').style.display = 'flex'
    }, 1500)

    setTimeout(function() {
        document.querySelector('#startBackgroundBlack').style.display = 'none'
    }, 3000)
})


// Adding the name of the player
buttonValue.addEventListener('click', function() {
    let valueInput = document.querySelector('#inputText').value

    if(valueInput) {
        document.querySelector('#inputText').style.opacity = '0'
        document.querySelector('#buttonStyle').style.opacity = '0'

        setTimeout(function() {
            document.querySelector('#inputText').style.display = 'none'
            document.querySelector('#buttonStyle').style.display = 'none'
        }, 500)

        setTimeout(function() {
            startGame(valueInput)
        }, 2000)
    }
})


// Starting the game
function startGame(valueInput) {
    document.querySelector('#messageTextArea').style.display = 'inline-block'

    document.querySelector('.gameTextArea').addEventListener('mouseover', function () {
        document.querySelector('.gameTextArea').style.opacity = '1'
    })

    document.querySelector('.gameTextArea').addEventListener('mouseout', function () {
        document.querySelector('.gameTextArea').style.opacity = '0.1'
    })

    document.querySelector('#background1').style.display = 'inline-block'

    let aaText = `Oh, hello ${valueInput}. As you can see, it is a very hot and sunny day. You remembered that you are very thirsty and you don't have money on you. So, you decided you're going back home.`
    StartTypeWriter(aaText)

    setTimeout(function() {
        document.querySelector('#buttonToChoose2').style.display = 'flex'
        if( window.innerWidth > 768 ) {
            bttnChs2.style.margin = '0'
        }
        document.querySelector('#btc2pArea').innerHTML = `Go home`
    }, 5000)

    // Death Scenes
    const stageDeathGameWater = () => {
        clearTimeout(stopType)
        clearTimeout(stopType2)

        bttnChs1.style.display = 'none'
        bttnChs2.style.display = 'none'
        bttnChs3.style.display = 'none'

        document.querySelector('#background1').style.display = 'none'
        document.querySelector('#background2').style.display = 'none'
        document.querySelector('#background3').style.display = 'none'

        let aaText = `This water tastes funny. A yes. You, ${valueInput}, begin to feel dizzy and sleepy 😢.`
        StartTypeWriter(aaText)

        setTimeout(function () {
            document.querySelector('#DeathBackground').style.display = 'flex'
        }, 10000)

        setTimeout(function () {
            document.querySelector('#DeathBackground').style.opacity = '1'
            document.querySelector('#resetButton').addEventListener('click', stage2Game)

            deathSound.play()
        }, 10200)
    }

    const stageDeathGameKitchen = () => {
        clearTimeout(stopType)
        clearTimeout(stopType2)

        bttnChs1.style.display = 'none'
        bttnChs2.style.display = 'none'
        bttnChs3.style.display = 'none'
        document.querySelector('#resetButton').removeEventListener('click', stage2Game)

        document.querySelector('#background1').style.display = 'none'
        document.querySelector('#background2').style.display = 'none'
        document.querySelector('#background3').style.display = 'none'
        document.querySelector('#background4').style.display = 'none'

        let aaText = `Oh no, a wild racoon appeared. He drank all your water. You fell down from the shock and he fortnite-dances on your body. Rip 😢.`
        StartTypeWriter(aaText)

        setTimeout(function () {
            document.querySelector('#DeathBackground').style.display = 'flex'
        }, 16000)

        setTimeout(function () {
            document.querySelector('#DeathBackground').style.opacity = '1'
            document.querySelector('#resetButton').addEventListener('click', stage3Game)
            deathSound.play()
        }, 16200)
    }

    const stageDeathGameBasement = () => {
        clearTimeout(stopType)
        clearTimeout(stopType2)

        bttnChs1.style.display = 'none'
        bttnChs2.style.display = 'none'
        bttnChs3.style.display = 'none'
        document.querySelector('#resetButton').removeEventListener('click', stage2Game)

        document.querySelector('#background1').style.display = 'none'
        document.querySelector('#background2').style.display = 'none'
        document.querySelector('#background3').style.display = 'none'
        document.querySelector('#background4').style.display = 'none'

        let aaText = `After opening the door, you see The Rock 🗿 raising his eyebrow and flexing his muscles. He says: "You, ${valueInput}, and I are going to gulag" 😢.`
        StartTypeWriter(aaText)

        setTimeout(function () {
            document.querySelector('#DeathBackground').style.display = 'flex'
        }, 16000)

        setTimeout(function () {
            document.querySelector('#DeathBackground').style.opacity = '1'
            document.querySelector('#resetButton').addEventListener('click', stage3Game)

            deathSound.play()
        }, 16200)
    }

    const stageDeathGameRoomYes = () => {
        clearTimeout(StopVarNoRoom)
        clearTimeout(stopType)
        clearTimeout(stopType2)

        bttnChs1.style.display = 'none'
        bttnChs2.style.display = 'none'
        bttnChs3.style.display = 'none'
        document.querySelector('#resetButton').removeEventListener('click', stage3Game)

        document.querySelector('#background1').style.display = 'none'
        document.querySelector('#background2').style.display = 'none'
        document.querySelector('#background3').style.display = 'none'
        document.querySelector('#background4').style.display = 'none'
        document.querySelector('#background5').style.display = 'none'

        let aaText = `A genie offers you a lifetime supply of water. You said "Yes". He drowns you. Rip, ${valueInput} 😢.`
        StartTypeWriter(aaText)

        setTimeout(function () {
            document.querySelector('#DeathBackground').style.display = 'flex'
        }, 11000)

        setTimeout(function () {
            document.querySelector('#DeathBackground').style.opacity = '1'
            document.querySelector('#resetButton').addEventListener('click', stageUpStairs)

            deathSound.play()
        }, 11200)
    }

    // No Room Text Reset
    let StopVarNoRoom
    const stageRoomNo = () => {
        clearTimeout(StopVarNoRoom)
        clearTimeout(stopType)
        clearTimeout(stopType2)

        let aaText = `Synonym for negative answer, 2 letters (no). Nice. 💯👌😩`
        StartTypeWriter(aaText)

        StopVarNoRoom = setTimeout(function() {
            clearTimeout(stopType)
            clearTimeout(stopType2)

            let aaText = `Suddenly, as if a strong person grabbed you, you get carried upstairs. The rumors are true, John Cena exists.`
            StartTypeWriter(aaText)
        }, 8000)
    }

    // Seeing the glass of water
    const stageGlassWGame = () => {
        clearTimeout(stopType)
        clearTimeout(stopType2)

        bttnChs1.style.display = 'none'
        bttnChs3.style.display = 'none'
        bttnChs1.removeEventListener('click', stage3Game)
        bttnChs3.removeEventListener('click', stageGlassWGame)

        document.querySelector('#background3').style.display = 'inline-block'

        bttnChs1.addEventListener('click', stage2Game)
        bttnChs3.addEventListener('click', stageDeathGameWater)

        let aaText = `You can drink the water or go back and enter home.`
        StartTypeWriter(aaText)

        setTimeout(function() {
            bttnChs1.style.display = 'flex'
            bttnChs3.style.display = 'flex'

            document.querySelector('#btc1pArea').innerHTML = `Go back`
            document.querySelector('#btc3pArea').innerHTML = `Drink the water`
        }, 5000)
    }

    const winningScene = () => {
        clearTimeout(StopVarNoRoom)
        clearTimeout(stopType)
        clearTimeout(stopType2)

        bttnChs1.style.display = 'none'
        bttnChs2.style.display = 'none'
        bttnChs3.style.display = 'none'
        document.querySelector('#resetButton').removeEventListener('click', stageUpStairs)

        document.querySelector('#background1').style.display = 'none'
        document.querySelector('#background2').style.display = 'none'
        document.querySelector('#background3').style.display = 'none'
        document.querySelector('#background4').style.display = 'none'
        document.querySelector('#background5').style.display = 'none'
        document.querySelector('#background6').style.display = 'none'
        document.querySelector('#background7').style.display = 'none'

        let aaText = `Wow, after a tiring day, you drink the water without looking and you realize it wasn't water, it was G FUEL 😃. G FUEL is a Natural Energy Drink Formula created by Gamma Labs. Our original goal was to create a 100% clean, natural, and healthy alternative to sugar-loaded Energy Drinks. What we were after was an Energy Drink which would meet even the high standards of the most active and hectic lifestyles.`
        StartTypeWriter(aaText)

        setTimeout(function () {
            document.querySelector('#WinningBackground').style.display = 'flex'
        }, 14500)

        setTimeout(function () {
            wowSound.play()

            document.querySelector('#WinningBackground').style.opacity = '1'
            document.querySelector('#resetButtonWin').addEventListener('click', function () {
                document.location.reload(true)
            })
        }, 14700)
    }

    const stage4Game = () => {
        clearTimeout(StopVarNoRoom)
        clearTimeout(stopType)
        clearTimeout(stopType2)

        document.querySelector('#DeathBackground').style.display = 'none'
        document.querySelector('#DeathBackground').style.opacity = '0'
        document.querySelector('#background5').style.display = 'none'

        bttnChs1.style.display = 'none'
        bttnChs2.style.display = 'none'
        bttnChs3.style.display = 'none'

        if( window.innerWidth > 768 ) {
            bttnChs2.style.marginRight = '200px'
        }
        else {
            bttnChs2.style.marginRight = '0px'
        }

        bttnChs1.removeEventListener('click', stageDeathGameRoomYes)
        bttnChs2.removeEventListener('click', stage4Game)
        bttnChs3.removeEventListener('click', stageRoomNo)

        bttnChs2.addEventListener('click', winningScene)
        bttnChs2.style.marginRight = '0'

        document.querySelector('#background6').style.display = 'inline-block'

        let aaText = `You go into the 'Big Room' and see that you have a LOT of water.`
        StartTypeWriter(aaText)

        setTimeout(function() {
            aaText = `You reach the table and take the first thing that you put your hand on and drink it.`
            StartTypeWriter(aaText)
        }, 9000)


        setTimeout(function() {
            document.querySelector('#background6').style.display = 'none'
            document.querySelector('#background7').style.display = 'inline-block'
        }, 10000)

        setTimeout(function() {
            bttnChs2.style.display = 'flex'
            document.querySelector('#btc2pArea').innerHTML = `Drink`
        }, 14000)
    }

    const stageUpStairs = () => {
        clearTimeout(stopType)
        clearTimeout(stopType2)

        document.querySelector('#DeathBackground').style.display = 'none'
        document.querySelector('#DeathBackground').style.opacity = '0'
        document.querySelector('#background4').style.display = 'none'

        bttnChs1.style.display = 'none'
        bttnChs2.style.display = 'none'
        bttnChs3.style.display = 'none'

        if( window.innerWidth > 768 ) {
            bttnChs2.style.marginRight = '200px'
        }
        else {
            bttnChs2.style.marginRight = '0px'
        }

        bttnChs1.removeEventListener('click', stageDeathGameKitchen)
        bttnChs2.removeEventListener('click', stageDeathGameBasement)
        bttnChs3.removeEventListener('click', stageUpStairs)

        bttnChs1.addEventListener('click', stageDeathGameRoomYes)
        bttnChs2.addEventListener('click', stage4Game)
        bttnChs3.addEventListener('click', stageRoomNo)

        document.querySelector('#background5').style.display = 'inline-block'

        let aaText = `Suddenly, as if a strong person grabbed you, you get carried upstairs. The rumors are true, John Cena exists.`
        StartTypeWriter(aaText)

        setTimeout(function() {
            bttnChs1.style.display = 'flex'
            document.querySelector('#btc1pArea').innerHTML = `Go in the room 'Yes'`

            bttnChs2.style.display = 'flex'
            document.querySelector('#btc2pArea').innerHTML = `Go in the room 'Big Room'`
    
            bttnChs3.style.display = 'flex'
            document.querySelector('#btc3pArea').innerHTML = `Go in the room 'No'`
        }, 5000)
    }

    // Third part of the game
    const stage3Game = () => {
        clearTimeout(stopType)
        clearTimeout(stopType2)

        document.querySelector('#DeathBackground').style.display = 'none'
        document.querySelector('#DeathBackground').style.opacity = '0'
        document.querySelector('#background2').style.display = 'none'

        bttnChs1.style.display = 'none'
        bttnChs2.style.display = 'none'
        bttnChs3.style.display = 'none'

        if( window.innerWidth > 768 ) {
            bttnChs2.style.marginRight = '200px'
        }
        else {
            bttnChs2.style.marginRight = '0px'
        }

        bttnChs1.removeEventListener('click', stage3Game)
        bttnChs2.removeEventListener('click', stage2Game)
        bttnChs3.removeEventListener('click', stageGlassWGame)

        bttnChs1.addEventListener('click', stageDeathGameKitchen)
        bttnChs2.addEventListener('click', stageDeathGameBasement)
        bttnChs3.addEventListener('click', stageUpStairs)

        document.querySelector('#background4').style.display = 'inline-block'

        let aaText = `This is your house, ${valueInput}. Very big and very beautiful. You have so many choices (so much wow), pls choose one.`
        StartTypeWriter(aaText)

        setTimeout(function() {
            bttnChs1.style.display = 'flex'
            document.querySelector('#btc1pArea').innerHTML = `Go in the kitchen`

            bttnChs2.style.display = 'flex'
            document.querySelector('#btc2pArea').innerHTML = `Go in the basement`
    
            bttnChs3.style.display = 'flex'
            document.querySelector('#btc3pArea').innerHTML = `Go upstairs`
        }, 5000)
    }

    // Second part of the game
    const stage2Game = () => {
        clearTimeout(stopType)
        clearTimeout(stopType2)

        document.querySelector('#DeathBackground').style.display = 'none'
        document.querySelector('#DeathBackground').style.opacity = '0'
        document.querySelector('#background1').style.display = 'none'
        document.querySelector('#background3').style.display = 'none'
    
        bttnChs1.style.display = 'none'
        bttnChs2.style.display = 'none'
        bttnChs3.style.display = 'none'

        bttnChs1.removeEventListener('click', stage2Game)
        bttnChs3.removeEventListener('click', stageDeathGameWater)

        bttnChs1.addEventListener('click', stage3Game)
        bttnChs3.addEventListener('click', stageGlassWGame)
    
        document.querySelector('#background2').style.display = 'inline-block'

        let aaText = `${valueInput}, as you're approaching home, you see a glass of water laying on the grass (you are very thirsty). You stop and think if you will pick it up.`
        StartTypeWriter(aaText)
    
        setTimeout(function() {
            bttnChs1.style.display = 'flex'
            document.querySelector('#btc1pArea').innerHTML = `Enter home`
    
            bttnChs3.style.display = 'flex'
            document.querySelector('#btc3pArea').innerHTML = `See the glass`
        }, 5000)
    }

    // Initializing the second part of the game
    bttnChs2.addEventListener('click', stage2Game)
}