export interface User {
  id: string
  username: string
  email: string
  displayName?: string
  bio?: string
  avatar?: string
  coverImage?: string
  verified: boolean
  followerCount: number
  followingCount: number
  createdAt: string
  updatedAt: string
}

export interface Tweet {
  id: string
  content: string
  authorId: string
  author: User
  parentId?: string
  media?: Media[]
  likeCount: number
  retweetCount: number
  replyCount: number
  viewCount: number
  isLiked?: boolean
  isRetweeted?: boolean
  isBookmarked?: boolean
  createdAt: string
  updatedAt: string
}

export interface Media {
  id: string
  url: string
  type: "image" | "video"
  alt?: string
}

export interface Notification {
  id: string
  userId: string
  type: "like" | "retweet" | "reply" | "follow" | "mention"
  fromUserId: string
  fromUser: User
  tweetId?: string
  tweet?: Tweet
  read: boolean
  createdAt: string
}

export interface Message {
  id: string
  conversationId: string
  senderId: string
  sender: User
  content: string
  media?: Media[]
  read: boolean
  createdAt: string
}

export interface Conversation {
  id: string
  participants: User[]
  lastMessage?: Message
  updatedAt: string
  }
  
