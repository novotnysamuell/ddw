import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js'
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js'

export default function useFirebase() {
    const firebaseConfig = {
        // kazdy si vlozi vlastny config
    }
    const app = initializeApp(firebaseConfig)
    const firestore = getFirestore(app)

    return {
        firestore, collection, getDocs, addDoc, deleteDoc, doc
    }
}