import { Injectable } from '@angular/core';
import { User } from '../models/user';

const album = {
  title: 'Road Trip in Asia',
  photos: [
    {
      src: 'https://picsum.photos/400/300',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      postedBy: 1, // userId
      postedAt: 1617264644,
    },
    {
      src: 'https://picsum.photos/400/500',
      description:
        'Photo taken during my road trip in Asia. I wanted to underline the contrast in colors and the architectural lines.',
      comments: [
        {
          content: 'Love the colors and light.',
          postedBy: 2, // userId
          postedAt: 1617276807,
        },
        {
          content:
            'I know this place ! I was there this summer. When were you there ? Maybe we missed eachother.',
          postedBy: 3, // userId
          postedAt: 1617294807,
        },
      ],
      postedBy: 2, // userId
      postedAt: 1617264645,
    },
    {
      src: 'https://picsum.photos/500',
      description: 'Photo taken during my road trip in Asia. So nice.',
      comments: [
        {
          content: 'Si beau.',
          postedBy: 2, // userId
          postedAt: 1617276807,
        },
        {
          content: 'I love it !',
          postedBy: 3, // userId
          postedAt: 1617294807,
        },
      ],
      postedBy: 1, // userId
      postedAt: 1617264645,
    },
  ],
  createdAt: 1617264637,
};

const users: User[] = [
  { name: 'Camille D.', avatar: 'https://picsum.photos/50/60' },
  { name: 'Oscar W.', avatar: 'https://picsum.photos/40' },
  { name: 'Remi L.', avatar: 'https://picsum.photos/50' },
];

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private _photos = album.photos;

  constructor() {}

  getPhotoByIndex(index: number) {
    return this._photos[index - 1];
  }

  getCommentsByIndex(index: number) {
    return this._photos[index - 1].comments || [];
  }

  getAlbumName() {
    return album.title;
  }

  getCountImages() {
    return this._photos.length;
  }

  getUserInfos(index: number): User {
    return users[index - 1];
  }
}
