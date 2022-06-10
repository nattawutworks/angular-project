import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  title = 'detail';
  detailForm: FormGroup = new FormGroup({});

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onConfirmLink() {
    this.router.navigateByUrl(("login"));
  }

}
