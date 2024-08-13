/*
##################################################
 Code By Shine Nagumo (W5G) Write     
 This Code Is Exclusive For This Modpack
##################################################
*/

ServerEvents.recipes(event => {
	event.shaped('minecraft:elytra', [
		'NSN',
		'F F',
		'F F'
		], {
		N: 'minecraft:netherite_ingot',
		S: 'minecraft:stick',
		F: 'minecraft:feather'
		} //New Elytra recipe (2x Netherite ingot, 1x Stick, 4x Feather)
	).id(`createpackutils:crafting/craftable_elytra`)
	event.shaped('minecraft:bookshelf', [
		'PPP',
		'BBB',
		'PPP'
		], {
		P: '#minecraft:planks',
		B: 'minecraft:book'
		}//New Bookshelf recipe (3x book, 6x block have minecraft:planks tag)
	).id(`createpackutils:crafting/only_vanillabookshelf`)
})