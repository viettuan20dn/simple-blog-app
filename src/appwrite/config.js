import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // METHODS FOR DATABASES
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBlogsCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost() :: ", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteBlogsCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts() :: ", error);
      return false;
    }
  }
  async getLikedPosts(userId) {
    const queries = [Query.equal("userId", userId)];
    const likesDocument = await this.databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteLikesCollectionId,
      queries
    );
    const likedPostIds = likesDocument.documents.map((doc) => doc.blogId);
    return likedPostIds;
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBlogsCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost() :: ", error);
      return false;
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBlogsCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost() :: ", error);
      return false;
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBlogsCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost() :: ", error);
      return false;
    }
  }
  async likePost(blogId, userId) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteLikesCollectionId,
        ID.unique(),
        {
          blogId,
          userId,
        }
      );
      
    } catch (error) {
      console.log("Error from likePost:: ", error);
      return false;
    }
  }
  async dislikePost(blogId, userId) {
    const result = await this.databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteLikesCollectionId,
      [Query.equal("blogId", blogId), Query.equal("userId", userId)]
    );
    if (result.total > 0) {
      const likeDocId = result.documents[0].$id;
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteLikesCollectionId,
        likeDocId
      );
    }
  }

  async toggleLikePost(slug, likeCount, like = true) {
    likeCount = likeCount + (like ? 1 : -1);

    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBlogsCollectionId,
        slug,
        { likeCount }
      );
    } catch (error) {
      console.log("Appwrite service :: toggleLikePost() :: ", error);
      return false;
    }
  }

  // METHODS FOR BUCKET (STORAGE)
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile() :: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile() :: ", error);
      return false;
    }
  }
  getFilePreview(fileId) {
    const result = this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    return result + "&mode=admin";
  }
}
const service = new Service();

export default service;
