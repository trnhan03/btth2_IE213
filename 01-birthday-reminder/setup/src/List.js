import React from 'react';

const List = ({data}) => {
  return (
    <>
      {data.map(({id,name,age,image})=>{
        return(
          <div class='row'>
            <img src={image}/>
            <div class='info'>
              <div class='name'>{name}</div>
              <div class='age'>{age} years</div>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default List;
