import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-from',
  templateUrl: './success-from.component.html',
  styleUrls: ['./success-from.component.css']
})
export class SuccessFromComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  successForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
  }

  onConfirmLink() {
    console.log("d")
    this.router.navigateByUrl("detail");
  }
}
