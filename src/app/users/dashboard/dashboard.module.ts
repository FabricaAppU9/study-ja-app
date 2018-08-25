import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EditProfileComponent,
    MyPostsComponent,
    NewPostComponent,
    NotificationsComponent
  ]
})
export class DashboardModule { }
