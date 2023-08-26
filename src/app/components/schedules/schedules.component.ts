import { Component } from '@angular/core';
import { BusScheduleService } from 'src/app/services/services.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css'],
})
export class SchedulesComponent {
  linha: string = '';
  horarios: any = {};
  isLoading: boolean = false;

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  constructor(private busScheduleService: BusScheduleService) { }

  async consultarHorarios() {
    try {
      this.isLoading = true;
      const linhaSemPonto = this.linha.replace('.', '');
      const response = await this.busScheduleService.getScheduleByLine(linhaSemPonto).toPromise();
      const horariosAPI = response.result.records;
      const horariosFiltrados = horariosAPI.filter((horario: any) => horario.tipo_tabela === 'OFICIAL');
      this.organizarHorariosPorSentidoDia(horariosFiltrados);
      this.isLoading = false;
    } catch (error) {
      console.error(error);
      this.isLoading = false;
    }
  }

  organizarHorariosPorSentidoDia(horarios: any[]) {
    const horariosOrganizados: any = {};

    horarios.forEach((horario) => {
      const sentido = horario.sentido;
      const tipoDia = horario.tipo_dia;

      if (tipoDia === 'FERIADO') {
        return;
      }

      if (!horariosOrganizados[sentido]) {
        horariosOrganizados[sentido] = {};
      }

      if (!horariosOrganizados[sentido][tipoDia]) {
        horariosOrganizados[sentido][tipoDia] = [];
      }

      horariosOrganizados[sentido][tipoDia].push(horario);
    });

    Object.keys(horariosOrganizados).forEach((sentido) => {
      Object.keys(horariosOrganizados[sentido]).forEach((tipoDia) => {
        horariosOrganizados[sentido][tipoDia].sort(this.compareHorarios);
      });
    });

    this.horarios = horariosOrganizados;
  }

  compareHorarios(horarioA: any, horarioB: any) {
    const horaA = new Date(`2000-01-01 ${horarioA.horario_largada}`);
    const horaB = new Date(`2000-01-01 ${horarioB.horario_largada}`);

    return horaA.getTime() - horaB.getTime();
  }

  formatarNomeDia(tipoDia: string) {
    switch (tipoDia) {
      case 'DIAUTIL':
        return 'Dia útil';
      case 'SABADO':
        return 'Sábado';
      case 'DOMINGO':
        return 'Domingo';
      default:
        return tipoDia;
    }
  }

  sortTiposDia(a: string, b: string): number {
    if (a === 'DIAUTIL') return -1;
    if (b === 'DIAUTIL') return 1;
    if (a === 'DOMINGO') return 1;
    if (b === 'DOMINGO') return -1;
    return 0;
  }
}
