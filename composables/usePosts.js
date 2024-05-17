import useFirebase from "../composables/useFirebase.js"
const { reactive } = Vue

let list = reactive([])

export default function usePosts() {
    let { firestore, collection, getDocs, addDoc, deleteDoc, doc } = useFirebase()

    const getAllPosts = async () => {
        // dopiseme spolu
    }
    getAllPosts()

    const add = async (data) => {
        // dopiseme spolu
    }
    const remove = async (post) => {
        // dopiseme spolu
    }

    return {
        getAllPosts, list, add, remove
    }
}