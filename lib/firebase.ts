import admin from 'firebase-admin'

console.log(`1`, process.env.FIREBASE_PRIVATE_KEY)

process.env.FIREBASE_PRIVATE_KEY &&
  console.log('2', JSON.parse(process.env.FIREBASE_PRIVATE_KEY))

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY
        ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
        : undefined,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  })
}

export default admin.database()
