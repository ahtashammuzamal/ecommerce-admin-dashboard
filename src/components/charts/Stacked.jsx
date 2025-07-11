import {Category, ChartComponent, Inject, Legend, SeriesCollectionDirective, SeriesDirective, StackingColumnSeries} from'@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import {useStateContext} from '../../contexts/ContextProvider'

export const Stacked = ({width, height}) => {
  const {currentMode} =useStateContext()
  return (
    <div>
      <ChartComponent 
      id='charts'
      primaryXAxis={stackedPrimaryXAxis} 
      primaryYAxis={stackedPrimaryYAxis} 
      height={height} 
      width={width} 
      chartArea={{border: {width: 0}}}
      legendSettings={{background: 'white'}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[StackingColumnSeries, Category, Legend]}/>
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}