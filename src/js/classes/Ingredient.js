class Ingredient {
    constructor(name, image, actions) {
        this.name = name
        this.image = image
        this.actions = actions
    }

    getName() {
        return this.name
    }

    getImage() {
        return this.image
    }

    getActions() {
        return this.actions
    }

    setName(name) {
        this.name = name
    }

    setImage(image) {
        this.image = image
    }

    setActions(actions) {
        this.actions = actions
    }
}