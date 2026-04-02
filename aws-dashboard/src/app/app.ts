import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  instances = [
    { name: 'tbhl-prod-wf-a', type: 't3.xlarge', env: 'Production', status: 'running' },
    { name: 'tbhl-prod-apache', type: 't3.medium', env: 'Production', status: 'running' },
    { name: 'tbhl-qa-wf-a', type: 't3.large', env: 'QA', status: 'running' },
    { name: 'tbhl-uat-web', type: 't3.medium', env: 'UAT', status: 'running' },
    { name: 'tbhl-hf-hazelcast', type: 't3.large', env: 'Hotfix', status: 'stopped' },
  ];

  alerts = [
    { title: 'High Disk Usage on tbhl-prod-solr', service: 'EC2', time: '10 min ago', level: 'critical' },
    { title: 'HF DB Slowness Detected', service: 'RDS MySQL', time: '1 hr ago', level: 'warning' },
    { title: 'Hazelcast Cache Cluster Down', service: 'WildFly', time: '2 hr ago', level: 'critical' },
  ];
}
