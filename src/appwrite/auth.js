// Start with appwrite auth service
import conf from "../conf/conf";
import { Client, Account, ID, Databases } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const accountId = ID.unique();
      const userAccount = await this.account.create(
        accountId,
        email,
        password,
        name
      );

      if (userAccount) {
        const databases = new Databases(this.client);
        try {
          await databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteUsersCollectionId,
            ID.unique(),
            {
              userId: accountId,
              avatarId: null,
              bio: "no bios",
            }
          );
        } catch (error) {
          console.log("Error from createDocumentAtUsers: ", error);
        }
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser() :: ", error);
    }
    return null;
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout() :: ", error);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
