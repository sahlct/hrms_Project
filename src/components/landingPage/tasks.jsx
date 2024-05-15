import React from 'react'
import './tasks.css'

export default function Tasks() {
  return (
    <div className='taskConatiner d-flex gap-4 ' style={{paddingRight:'20px'}}>
        <div className="MainTasks rounded-3 overflow-hidden p-2 " style={{boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            {/* <div className="Taskhead d-flex justify-content-around bg-danger text-white">
                <div className='w-25 p-2'>Date</div>
                <button className='btn'><i class="bi bi-plus-circle"></i>Add New</button>
                <div className='w-75 p-2 '>Tasks</div>
            </div> */}
            <div className="Taskbody">
                <table className='w-100'>
                    <thead>
                        <tr className='text-white' style={{backgroundColor:'#cf8f17'}}>
                            <th>Date</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>May 19</td>
                            <td>Complete Landing Page of Hrms</td>
                        </tr>
                        <tr>
                            <td>May 19</td>
                            <td>Creation of Hrms Databases</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="taskFooter d-flex justify-content-between ps-3 pe-3 pt-2">
                <button className='btn' style={{fontWeight:'500', color:'#cf8f17'}}>View all <i class="bi bi-arrow-right-square"></i></button>
                <button className='btn add-btn' style={{fontWeight:'500',backgroundColor:'#f1b249'}}> Add New <i class="bi bi-plus-circle"></i></button>
            </div>
        </div>
        <div className="MainGraphs rounded-3 overflow-hidden p-2 " style={{boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
        <div className="Taskbody">
                <table className='w-100'>
                    <thead>
                        <tr className='text-white' style={{backgroundColor:'#cf8f17'}}>
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
                <button className='btn btn-outline-secondary' style={{fontWeight:'500'}}>View all <i class="bi bi-arrow-right-square"></i></button>
                <button className='btn btn-secondary' style={{fontWeight:'500'}}> Add New <i class="bi bi-plus-circle"></i></button>
            </div>
        </div>
    </div>
  )
}
