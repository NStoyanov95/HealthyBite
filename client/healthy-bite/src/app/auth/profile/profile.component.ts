import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from 'src/app/types/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  userId: string = '';
  userProfile!: UserProfile;
  subscription!: Subscription;

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
