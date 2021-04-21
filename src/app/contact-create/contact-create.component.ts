import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact : {id: any, name: any, cpf: any, description: any, email: any} = {id: null, name: "", cpf: "" ,description: "", email: ""};

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  createContact(){
    console.log(this.contact); 
    this.dataService.saveContact(this.contact).subscribe (resposta => {
    this.contact = {id: null, name: "", cpf: "" ,description: "", email: ""};
    });
 }
}
