import { Injectable } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Injectable()
export default class GraphicFactoryService{
    constructor(){}
    public generatePieGraphic(seriesName: string = "", data: any) : Chart{
        return new Chart({
            chart: {
                type: 'pie',
                plotShadow: false,
              },
              credits: {
                enabled: false,
              },
              title: {
                floating: false,
                text: '',
              },
          
              legend: {
                enabled: false,
              },
          
              series: [
                {
                  name:seriesName,
                  type: 'pie',
                  data
                },
              ],
        })
    }
}