import { ColumnDirective, ColumnsDirective, Filter, GridComponent,  Inject, Page, Sort, Resize, Edit, Toolbar, Selection } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Customers = () => {
    const toolbarOptions = ['Delete']
    const editing = { allowDeleting: true, allowEditing: true };
    return(
      <main className='mx-4 my-8 md:my-20 md:mx-12 p-4 md:p-8 rounded-3xl shadow-lg bg-white '>
        <Breadcrumbs title='Pages' subtitle='Orders'/>
        <GridComponent 
          dataSource={customersData} 
          allowPaging
          allowSorting
          editSettings={editing}
          toolbar={toolbarOptions}
        > 
            <ColumnsDirective>
              {customersGrid.map((item,index) => (
                <ColumnDirective
                  key={index}
                  {...item}
                />
              ))}
            </ColumnsDirective>
            <Inject services={[Resize, Page, Sort, Filter ,Edit, Toolbar, Selection]}/>
        </GridComponent>
      </main>
    )
};
