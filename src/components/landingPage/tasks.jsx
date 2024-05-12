import React from 'react'

export default function Tasks() {
  return (
    <div className='taskConatiner w-100 d-flex h-50 gap-4'>
        <div className="MainTasks w-50 h-100" style={{border:'1px solid crimson'}}>
            <div className="Taskhead d-flex justify-content-between">
                <div>Tasks</div>
                <button className='btn'><i class="bi bi-plus-circle"></i>Add New</button>
            </div>
            <div className="Taskbody">
                <table>
                    <thead>
                        <tr>
                            <th>date</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>24 May 2024</td>
                            <td>Complete Landing Page of Hrms Project</td>
                        </tr>
                        <tr>
                            <td>24 May 2024</td>
                            <td>Complete creation of Hrms Databases</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="taskFooter">View all <i class="bi bi-arrow-right-square-fill"></i></div>
        </div>
        <div className="MainGraphs w-50 h-100" style={{border:'1px solid crimson'}}>
            graph below avarage
        </div>
    </div>
  )
}
