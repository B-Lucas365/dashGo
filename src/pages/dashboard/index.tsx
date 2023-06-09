import { Header } from "@/components/Header";
import { Container, SimpleGrid } from "../../styles/dashboard";
import { ContentDashboard } from "../../styles/dashboard";
import { Sidebar } from "../../components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Dashboard() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: "#616480",
    },

    grid: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    tooltip: {
      enabled: true,
    },

    xaxis: {
        type: "datetime" as const,

      axisBorder: {
        color: "#4b4d63",
      },

      axisTicks: {
        color: "#4b4d63",
      },

      categories: [
        "2021-03-18T00:00:00.00Z",
        "2021-03-19T00:00:00.00Z",
        "2021-03-20T00:00:00.00Z",
        "2021-03-21T00:00:00.00Z",
        "2021-03-22T00:00:00.00Z",
        "2021-03-23T00:00:00.00Z",
        "2021-03-24T00:00:00.00Z",
      ],
    },
    
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
  };

  const series = [{ name: "series1", data: [31, 120, 10, 28, 230, 18, 109] }];

  return (
    <Container>
      <Header />

      <ContentDashboard>
        <Sidebar />

        <SimpleGrid>
          <div className="box">
            <p>Desempenho semanal</p>
            <div className="chart">
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </div>
          </div>

          <div className="box">
            <p>Desempenho mensal</p>
            <div className="chart">
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </div>
          </div>
        </SimpleGrid>
      </ContentDashboard>
    </Container>
  );
}
