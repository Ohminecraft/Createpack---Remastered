/*
##################################################
 Code By Shine Nagumo (W5G) Write     
 This Code Is Exclusive For This Modpack
##################################################
*/

ItemEvents.rightClicked(event => {
	if(event.item.id == 'kubejs:apothgembag') {
		const min = 1;
		const max = 5;
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; //Random numbers to rolls gem.
		for (let i = 1; i <= randomNumber; i++) {
			event.player.runCommandSilent('apoth gem random') //Run command Apotheosis mod.
		}
		event.item.shrink(1) //Item will be delete if rightclick to this item.
	}
})