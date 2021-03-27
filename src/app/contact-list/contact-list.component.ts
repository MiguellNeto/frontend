import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {


  contacts: { id: any; name: any; description: any; email: any; } []| undefined;
  selectedContact: any
  edicao = false;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.listar();
  }

  public listar(){
    this.dataService.getContacts().subscribe(resposta => {
      this.contacts = resposta;
    });    
  }

  public selectContact(contact: any) {
    this.selectedContact = contact;
  }

    public deleteContact(contact: { id: any; }) {
      
      var excluir = confirm("Deseja realmente excluir este registro ?")
      if (excluir == true){
        this.dataService.deleteContacts(contact.id).subscribe(r => {
          alert("Deletado com sucesso!");
          this.listar();
        });
      }else{
       alert("Operação Cancelada")
      }
      return this.listar();
    }
  

  public editar(){
    this.edicao = true;
  }

  public cancelar(){
    this.edicao = false;
  }

  public salvar(){
    this.dataService.saveContact(this.selectedContact).subscribe(r => {
      this.edicao = false;
      this.listar();
    });
  }


}
