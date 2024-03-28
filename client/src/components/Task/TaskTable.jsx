import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import './TaskTable.scss'


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'taskTitle', headerName: 'Task Title', width: 130 },
  { field: 'taskStage', headerName: 'Task Stage', width: 130 },
  {
    field: 'taskDate',
    headerName: 'Task date',
    type: 'number',
    width: 130,
  },
  {
    field: 'taskPriority',
    headerName: 'Priority',
    width: 130,
  },
];

const rows = [
  { id: 1, taskStage: 'Snow', taskTitle: 'Jon', taskDate: 35, taskPriority: 'High' },
  { id: 2, taskStage: 'Lannister', taskTitle: 'Cersei', taskDate: 42 },
  { id: 3, taskStage: 'Lannister', taskTitle: 'Jaime', taskDate: 45 },
  { id: 4, taskStage: 'Stark', taskTitle: 'Arya', taskDate: 16 },
  { id: 5, taskStage: 'Targaryen', taskTitle: 'Daenerys', taskDate: null },
  { id: 6, taskStage: 'Melisandre', taskTitle: null, taskDate: 150 },
  { id: 7, taskStage: 'Clifford', taskTitle: 'Ferrara', taskDate: 44 },
  { id: 8, taskStage: 'Frances', taskTitle: 'Rossini', taskDate: 36 },
  { id: 9, taskStage: 'Roxie', taskTitle: 'Harvey', taskDate: 65 },
];


const TaskTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <div className='but-container'>

        <Button className='button' variant="outlined">Create task</Button>
      </div>
      <DataGrid

        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>

  )
}

export default TaskTable