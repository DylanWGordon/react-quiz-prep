import UserItem from './UserItem.jsx'


function Users({ users }) {
    {console.log(users)}
    return users.map((user) => (
        <div>
            <UserItem user={user} />
        </div>
    ))
}

export default Users