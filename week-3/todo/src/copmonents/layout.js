import React, { Children } from 'react'

const layout = ({ Children }) => {
    return (
        <div className='container p-3 p-sm-1'>
            <div className='row'>
                <div className='.row>.col-xl-6.col-lg-7 col-md-10'>
                    <div className='card'>
                        <div className='card-body'>{Children}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ayout