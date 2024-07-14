"use server";
import { db } from "@/lib/db";

export async function createUser(data: {
  userId: string;
  name: string;
  email: string;
  imageUrl?: string;
  nodeId: string;
  walletAddress: string;
}) {
  try {
    const user = await db.user.create({
      data: {
        userId: data.userId,
        name: data.name,
        email: data.email,
        imageUrl: data.imageUrl,
        nodeId: data.nodeId,
        walletId: data.walletAddress,
      },
    });
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
