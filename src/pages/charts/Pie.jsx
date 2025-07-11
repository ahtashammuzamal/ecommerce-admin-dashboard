import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Pie as PieChart} from "../../components";
import { pieChartData } from "../../data/dummy";

export const Pie = () => {
  return (
    <main className="mx-4 my-8 md:my-20 md:mx-12 p-4 md:p-8 rounded-3xl shadow-lg bg-white">
      <Breadcrumbs title="Chart" subtitle="Inflation Rate" />
      <div className="w-full">
        <PieChart id="chat-pi" data={pieChartData} legendVisiblity height="full" />
      </div>
    </main>
  );
};
