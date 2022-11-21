import AsyncStorage from '@react-native-async-storage/async-storage'

class MoonRepository {

    private static readonly KEY = '@storage_moon_'
    
    public async get(id: string): Promise<string[]> {
        const json = await AsyncStorage.getItem(MoonRepository.KEY + id)
        if (json) return JSON.parse(json)
        else return []
    }

    private async save(id: string, list: string[]) {
        await AsyncStorage.setItem(MoonRepository.KEY + id, JSON.stringify(list))
    }

    public async add(id: string, moon: string) {
        const list = await this.get(id)
        list.push(moon)
        await this.save(id, list)
    }

    public async remove(id: string, moon: string) {
        let list = await this.get(id)
        list = list.filter(m => m !== moon)
        await this.save(id, list)
    }

}

export const moonRepository = new MoonRepository()
