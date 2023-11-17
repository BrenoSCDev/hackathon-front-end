import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Chart, { ChartConfiguration } from 'chart.js/auto';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
  }[];
}

export const GerenciaGeralPage: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const chartContainerRefs = useRef<Array<HTMLCanvasElement | null>>([]);

  useEffect(() => {
    const fetchDataForCharts = () => {
      // Dados fictícios para exemplo
      const totalPessoas: ChartData = {
        labels: ['Efetivos', 'Visitantes'],
        datasets: [
          {
            label: 'Total de Pessoas',
            data: [250, 150],
            backgroundColor: ['#152D76', '#36A2EB'],
            hoverBackgroundColor: ['#5172d3', '#65b9f1'],
          },
        ],
      };

      const totalVeiculos: ChartData = {
        labels: ['Carros', 'Motos'],
        datasets: [
          {
            label: 'Total de Veículos',
            data: [80, 50],
            backgroundColor: ['#152D76', '#36A2EB'],
            hoverBackgroundColor: ['#5172d3', '#65b9f1'],
          },
        ],
      };

      const totalMovimentacao: ChartData = {
        labels: ['Entradas', 'Saídas'],
        datasets: [
          {
            label: 'Total de Movimentação do Dia',
            data: [300, 250],
            backgroundColor: ['#152D76', '#36A2EB'],
            hoverBackgroundColor: ['#5172d3', '#65b9f1'],
          },
        ],
      };

      const totalAcessoPessoas: ChartData = {
        labels: ['Com Acesso', 'Sem Acesso'],
        datasets: [
          {
            label: 'Total de Pessoas com Acesso',
            data: [200, 200],
            backgroundColor: ['#152D76', '#36A2EB'],
            hoverBackgroundColor: ['#5172d3', '#65b9f1'],
          },
        ],
      };

      setChartData([totalPessoas, totalVeiculos, totalMovimentacao, totalAcessoPessoas]);
    };

    fetchDataForCharts();
  }, []);

  useEffect(() => {
    if (chartData.length === 0) return;

    const chartConfigs: ChartConfiguration<'pie'>[] = chartData.map((data) => ({
      type: 'pie',
      data,
    }));

    chartConfigs.forEach((config, index) => {
        const canvas = chartContainerRefs.current[index];
        if (canvas instanceof HTMLCanvasElement) {
          new Chart(canvas, config);
        }
      });
    }, [chartData]);

  return (
    <Container>
      <h1>Gerência Geral</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {chartData.map((_, index) => (
          <div key={index} style={{ width: '45%' }}>
            
            <canvas ref={(el) => (chartContainerRefs.current[index] = el)} />
          </div>
        ))}
      </div>
    </Container>
  );
};

