//Module to Export
module.exports = function () {
    StructureSpawn.prototype.createClaimCustomCreep = 
    function(energy, roleName) {
        // Defined variable numberOfParts
        var numberOfParts = Math.floor(energy / 1500);
            console.log("Claim" + numberOfParts);
        // Define Body to be an array
        var body = [];
            // 
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CLAIM);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CLAIM);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(TOUGH);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(TOUGH);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(TOUGH);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(TOUGH);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
        return this.createCreep(body, undefined, {role: roleName, working: false });
    };

};
