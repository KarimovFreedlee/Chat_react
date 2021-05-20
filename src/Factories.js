const uuidv4 = require('uuid/v4')

const createUser = ({name = "", socketId = null } = {})=>(
	{
		id:uuidv4(),
		name,
		socketId
		
	}
)

const createMessage = ({message = "", sender = "", time = ""} = { })=>(
		{
			
			id:uuidv4(),
			time:(new Date().toLocaleTimeString()),
			message,
			sender	
		}
	)

const createChat = ({messages = [], name = "Community", users = [], Community = false} = {})=>(
	{
		id:uuidv4(),
		name: Community ? "Community": createChatName(users),
		messages,
		users,
		typingUsers:[],
		Community
	}
)

const createChatName = (users, excludedUser="")=>{
	return users.filter(u => u!== excludedUser).join(', ')||"Empty"
}

module.exports = {
	createMessage,
	createChat,
	createUser,
	createChatName
}

