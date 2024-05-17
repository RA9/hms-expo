import PocketBase, { AsyncAuthStore } from 'pocketbase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = new AsyncAuthStore({
    save: async (serialized) => AsyncStorage.setItem('pb_auth', serialized),
    initial: AsyncStorage.getItem('pb_auth'),
});

const pocketbase = new PocketBase("https://pocketbase-production-8d7b.up.railway.app", store);

export async function login(email, password) {
    try {
        const userData = await pocketbase.collection('users').authWithPassword(email, password, {
            expand: "role"
        });
        console.log({userData});
        return userData || null;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function register(userData) {
    try {
        const user = await pb.collection('users').create(userData);
        console.log({user});
    } catch (error) {
        console.log(error);
    }
}

export default pocketbase;