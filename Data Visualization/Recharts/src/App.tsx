import SimpleAreaChart from './components/examples/areaChart/SimpleAreaChart';
import StackedAreaChart from './components/examples/areaChart/StackedAreaChart';
import BrushBarChart from './components/examples/barChart/BrushBarChart';
import CustomShapeBarChart from './components/examples/barChart/CustomShapeBarChart';
import PositiveAndNegativeBarChart from './components/examples/barChart/PositiveAndNegativeBarChart';
import SimpleBarChart from './components/examples/barChart/SimpleBarChart';
import StackedBarChart from './components/examples/barChart/StackedBarChart';
import ComposedChartWithAxisLabels from './components/examples/composedChart/ComposedChartWithAxisLabels';
import LineBarAreaComposedChart from './components/examples/composedChart/LineBarAreaComposedChart';
import SameDataComposedChart from './components/examples/composedChart/SameDataComposedChart';
import ScatterAndLineOfBestFit from './components/examples/composedChart/ScatterAndLineOfBestFit';
import VerticalComposedChart from './components/examples/composedChart/VerticalComposedChart';
import BiaxialLineChart from './components/examples/lineChart/BiaxialLineChart';
import DashedLineChart from './components/examples/lineChart/DashedLineChart';
import LineChartConnectNulls from './components/examples/lineChart/LineChartConnectNulls';
import SimpleLineChart from './components/examples/lineChart/SimpleLineChart';
import SynchronizedLineChart from './components/examples/lineChart/SynchronizedLineChart';
import PieChartWithCustomizedLabel from './components/examples/pieChart/PieChartWithCustomizedLabel';
import TwoLevelPieChart from './components/examples/pieChart/TwoLevelPieChart';
import SimpleRadarChart from './components/examples/radarChart/SimpleRadarChart';
import SpecifiedDomainRadarChart from './components/examples/radarChart/SpecifiedDomainRadarChart';
import JointLineScatterChart from './components/examples/scatterChart/JointLineScatterChart';
import SimpleScatterChart from './components/examples/scatterChart/SimpleScatterChart';
import ThreeDimScatterChart from './components/examples/scatterChart/ThreeDimScatterChart';
import ChartFive from './components/gettingStarted/ChartFive';
import ChartFour from './components/gettingStarted/ChartFour';
import ChartOne from './components/gettingStarted/ChartOne';
import ChartThree from './components/gettingStarted/ChartThree';
import ChartTwo from './components/gettingStarted/ChartTwo';

export default function App() {
  return (
    <div>
      {/* Getting Started */}
      <ChartOne />
      <ChartTwo />
      <ChartThree />
      <ChartFour />
      <ChartFive />

      {/* Examples */}
      {/* Line Chart */}
      <SimpleLineChart />
      <DashedLineChart />
      <BiaxialLineChart />
      <LineChartConnectNulls />
      <SynchronizedLineChart />

      {/* Area Chart */}
      <SimpleAreaChart />
      <StackedAreaChart />

      {/* Bar Chart */}
      <SimpleBarChart />
      <StackedBarChart />
      <CustomShapeBarChart />
      <PositiveAndNegativeBarChart />
      <BrushBarChart />

      {/* Composed Chart */}
      <LineBarAreaComposedChart />
      <SameDataComposedChart />
      <VerticalComposedChart />
      <ComposedChartWithAxisLabels />
      <ScatterAndLineOfBestFit />

      {/* Scatter Chart */}
      <SimpleScatterChart />
      <ThreeDimScatterChart />
      <JointLineScatterChart />

      {/* Pie Chart */}
      <TwoLevelPieChart />
      <PieChartWithCustomizedLabel />

      {/* Radar Chart */}
      <SimpleRadarChart />
      <SpecifiedDomainRadarChart />
    </div>
  );
}
