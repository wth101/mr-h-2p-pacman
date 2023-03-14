scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(location.column, location.row), assets.tile`transparency16`)
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 1)
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == 20) {
        game.setGameOverMessage(true, "PAC MAN WINS")
        game.gameOver(true)
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    p2.setImage(img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 . 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 . . . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 . . . 5 5 5 5 5 5 
        . . 5 5 5 5 . . . . . 5 5 5 5 . 
        . . . 5 5 5 . . . . . 5 5 5 . . 
        . . . 5 5 5 . . . . . 5 5 5 . . 
        . . . . 5 5 . . . . . 5 5 . . . 
        . . . . . 5 . . . . . 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
function addCoins () {
    while (count < 20) {
        rx = randint(0, 9)
        ry = randint(0, 6)
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(rx, ry), assets.tile`transparency16`)) {
            tiles.setTileAt(tiles.getTileLocation(rx, ry), assets.tile`myTile`)
            count += 1
        }
    }
}
info.onCountdownEnd(function () {
    game.setGameOverMessage(false, "Didn't make it!")
    game.gameOver(false)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    p2.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . 5 . . . . 
        . . . . 5 5 . . . . . 5 5 . . . 
        . . . 5 5 5 . . . . . 5 5 5 . . 
        . . . 5 5 5 . . . . . 5 5 5 . . 
        . . 5 5 5 5 . . . . . 5 5 5 5 . 
        . 5 5 5 5 5 5 . . . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 . . . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 . 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        `)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    p2.setImage(img`
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 . . . . . . 
        5 5 5 5 5 5 5 5 . . . . . . . . 
        5 5 5 5 5 5 5 . . . . . . . . . 
        5 5 5 5 5 5 5 5 . . . . . . . . 
        . 5 5 5 5 5 5 5 5 5 . . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    p2.setImage(img`
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . . . . 5 5 5 5 5 5 5 5 5 . 
        . . . . . . . . 5 5 5 5 5 5 5 5 
        . . . . . . . . . 5 5 5 5 5 5 5 
        . . . . . . . . 5 5 5 5 5 5 5 5 
        . . . . . . 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    p2 = sprites.create(img`
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 . . . . . . 
        5 5 5 5 5 5 5 5 . . . . . . . . 
        5 5 5 5 5 5 5 . . . . . . . . . 
        5 5 5 5 5 5 5 5 . . . . . . . . 
        . 5 5 5 5 5 5 5 5 5 . . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.player2.moveSprite(p2)
    p2.setPosition(18, 11)
    info.startCountdown(35)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    p1 = sprites.create(img`
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 1 1 4 4 4 4 4 1 1 4 4 . 
        . . 4 1 1 1 1 4 4 4 1 1 1 1 4 . 
        . . 4 1 1 8 8 4 4 4 1 1 8 8 4 . 
        . . 4 1 1 8 8 4 4 4 1 1 8 8 4 . 
        . 4 4 4 1 1 4 4 4 4 4 1 1 4 4 4 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . 4 4 . 4 4 4 . . 4 4 4 4 . 4 4 
        . 4 4 . 4 4 4 . . 4 4 4 4 . 4 4 
        . 4 . . . 4 4 . . 4 4 4 . . . 4 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    controller.player1.moveSprite(p1)
    p1.setPosition(133, 8)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "Didn't make it!")
    game.gameOver(false)
})
let p1: Sprite = null
let ry = 0
let rx = 0
let count = 0
let p2: Sprite = null
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`level1`)
addCoins()
