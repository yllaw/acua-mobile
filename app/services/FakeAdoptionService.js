import { animals } from '@/db/animals.json'

export default {
    getAnimals() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(animals)
            }, 10)
        })
    },
}
