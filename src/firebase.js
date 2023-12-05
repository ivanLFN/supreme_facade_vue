import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAohEJOyCqGhWpMR7qTW6kBe9ezOdjyCyw',
  authDomain: 'supreme-web-vue.firebaseapp.com',
  projectId: 'supreme-web-vue',
  storageBucket: 'supreme-web-vue.appspot.com',
  messagingSenderId: '989157313834',
  appId: '1:989157313834:web:9cb0ce9bce623a56916253',
  measurementId: 'G-46XFJCXEC1'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const storage = getStorage(app)

const db = getFirestore(app)

async function getData (collectionName, documentName) {
  const collectionRef = collection(db, collectionName)
  const documentRef = doc(collectionRef, documentName)

  try {
    const docSnapshot = await getDoc(documentRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      return data
    } else {
      console.log('Document not found!')
      return null
    }
  } catch (error) {
    console.error('Error receiving data:', error)
    return null
  }
}

async function updateData (collectionName, documentName, data) {
  try {
    const docRef = doc(db, collectionName, documentName)
    await updateDoc(docRef, data)
    console.log('Updated successfully')
  } catch (error) {
    console.log('Error updating:', error)
  }
}

async function uploadImage (folder, file) {
  const storageRef = ref(storage, folder + file.name)
  try {
    const snapshot = await uploadBytes(storageRef, file)
    console.log('Image uploaded successfully:', snapshot)

    const downloadURL = await getDownloadURL(snapshot.ref)

    return downloadURL
  } catch (error) {
    console.error('Error uploading image:', error)
    return null
  }
}

export { storage, auth, getData, updateData, uploadImage }
