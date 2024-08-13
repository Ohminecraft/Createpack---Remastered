/*
##################################################
 Code By Shine Nagumo (W5G) Write     
 This Code Is Exclusive For This Modpack
##################################################
*/

LootJS.modifiers(event => {
	event.addBlockLootModifier('minecraft:stone').addLoot(
		LootEntry.of('minecraft:raw_copper').when(c => c.randomChance(0.01)),
		LootEntry.of('minecraft:raw_iron').when(c => c.randomChance(0.008)),
		LootEntry.of('minecraft:raw_gold').when(c => c.randomChance(0.005)),
		LootEntry.of('minecraft:redstone').when(c => c.randomChance(0.002)),
		LootEntry.of('minecraft:diamond').when(c => c.randomChance(0.0007))
	)
	event.addLootTypeModifier(LootType.ENTITY)
	.randomChance(0.08)
	.addLoot("kubejs:apothgembag")
	event.addLootTypeModifier(LootType.CHEST)
	.randomChance(0.08)
	.addLoot("kubejs:apothgembag")
})