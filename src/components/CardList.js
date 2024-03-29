import React from 'react';
import Card from './Card';
function CardList({ robots })
{
  // const CardComponent = robots.map((user,i)=>{
  //   return(<Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>);
  // })
  return(
    <div>
    {
      robots.map((user,i)=>{
        return(<Card key ={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>);
      })
    }
    </div>
  );
}
export default CardList;
