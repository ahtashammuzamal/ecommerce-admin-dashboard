import { Inject, SparklineComponent, SparklineTooltip } from "@syncfusion/ej2-react-charts"

export const SparkLine = ({id, currentColor, type, height, width, data, color}) => {
    const tooltipSettings = {
      visible: true, 
      format: '${x} : data ${yval}',
      trackLineSettings: {
        visible: true
      }
    }

  return (
    <div>
        <SparklineComponent 
          id={id} 
          fill={color}
          height={height} 
          width={width} 
          dataSource={data} 
          yName="yval" 
          xName='x' 
          lineWidth={1}
          valueType="Numeric"
          border={{color: currentColor, width: 2}}
          tooltipSettings={tooltipSettings}
          type={type}
      >
            <Inject services={[SparklineTooltip]}/>
        </SparklineComponent>
    </div>
  )
}