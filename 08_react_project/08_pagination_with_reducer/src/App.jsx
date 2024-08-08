import React, { useEffect, useReducer } from 'react'
const Data = Array.from({ length: 300 }, (_, index) => `Item ${index + 1}`);
const ItemPerPage = 10;
const App = () => {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case 'SET_TOTAL_ITEM':
        return { ...state, totalItem: action.payload }
      case 'SET_CURRENT_PAGE':
        return { ...state, currentPage: action.payload }
      default:
        return state;
    }
  }

  const [pagination, dispatch] = useReducer(reducerFunction, {
    currentPage: 1,
    totalItem: 0
  });

  const startIndex = (pagination.currentPage - 1) * ItemPerPage;
  const endIndex = startIndex + ItemPerPage;

  useEffect(() => {
    dispatch({ type: 'SET_TOTAL_ITEM', payload: Data.length })
  }, [Data])

  const DisplayItem = Data.slice(startIndex, endIndex);

  const handlePageClick = (num) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: num })
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="row justify-content-center">
          <div className="col-md-12 my-2">
            <h1 className="h1 text-bold text-center text-primary text-decoration-underline fw-bold">Pagination With useReducer</h1>
          </div>
        </div>
        <div className="row justify-content-center item-center">
          <div className="col-md-6">
            <ul>
              {
                DisplayItem.map((item, index) => (<li className='text-white' key={index}>{item}</li>))
              }
            </ul>
            <div>
              <button disabled={pagination.currentPage === 1} className='btn btn-primary mx-2' onClick={() => handlePageClick(pagination.currentPage - 1)}>Previous </button>
              <button disabled={endIndex === Data.length} className='btn btn-info' onClick={() => handlePageClick(pagination.currentPage + 1)}>Next </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;