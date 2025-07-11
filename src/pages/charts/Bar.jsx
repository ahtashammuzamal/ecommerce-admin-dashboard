import { Breadcrumbs } from "../../components/Breadcrumbs";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

export const Bar = () => {
  return (
    <main className="mx-4 my-8 md:my-20 md:mx-12 p-4 md:p-8 rounded-3xl shadow-lg  bg-white">
      <Breadcrumbs title="Chart" subtitle="Olympic Medal Counts - RIO" />
      <ChartComponent
        id="charts"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ background: "white" }}
      >
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </main>
  );
};
