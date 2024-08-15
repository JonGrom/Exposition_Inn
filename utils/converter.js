const Character = require('../models/Character')


function convertToDb(charObj) {

    const databaseObj = Character.create(
        {
            name: charObj.name,
            archetype: charObj.archetype, 
            level: charObj.level, 
            background: charObj.background, 
            race: charObj.race, 

            strength: charObj.stat.strength.val, 
            strMod: charObj.stat.strength.mod, 
            strSaveProf: charObj.stat.strength.prof, 
            strSaveVal: charObj.stat.strength.saveVal, 

            dexterity: charObj.stat.dexterity.val, 
            dexMod: charObj.stat.dexterity.mod, 
            dexSaveProf: charObj.stat.dexterity.prof, 
            dexSaveVal: charObj.stat.dexterity.saveVal, 

            constitution: charObj.stat.constitution.val, 
            conMod: charObj.stat.constitution.mod, 
            conSaveProf: charObj.stat.constitution.prof, 
            conSaveVal: charObj.stat.constitution.saveVal, 

            intelligence: charObj.stat.intelligence.val, 
            intMod: charObj.stat.intelligence.mod, 
            intSaveProf: charObj.stat.intelligence.prof, 
            intSaveVal: charObj.stat.intelligence.saveVal, 

            wisdom: charObj.stat.wisdom.val, 
            wisMod: charObj.stat.wisdom.mod, 
            wisSaveProf: charObj.stat.wisdom.prof, 
            wisSaveVal: charObj.stat.wisdom.saveVal, 

            charisma: charObj.stat.charisma.val, 
            chaMod: charObj.stat.charisma.mod, 
            chaSaveProf: charObj.stat.charisma.prof, 
            chaSaveVal: charObj.stat.charisma.saveVal, 

            acrobaticsProf: charObj.skill.acrobatics.prof, 
            acrobaticsVal: charObj.skill.acrobatics.val,

            animalHandlingProf: charObj.skill.animalHandling.prof, 
            animalHandlingVal: charObj.skill.animalHandling.val,

            arcanaProf: charObj.skill.arcana.prof, 
            arcanaVal: charObj.skill.arcana.val, 

            athleticsProf: charObj.skill.athletics.prof, 
            athleticsVal: charObj.skill.athletics.val, 

            deceptionProf: charObj.skill.deception.prof, 
            deceptionVal: charObj.skill.deception.val, 

            historyProf: charObj.skill.history.prof, 
            historyVal: charObj.skill.history.val, 

            insightProf: charObj.skill.insight.prof, 
            insightVal: charObj.skill.insight.val, 

            intimidationProf: charObj.skill.intimidation.prof, 
            intimidationVal: charObj.skill.intimidation.val, 

            investigationProf: charObj.skill.investigation.prof, 
            investigationVal: charObj.skill.investigation.val, 

            medicineProf: charObj.skill.medicine.prof, 
            medicineVal: charObj.skill.medicine.val, 

            natureProf: charObj.skill.nature.prof, 
            natureVal: charObj.skill.nature.val, 

            perceptionProf: charObj.skill.perception.prof, 
            perceptionVal: charObj.skill.perception.val, 

            performanceProf: charObj.skill.performance.prof, 
            performanceVal: charObj.skill.performance.val, 

            persuasionProf: charObj.skill.persuasion.prof, 
            persuasionVal: charObj.skill.persuasion.val, 

            religionProf: charObj.skill.religion.prof, 
            religionVal: charObj.skill.religion.val, 

            sleightOfHandProf: charObj.skill.sleightOfHand.prof, 
            sleightOfHandVal: charObj.skill.sleightOfHand.val, 

            stealthProf: charObj.skill.stealth.prof, 
            stealthVal: charObj.skill.stealth.val,

            survivalProf: charObj.skill.survival.prof, 
            survivalVal: charObj.skill.survival.val, 

            spellsKnown: charObj.spellsKnown, 
            splClass: charObj.splClass, 
            splAbility: charObj.splAbility, 
            splSave: charObj.splSave, 
            splAtckBonus: charObj.splAtckBonus, 
            lvl1spellSlots: charObj.lvl1spellSlots,

            passivePerception: charObj.passivePerception, 
            languages: charObj.languages, 
            weaponProficiencies: charObj.weaponProficiencies, 
            armorProficiencies: charObj.armorProficiencies, 
            toolProficiencies: charObj.toolProficiencies, 
            armorClass: charObj.armorClass, 
            initiative: charObj.initiative, 
            speed: charObj.speed, 
            hpMax: charObj.hpMax, 
            hitDice: charObj.hitDice, 
            hitDiceCount: charObj.hitDiceCount, 

            // equipment: , 

            hpCurrent: charObj.hpMax, 
            hpTemp: 0, 
            features: charObj.features, 
            traits: charObj.traits, 
            personalityTraits: charObj.personalityTraits, 
            ideals: charObj.ideals, 
            bonds: charObj.bonds, 
            flaws: charObj.flaws, 
            alignment: '' 
        }
    )

    return databaseObj;
}


module.exports = {
    convertToDb
}