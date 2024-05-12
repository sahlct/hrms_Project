import React from 'react'
import './tasks.css'

export default function Tasks() {
  return (
    <div className='taskConatiner d-flex gap-4 ' style={{paddingRight:'28px'}}>
        <div className="MainTasks w-50 h-100 rounded-3 overflow-hidden p-2 " style={{border:'1px solid crimson', height:'150px'}}>
            {/* <div className="Taskhead d-flex justify-content-around bg-danger text-white">
                <div className='w-25 p-2'>Date</div>
                <button className='btn'><i class="bi bi-plus-circle"></i>Add New</button>
                <div className='w-75 p-2 '>Tasks</div>
            </div> */}
            <div className="Taskbody">
                <table className='w-100'>
                    <thead>
                        <tr className='bg-primary text-white'>
                            <th>date</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>24 May </td>
                            <td>Complete Landing Page of Hrms Project</td>
                        </tr>
                        <tr>
                            <td>24 May </td>
                            <td>Complete creation of Hrms Databases</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="taskFooter d-flex justify-content-between p-2">
                <div>View all <i class="bi bi-arrow-right-square"></i></div>
                <div> Add New <i class="bi bi-plus-circle"></i></div>
            </div>
        </div>
        <div className="MainGraphs w-50 h-100 rounded-3 overflow-hidden p-2 " style={{border:'1px solid crimson'}}>
        <div className="Taskbody">
                <table className='w-100'>
                    <thead>
                        <tr className='bg-primary text-white'>
                            <th>date</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>24 May </td>
                            <td>Complete Landing Page of Hrms Project</td>
                        </tr>
                        <tr>
                            <td>24 May </td>
                            <td>Complete creation of Hrms Databases</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="taskFooter d-flex justify-content-between p-2">
                <div>View all <i class="bi bi-arrow-right-square"></i></div>
                <div>Add New <i class="bi bi-plus-circle"></i></div>
            </div>
        </div>
    </div>
  )
}
