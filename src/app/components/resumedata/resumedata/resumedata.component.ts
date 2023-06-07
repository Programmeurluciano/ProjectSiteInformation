import { Component, OnInit,VERSION } from '@angular/core';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { Infostat } from 'src/app/models/infostat/infostat';
import Chart from 'chart.js/auto';
import { Infostatage } from 'src/app/models/infostatage/infostatage';
@Component({
  selector: 'app-resumedata',
  templateUrl: './resumedata.component.html',
  styleUrls: ['./resumedata.component.css']
})
export class ResumedataComponent implements OnInit {
  
  public infostateage: Infostatage=new Infostatage();
  public Infos:Infostat=new Infostat();
  public chart: any;
  public charts:any;

  constructor(private employerService: EmployerService) { }

  ngOnInit(): void {   
    this.createChart();
    this.lineChart();
    this.Infos;
  }

 
  lineChart(){
    this.employerService.getInfostat().subscribe(res=>{
       this.Infos=res;
   
    this.chart = new Chart("MeChart", {
      type: "bar", //this denotes tha type of chart

      data: {// values on X-Axis
        labels:res.nom, 
	       datasets: [
          {
            label: "nombre d'Employer par departement",
            data:res.nombre,
            backgroundColor: 'green'
          }
          
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  })
  }

  createChart(){
this.employerService.getInfostatage().subscribe(res=>{
  this.infostateage=res
 
    this.chart = new Chart("MyChart", {
      type: "bar", //this denotes tha type of chart

      data: {// values on X-Axis
        labels: res.name, 
	       datasets: [
          {
            label: "+1ans",
            data: res.nombreA,
            backgroundColor: 'blue'
          },
          {
            label: "1-5ans",
            data:res.nombreB,
            backgroundColor: 'red'
          },
          {
            label: "5-10ans",
            data: res.nombreC,
            backgroundColor: 'orange'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }); 
  }
}
