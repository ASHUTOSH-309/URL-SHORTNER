const sessionIdToUserMap=new Map();


function setUser(id,user){
    sessionIdToUserMap.set(id,user)
}


function getUser(id){
    return sessionIdToUserMap.get(id)
}

module.exports={
    setUser,
    getUser
}

//Map values does not persist after server restarts
//TO store data persistently we require databases.
