export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface PurchaseRecord {
  userId: string;
  email: string;
  productId: string;
  productName: string;
  amount: number;
  currency: string;
  paymentId: string;
  orderId: string;
  status: string;
  createdAt: Date | string;
}

export interface ServiceReview {
  id: string;
  authorName: string;
  authorEmail: string;
  authorPhotoURL: string;
  authorTitle: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  isApproved: boolean;
  createdAt: Date | string;
}
