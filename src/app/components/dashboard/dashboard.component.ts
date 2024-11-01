import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription, debounceTime } from 'rxjs';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

    public barData: any; 
    public barOptions: any; 

    public pieData: any; 
    public pieOptions: any; 
  
   


    constructor(private dataService: DataService) {}


    ngOnInit() {
        this.initCharts();

    }

    
    
    initCharts() {
        
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        
    
        this.dataService.getDocumentData().subscribe(documentData => {
            const labels = Object.keys(documentData); 
            const data = Object.values(documentData); 
        
            this.barData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Document Statistics',
                        backgroundColor: [
                            documentStyle.getPropertyValue('--indigo-500'),
                            documentStyle.getPropertyValue('--purple-500'),
                            documentStyle.getPropertyValue('--teal-500')
                        ],                        
                        data: data, 
                    }
                ]
            };
    
            this.barOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Count' 
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Categories' 
                        }
                    }
                }
            };
    
           
            this.dataService.getQuizData().subscribe(quizData => {
                const labels = Object.keys(quizData); 
                const data = Object.values(quizData); 
            
                this.pieData = {
                    labels: labels,
                    datasets: [
                        {
                            data: data, 
                            backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                            borderColor: documentStyle.getPropertyValue('--primary-500'),

                           
                        }
                    ]
                };
            
                this.pieOptions = {
                    plugins: {
                        legend: {
                            labels: {
                                usePointStyle: true,
                                color: textColor
                            }
                        }
                    }
                };
            });
            
        });
    }

 
    }   
  
   