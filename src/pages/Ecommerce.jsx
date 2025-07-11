import { BsCurrencyDollar } from 'react-icons/bs';
import { LuDot } from "react-icons/lu";
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { Button, Pie, SparkLine, Stacked } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

export const Ecommerce = () => {

  const {activeThemeColor, currentMode} = useStateContext()

  return (
    <div className='md:max-w-6xl md:mx-auto flex flex-col gap-2 md:gap-6 px-4 my-12'>
      <div className='w-full flex md:flex-row flex-col justify-between items-center gap-2 md:gap-6'>
          <div className='md:w-1/3 w-full shadow-sm bg-white dark:bg-secondary-dark-bg px-4 py-8 rounded-lg'>
            <div className='flex justify-between mb-6'>
              <div>
                <p className='font-bold text-gray-500'>Earnings</p>
                <p className='text-2xl dark:text-gray-200'>$63,448.78</p>
              </div>
              <div className='rounded-full p-4 text-white text-2xl' style={{backgroundColor: `${activeThemeColor}`}}>
                <BsCurrencyDollar />
              </div>
            </div>
            <Button text = 'Download' bgColor = {activeThemeColor} color = 'white'/>
          </div>
          <div className='w-full flex md:flex-row flex-col gap-2'>
            {earningData.map(item => (
              <div key={item.title} className='w-full flex flex-col items-start px-4 py-8 bg-white dark:bg-secondary-dark-bg rounded-lg shadow-sm'>
                <div 
                  className='rounded-full p-4 text-2xl mb-4'
                  style={{backgroundColor: item.iconBg, color: item.iconColor}}
                >
                  {item.icon}
                </div>
                <div>
                  <span className='dark:text-gray-200'>{item.amount}</span>
                  <span className='text-sm ml-3' style={{color: item.iconBg}}>
                    {item.percentage}
                  </span>
                </div>
                <p className='text-gray-400 text-sm mt-2'>{item.title}</p>
              </div>
            ))}
          </div>
      </div>
      <div className='rounded-lg flex flex-col md:flex-row items-stretch gap-4'>
        <div className='w-full md:w-2/3 bg-white dark:bg-secondary-dark-bg shadow-sm p-4 rounded-lg'>
          <div className='flex justify-between items-center mb-8'>
            <p className='text-black dark:text-white text-xl font-semibold'>Revenue Updates</p>
            <div className='flex gap-4'>
              <span className='flex items-center text-gray-600'>
                <LuDot className='text-5xl'/>
                <p>Expense</p>
              </span>
              <span className='flex items-center text-green-600'>
                <LuDot className='text-5xl'/>
                <p>Budget</p>
              </span>
            </div>
          </div>
          <div className='w-full flex flex-col md:flex-row gap-12'>
            <div className='flex flex-col gap-8 p-8 border-gray-300 border-b-1 md:border-r-1 md:border-b-0'>
              <div className='flex items-start gap-4'>
                <div>
                  <p className='text-3xl text-black font-semibold dark:text-gray-200'>$93,438</p>
                  <p className='text-gray-500'>Budget</p>
                </div>
                <div className='p-2 rounded-full bg-green-500 text-white text-sm'>23%</div>
              </div>
              <div>
                <p className='text-3xl text-black font-semibold dark:text-gray-200'>$48,487</p>
                <p className='text-gray-500'>Expense</p>
              </div>
              <div>
                <SparkLine 
                  id = 'line-sparkline'
                  currentColor = {activeThemeColor}
                  type = 'Line'
                  height = '80px'
                  width = '250px'
                  data = {SparklineAreaData}
                  color = {activeThemeColor}
                />        
              </div>
              <Button text='Download Report' bgColor = {activeThemeColor} color='white' />
            </div>
            <div className='flex items-center'>
              <Stacked
                width = '300px'
                height = '300px'
              />
            </div>
          </div>  
        </div>
        <div className='w-full md:w-1/3'>
          <div className='text-white pt-12 px-4 pb-4 rounded-lg mb-4' style={{backgroundColor: `${activeThemeColor}`}}>
            <div className='flex justify-between'>
              <p className='text-2xl font-semibold'>Earnings</p>
              <span>
                <p className='text-2xl font-semibold'>$63,448.78</p>
                <p className='text-gray-300'>Monthly revenue</p>
              </span>
            </div>
            <div className='mt-4'>
              <SparkLine currentColor={activeThemeColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>
          <div className='bg-white dark:bg-secondary-dark-bg p-12 flex gap-8 justify-between items-center rounded-lg shadow-sm'>
            <div>
              <p className='text-2xl font-semibold text-black dark:text-white'>$43,246</p>
              <p className='text-gray-400'>Yearly sales</p>
            </div>
            <div className='w-40'>
               <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" background={currentMode === 'Dark' ? '#33373E' : '#fff'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}