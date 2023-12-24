const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    let teamName = [];
    if (members !== null && members !== undefined) {
        for (let i = 0; i < members.length; i++) {
            if (typeof members[i] === "string") {
                let firstChar = members[i].trim().charAt(0).toUpperCase();
                teamName.push(firstChar);
            }
        }
        return teamName.sort().join("");
    }
    return false;
}

module.exports = {
    createDreamTeam,
};
