import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students:any[];
  constructor() { }

  ngOnInit() {
    this.students = this.getstudents();
    console.log(this.students)
      }
      getstudents():any[]{
        return [ 
       { 
          "Name" : "saikumar", 
          "branch" : "IT", 
          "college" : "snist"     
        }, 
        { 
          "Name" : "anvesh",
          "branch" : "cse", 
          "college" : "snist" 
        }, 
        { 
          "Name" : "venkatesh", 
          "branch" : "IT", 
          "college" : "snist"
        }, 
        { 
          "Name" : "vinay", 
          "branch" : "IT"
        }, 
        { 
          "Name" : "ashish", 
          "branch" : "IT"
        }, 
        { 
          "Name" : "sravan", 
          "branch" : "IT", 
          "college" : "snist"
        },
        { 
          "Name" : "akhil", 
          "branch" : "IT"
        }, 
        { 
          "Name" : "nihal", 
          "branch" : "IT"
        }, 
        { 
          "Name" : "soujanya", 
          "branch" : "IT"
        }, 
        { 
          "Name" : "sandeep", 
          "branch" : "IT"
        }, 
        { 
          "Name" : "chaithanya", 
          "branch" : "IT" 
        }, 
        { 
          "Name" : "ganesh", 
          "branch" : "IT"
        }, 
        { 
          "Name" : "likhitha", 
          "branch" : "IT"
        },     
        { 
          "Name" : "anurag", 
          "branch" : "IT" 
        } 
      ] 
    }
}

