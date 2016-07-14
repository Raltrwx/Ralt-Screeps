module.exports = {
    run: function(creep) {
            if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
              filter: (s) => (s.structureType == STRUCTURE_STORAGE)
                            && s.energy < s.energyCapacity 
            });
            if (structure != undefined) {
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }   
        }
        else {
            var targetLink = Game.getObjectById('57871f20ece285d20d1f0d2b');
            if (creep.withdraw(targetLink) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targetLink);
            }    
        }
    }
};
