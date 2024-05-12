import React from 'react'
import './tasks.css'

export default function Tasks() {
  return (
    <div className='taskConatiner d-flex gap-4 ' style={{paddingRight:'28px'}}>
        <div className="MainTasks w-50 h-100 rounded-3 overflow-hidden p-2 " style={{border:'2px solid grey', height:'150px', color:'black'}}>
            {/* <div className="Taskhead d-flex justify-content-around bg-danger text-white">
                <div className='w-25 p-2'>Date</div>
                <button className='btn'><i class="bi bi-plus-circle"></i>Add New</button>
                <div className='w-75 p-2 '>Tasks</div>
            </div> */}
            <div className="Taskbody">
                <table className='w-100'>
                    <thead>
                        <tr className='text-white' style={{backgroundColor:'#005d00'}}>
                            <th>Date</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>May 24</td>
                            <td>Complete Landing Page of Hrms</td>
                        </tr>
                        <tr>
                            <td>May 24</td>
                            <td>Creation of Hrms Databases</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="taskFooter d-flex justify-content-between ps-3 pe-3 pt-2">
                <button className='btn text-dark' style={{fontWeight:'600'}}>View all <i class="bi bi-arrow-right-square"></i></button>
                <button className='btn btn-success'> Add New <i class="bi bi-plus-circle"></i></button>
            </div>
        </div>
        <div className="MainGraphs w-50 h-100 rounded-3 overflow-hidden p-2 " style={{border:'2px solid grey'}}>
        <div className="Taskbody">
                <table className='w-100'>
                    <thead>
                        <tr className='text-white' style={{backgroundColor:'#005d00'}}>
                            <th>Date</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>May 24</td>
                            <td>Complete Landing Page of Hrms</td>
                        </tr>
                        <tr>
                            <td>May 24</td>
                            <td>Creation of Hrms Databases</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="taskFooter d-flex justify-content-between ps-3 pe-3 pt-2">
                <button className='btn'>View all <i class="bi bi-arrow-right-square"></i></button>
                <button className='btn btn-success'> Add New <i class="bi bi-plus-circle"></i></button>
            </div>
        </div>
    </div>
  )
}
