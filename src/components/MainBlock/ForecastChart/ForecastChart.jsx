import { useMemo, useCallback } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './ForecastChart.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

export default function ForecastChart() {
    const formatTempTick = useCallback((value) => `${value}°C`, []);
    const formatTooltipLabel = useCallback((context) => `${context.parsed.y}°C`, []);

    const data = useMemo(() => ({
        labels: [
            '11 pm', 'Oct 14', '1 am', '2 am', '3 am', '4 am', '5 am',
            '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am',
            '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'
        ],
        datasets: [
            {
                data: [
                    13.5, 12, 11, 10, 9.8, 9.7, 10, 11.5, 12.2, 13,
                    13.8, 15.8, 17.5, 18.2, 19.5, 21.2, 24, 25.1, 26, 26.2
                ],
                borderColor: '#ffb36c',
                borderWidth: 3,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: '#ffb36c',
            },
        ],
    }), []);

    const options = useMemo(() => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: formatTooltipLabel,
                }
            }
        },
        scales: {
            x: {
                position: 'top',
                grid: {
                    color: '#d4d4d4',
                },
                border: {
                    display: false,
                },
                ticks: {
                    font: {
                        family: 'var(--font-family, sans-serif)',
                        size: 11,
                        weight: 500,
                    },
                    color: '#000',
                    padding: 15,
                    maxRotation: 0,
                    minRotation: 0,
                }
            },
            y: {
                min: 5,
                max: 30,
                grid: {
                    color: '#d4d4d4',
                },
                border: {
                    display: false,
                },
                ticks: {
                    stepSize: 5,
                    font: {
                        family: 'var(--font-family, sans-serif)',
                        size: 11,
                        weight: 500,
                    },
                    color: '#000',
                    callback: formatTempTick,
                    padding: 10,
                }
            }
        }
    }), [formatTooltipLabel, formatTempTick]);

    return (
        <div className={styles.chartContainer}>
            <h3 className={styles.title}>Hourly forecast</h3>
            <div className={styles.canvasWrapper}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}