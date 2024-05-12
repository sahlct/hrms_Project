import React from 'react'

export default function Document() {
    let count = 4
  return (
    <div className='documentContainer w-100 rounded-3 p-3' style={{backgroundColor:'#f1f1ff'}}>
        <div>
            <h5 className=' mb-3 ms-3 '>Documents</h5>
            <p className='text-black d-flex gap-2 align-items-center pointer' style={{fontWeight:'500'}}>
                <i class="lni lni-files" style={{fontSize:'25px'}}></i> signed Documents 
                <span style={{fontWeight:'500',color:'grey'}}>{count + 10}</span>
            </p>
            <p className='text-black d-flex gap-2 align-items-center' style={{fontWeight:'500'}}>
                <i class="lni lni-files" style={{fontSize:'25px'}}></i> Tasklist Attachments 
                <span style={{fontWeight:'500',color:'grey'}}>{count}</span>
            </p>
            <p className='text-black d-flex gap-2 align-items-center' style={{fontWeight:'500'}}>
                <i class="lni lni-files" style={{fontSize:'25px'}}></i> Workflow Attachments 
                <span style={{fontWeight:'500',color:'grey'}}>{count + 3}</span>
            </p>
            <p className='text-black d-flex gap-2 align-items-center' style={{fontWeight:'500'}}>
                <i class="lni lni-files" style={{fontSize:'25px'}}></i> Non-disclosure Documents 
                <span style={{fontWeight:'500',color:'grey'}}>{count - 2}</span>
            </p>
            <button className='btn bg-black text-white w-100'><i class="lni lni-upload"></i> Upload Files</button>
        </div>
    </div>
  )
}
