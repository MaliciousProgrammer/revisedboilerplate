function isTouching(mr,fr)
{
  if (mr.y-fr.y < mr.height/2 + fr.height/2 && 
    fr.y - mr.y < mr.height/2 + fr.height/2 && 
    mr.x-fr.x < mr.width/2 + fr.width/2 && 
    fr.x - mr.x < fr.width/2 + mr.width/2) 
    
    {
      return true  
    }

    else{
     return false
    }
}


