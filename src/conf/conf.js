const conf = {
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
    appwriteBlogsCollectionId: String(import.meta.env.VITE_APP_APPWRITE_BLOGS_COLLECTION_ID),
    appwriteUsersCollectionId: String(import.meta.env.VITE_APP_APPWRITE_USERS_COLLECTION_ID),
    appwriteLikesCollectionId: String(import.meta.env.VITE_APP_APPWRITE_LIKES_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APP_APPWRITE_BUCKET_ID)
}

export default conf;