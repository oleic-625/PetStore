import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public title = '这是个新标题';

  msg = '我是新闻组件的msg';

  public student: any = '我是电脑学生';
  public userinfo: any ={
    username: '小齐',
    userid: '110'
  }

  public message: any;

  constructor() {
    this.message = '改变属性的值';
    console.log(this.msg);
    this.msg = '这是改变后msg的值';
  }

  ngOnInit(): void {
  }

}
