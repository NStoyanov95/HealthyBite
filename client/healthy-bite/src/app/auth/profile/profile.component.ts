import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from 'src/app/types/user';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

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
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  isLoading: boolean = true;

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['userId'];
    this.subscription = this.userService.getSingleUser(this.userId).subscribe({
      next: (data) => {
        this.userProfile = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.log('HTTP error', error);
        this.isLoading = false;
        alert('HTTP error ' + error);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
