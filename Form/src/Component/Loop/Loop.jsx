import React, { Component } from 'react'

export default class Loop extends Component {
    state={
        data:[{id:1,name:"Aswan",age:21},
        {id:2,name:"Achu",age:21},
        {id:3,name:"Ashvy",age:21}]
    }




  render() {
    return (
      <div>
        <ul>
            {
                this.state.data.map((dt)=>
                {
                    return(
                        <div key={dt.id}>
                        <li >{dt.id}-{dt.name}-{dt.age}</li>
                        </div>

                    )
                    
                 



                }

                    
                )
            }
        </ul>
        
      </div>
    )
  }
}
