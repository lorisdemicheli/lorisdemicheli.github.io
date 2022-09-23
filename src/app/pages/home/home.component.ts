import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/component/toast/toast-service';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class PageHome implements OnInit {

  constructor(private router: Router,
    private toastService: ToastService) { }

  ngOnInit() {
    if(history.state.type) {
      const state:any = history.state;
      if(state.type == 'error'){
        this.toastService.error(state.text,2000);
      } else if(state.type == 'success') {
        this.toastService.success(state.text,2000);
      } else if(state.type == 'message'){
        this.toastService.message(state.text,2000);
      }
    }
  }
}

