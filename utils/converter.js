const Weapon = require('../models/Weapon');
const Armor = require('../models/Armor');
const Spell = require('../models/Spell');


function convertToDb(charObj) {

    // console.log("console log in converter: ",charObj)

    const databaseObj = {
            name: charObj.name,
            archetype: charObj.archetype.name, 
            level: charObj.level, 
            background: charObj.background.name, 
            race: charObj.race.name, 

            proficiencyBonus: charObj.profBonus,

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

            spellsKnown: charObj.spellsKnown.join(), 
            splClass: charObj.splClass, 
            splAbility: charObj.splAbility, 
            splSave: charObj.splSave, 
            splAtckBonus: charObj.splAtckBonus, 
            lvl1spellSlots: charObj.lvl1spellSlots,

            passivePerception: charObj.passivePerception, 
            languages: charObj.languages.join(), 
            weaponProficiencies: charObj.weaponProficiencies.join(), 
            armorProficiencies: charObj.armorProficiencies.join(), 
            toolProficiencies: charObj.toolProficiencies.join(), 
            armorClass: charObj.armorClass, 
            initiative: charObj.initiative, 
            speed: charObj.speed, 
            hpMax: charObj.hpMax, 
            hitDice: charObj.hitDice, 
            hitDiceCount: charObj.hitDiceCount, 

            weapon: charObj.equipment.weapon.join(),
            armor: charObj.equipment.armor.join(),
            kit: charObj.equipment.kits.join(),

            hpCurrent: charObj.hpMax, 
            hpTemp: 0, 
            features: charObj.features.join(), 
            traits: charObj.traits.join(), 
            personalityTraits: charObj.personalityTraits, 
            ideals: charObj.ideals, 
            bonds: charObj.bonds, 
            flaws: charObj.flaws, 
            alignment: charObj.alignment 
        }

    return databaseObj;
}



async function convertFromDatabase(databaseObject) {
    let weapons = [];
    if (databaseObject.weapon) {  // Check if weapon field is not null or empty
        let weaponTemp = databaseObject.weapon.split(',');
        for (let i = 0; i < weaponTemp.length; i++) {
            const singleWeapon = await Weapon.findOne({
                where: {
                    weaponName: weaponTemp[i]
                }
            });
            if (singleWeapon) {
                weapons.push(singleWeapon.get({ plain: true }));
            }
        }
    }

    let armors = [];
    if (databaseObject.armor) {  // Check if armor field is not null or empty
        let armorTemp = databaseObject.armor.split(',');
        for (let i = 0; i < armorTemp.length; i++) {
            const singleArmor = await Armor.findOne({
                where: {
                    armorName: armorTemp[i]
                }
            });
            if (singleArmor) {
                armors.push(singleArmor.get({ plain: true }));
            }
        }
    }

    let lvlOneSpells = [];
    let cantrips = [];
    if (databaseObject.spellsKnown) {  // Check if spellsKnown field is not null or empty
        let spellTemp = databaseObject.spellsKnown.split(',');
        for (let i = 0; i < spellTemp.length; i++) {
            const singleSpell = await Spell.findOne({
                where: {
                    spellName: spellTemp[i]
                }
            });

            if (singleSpell) {
                const singleSpellPlain = singleSpell.get({ plain: true });

                if (singleSpellPlain.spellLevel === 0) {
                    cantrips.push(singleSpellPlain);
                } else if (singleSpellPlain.spellLevel === 1) {
                    lvlOneSpells.push(singleSpellPlain);
                }
            }
        }
    }

    const characterObject = {
        name: databaseObject.name,
        archetype: databaseObject.archetype,
        level: databaseObject.level,
        background: databaseObject.background,
        race: databaseObject.race,

        proficiencyBonus: databaseObject.proficiencyBonus,

        strength: databaseObject.strength,
        strMod: databaseObject.strMod,
        strSaveProf: databaseObject.strSaveProf,
        strSaveVal: databaseObject.strSaveVal,

        dexterity: databaseObject.dexterity,
        dexMod: databaseObject.dexMod,
        dexSaveProf: databaseObject.dexSaveProf,
        dexSaveVal: databaseObject.dexSaveVal,

        constitution: databaseObject.constitution,
        conMod: databaseObject.conMod,
        conSaveProf: databaseObject.conSaveProf,
        conSaveVal: databaseObject.conSaveVal,

        intelligence: databaseObject.intelligence,
        intMod: databaseObject.intMod,
        intSaveProf: databaseObject.intSaveProf,
        intSaveVal: databaseObject.intSaveVal,

        wisdom: databaseObject.wisdom,
        wisMod: databaseObject.wisMod,
        wisSaveProf: databaseObject.wisSaveProf,
        wisSaveVal: databaseObject.wisSaveVal,

        charisma: databaseObject.charisma,
        chaMod: databaseObject.chaMod,
        chaSaveProf: databaseObject.chaSaveProf,
        chaSaveVal: databaseObject.chaSaveVal,

        acrobaticsProf: databaseObject.acrobaticsProf,
        acrobaticsVal: databaseObject.acrobaticsVal,

        animalHandlingProf: databaseObject.animalHandlingProf,
        animalHandlingVal: databaseObject.animalHandlingVal,

        arcanaProf: databaseObject.arcanaProf,
        arcanaVal: databaseObject.arcanaVal,

        athleticsProf: databaseObject.athleticsProf,
        athleticsVal: databaseObject.athleticsVal,

        deceptionProf: databaseObject.deceptionProf,
        deceptionVal: databaseObject.deceptionVal,

        historyProf: databaseObject.historyProf,
        historyVal: databaseObject.historyVal,

        insightProf: databaseObject.insightProf,
        insightVal: databaseObject.insightVal,

        intimidationProf: databaseObject.intimidationProf,
        intimidationVal: databaseObject.intimidationVal,

        investigationProf: databaseObject.investigationProf,
        investigationVal: databaseObject.investigationVal,

        medicineProf: databaseObject.medicineProf,
        medicineVal: databaseObject.medicineVal,

        natureProf: databaseObject.natureProf,
        natureVal: databaseObject.natureVal,

        perceptionProf: databaseObject.perceptionProf,
        perceptionVal: databaseObject.perceptionVal,

        performanceProf: databaseObject.performanceProf,
        performanceVal: databaseObject.performanceVal,

        persuasionProf: databaseObject.persuasionProf,
        persuasionVal: databaseObject.persuasionVal,

        religionProf: databaseObject.religionProf,
        religionVal: databaseObject.religionVal,

        sleightOfHandProf: databaseObject.sleightOfHandProf,
        sleightOfHandVal: databaseObject.sleightOfHandVal,

        stealthProf: databaseObject.stealthProf,
        stealthVal: databaseObject.stealthVal,

        survivalProf: databaseObject.survivalProf,
        survivalVal: databaseObject.survivalVal,

        cantripsKnown: cantrips,
        lvlOneSpellsKnown: lvlOneSpells,
        splClass: databaseObject.splClass,
        splAbility: databaseObject.splAbility,
        splSave: databaseObject.splSave,
        splAtckBonus: databaseObject.splAtckBonus,
        lvl1spellSlots: databaseObject.lvl1spellSlots,
        
        passivePerception: databaseObject.passivePerception,
        languages: databaseObject.languages,
        weaponProficiencies: databaseObject.weaponProficiencies,
        armorProficiencies: databaseObject.armorProficiencies,
        toolProficiencies: databaseObject.toolProficiencies,
        armorClass: databaseObject.armorClass,
        initiative: databaseObject.initiative,
        speed: databaseObject.speed,
        hpMax: databaseObject.hpMax,
        hitDice: databaseObject.hitDice,
        hitDiceCount: databaseObject.hitDiceCount,

        weapon: weapons,
        armor: armors,
        kit: databaseObject.kit,

        hpCurrent: databaseObject.hpMax,
        hpTemp: 0,
        features: databaseObject.features,
        traits: databaseObject.traits,
        personalityTraits: databaseObject.personalityTraits,
        ideals: databaseObject.ideals,
        bonds: databaseObject.bonds,
        flaws: databaseObject.flaws,
        alignment: databaseObject.alignment,
    };

    return characterObject;
}

module.exports = {
    convertToDb,
    convertFromDatabase,
};