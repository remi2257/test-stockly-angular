import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from 'src/app/core/photos.service';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.scss'],
})
export class PhotoViewComponent implements OnInit {
  id: number;
  photo: Photo;

  constructor(
    public servicePhoto: PhotosService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.id = parseInt(this._route.snapshot.params['id']);
    this.photo = servicePhoto.getPhotoByIndex(this.id);

    this._route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
      this.photo = servicePhoto.getPhotoByIndex(this.id);
    });
  }

  ngOnInit(): void {}

  canGoNext(): boolean {
    return this.id < this.servicePhoto.getCountImages();
  }

  canGoPrevious() {
    return this.id > 1;
  }
}
