import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userId: string = '';
  userProfile!: UserProfile;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['userId'];
    this.authService.getSingleUser(this.userId).subscribe({
      next: (data) => {
          this.userProfile = data;
          console.log(this.userProfile);
      },
      error: (error) => {
        console.log('HTTP error', error);
        alert('HTTP error ' + error);
      },
    });
  }
}
