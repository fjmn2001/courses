(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('constructor called')
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutand: boolean
        ) {
            super(name, realName);
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            this.name = name
        }

        getFullNameFromChild() {
            console.log(super.getFullName())
        }
    }

    const wolverine = new Xmen('Wolwerine', 'Logan', true)
    console.log(wolverine)
    wolverine.getFullNameFromChild()
    console.log(wolverine.fullName)
    wolverine.fullName = 'Francisco'
    console.log(wolverine.fullName)

})()