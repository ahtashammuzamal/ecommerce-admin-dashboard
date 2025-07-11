import { Breadcrumbs } from "../../components/Breadcrumbs";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

export const Line = () => {
  return (
    <main className="mx-4 my-8 md:my-20 md:mx-12 p-4 md:p-8 rounded-3xl shadow-lg bg-white">
      <Breadcrumbs title="Chart" subtitle="Inflation Rate" />
        <ChartComponent
          id="line-chart"
          height="420px"
          primaryXAxis={LinePrimaryXAxis}
          primaryYAxis={LinePrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
        >
          <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            {lineCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
    </main>
  );
};
