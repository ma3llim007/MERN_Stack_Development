import React from 'react'

const PractiseOne = () => {

  const onClickHanlder = (e) => {
    console.log("onClickHanlder");
  }

  return (
    <div className="container">
      <div className='row mt-5'>
        {/* onClick */}
        <div className='col-md-3'>
          <h3 className='h3 text-white'>onClick</h3>
          <button onClick={onClickHanlder} className='btn btn-primary'>OnClick</button>
        </div>

      </div>
    </div>
  )
}

export default PractiseOne;