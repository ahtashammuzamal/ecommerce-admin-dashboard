import { ColumnDirective, ColumnsDirective, GridComponent, Group, Inject, Page,Sort, Search, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Employees = () => {
  const toolbarOptions = ['Search']
  const editing = { allowDeleting: true, allowEditing: true };

    return(
      <main className='mx-4 my-8 md:my-20 md:mx-12 p-4 md:p-8 rounded-3xl shadow-lg bg-white '>
        <Breadcrumbs title='Pages' subtitle='Employees'/>
        <GridComponent 
          dataSource={employeesData} 
          allowPaging
          allowSorting
          allowEditing
          toolbar={toolbarOptions}
          width= 'auto'
          editSettings={editing}
        > 
            <ColumnsDirective>
              {employeesGrid.map((item,index) => (
                <ColumnDirective
                  key={index}
                  {...item}
                />
              ))}
            </ColumnsDirective>
            <Inject services={[ Page, Search, Sort, Edit, Toolbar]}/>
        </GridComponent>
      </main>
    )
};
