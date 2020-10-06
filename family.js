class familyMember {
    #name;
    #parents
    constructor(name, parents = [], siblings = []){
        this.#name = name;
        this.#parents = parents;
        this.siblings = siblings;
    }
    getName(){
        return this.#name;
    }
    childOf(){
        return( this.#parents.map(parent => parent).join(' & ') || 'Parents unknown.');
    }
    listSiblings(){
        return(this.siblings.map(sibling => sibling).join(' & ') || 'Siblings unknown.');
    }
}
const sam = new familyMember('Sam');
const david = new familyMember('David');
const josh = new familyMember('Josh', [david.getName(), 'Janine'], [sam.getName()]);
sam.siblings.push(josh.getName());
const family = [josh, sam, david];

module.exports = family;