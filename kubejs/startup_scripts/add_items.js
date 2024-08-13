/*
##################################################
 Code By Shine Nagumo (W5G) Write     
 This Code Is Exclusive For This Modpack
##################################################
*/

StartupEvents.registry('item', event => {
	event.create('apothgembag')
	.displayName('§dApoth§ktheo§r§dsis Gem Bag')
	.tooltip('§5Random Apotheosis Gem.')
	.tooltip('§cWarning:You must clear your inventory before using this item,Otherwise it will disappear.')
	.texture('kubejs:item/gembag')
})