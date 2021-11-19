    
        // Penser à remplacer par les données récupérées dans le json
class App {
    constructor(){
        this.$usersCards = document.querySelector('.photographer_section')
        this.usersApi = new userApi('/data/photographers.json')

    }
    async main() {
        const users = await this.usersApi.getUsers()

        users.forEach(user => {
            const template = new photographerFactory(user)
            this.$usersCards.appendChild(template.getUserCardDOM())        
        })    
    }
}

    