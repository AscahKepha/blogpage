import UserList from './List'

function parentlist(){
    const userData =[
        {id:1, name: "Ascah"},
        {id:2, name:"John"},
        {id:3, name:"Purity",}
    ]
    return(
        <div>
            <h2>user list display</h2>
            <UserList users={userData}/>
        </div>
    );
}