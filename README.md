<h1>Documentação e rotas</h1>

Create user: POST http://localhost:3001/users/

request exemaple: 
{
	"name": "zuzu",
	"email": "zuzu@kenzie.com.br",
	"password": "1234",
	"username": "zuzu96",
	"tel": ["15112351"]/ ["24242424", "24242525"]
}

Success Status: 201 CREATED
expected response: {
	"id": 9,
	"username": "zuzu96",
	"email": "zuzu@kenzie.com.br",
	"name": "zuzu",
	"tel": [
		"15112351"
	],
	"joined_in": "2023-08-02"
}

List users: GET http://localhost:3001/users/

Success Status: 200 OK
[
	{
		"id": 1,
		"username": "blue",
		"email": "blue@kenzie.com.br",
		"name": "blue",
		"tel": [
			"1515165465123251"
		],
		"joined_in": "2023-08-02"
	},
	{
		"id": 9,
		"username": "julith",
		"email": "zuzu@kenzie.com.br",
		"name": "zuzu",
		"tel": [
			"15112351"
		],
		"joined_in": "2023-08-02"
	},
	{
		"id": 4,
		"username": "zuzuba",
		"email": "zuzuba@kenzie.com.br",
		"name": "zuzu",
		"tel": [
			"151145322351",
			"242425215"
		],
		"joined_in": "2023-08-02"
	}
]

list User by Id: GET http://localhost:3001/users/Userid

retorna os contatos

Success Status: 200 OK
{
	"id": 1,
	"username": "blue",
	"email": "blue@kenzie.com.br",
	"name": "blue",
	"tel": [
		"1515165465123251"
	],
	"joined_in": "2023-08-02",
	"contacts": [
		{
			"id": 9,
			"username": "julith",
			"email": "zuzu@kenzie.com.br",
			"name": "zuzu",
			"tel": [
				"15112351"
			]
		}
	]
}

Login: POST http://localhost:3001/login/

expected body : {
    "username": "" ,
    "password": ""   
}

Success Status: 200 OK
response example : {
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTEzNTIxOTgsImV4cCI6MTY5MTQzODU5OCwic3ViIjoiMSJ9.4JSj3SL8C7bVctHAx8B_yaMIBUpxDqyqDo3nHTtp7pE"
}

Register contact: POST http://localhost:3001/users/ContactId

Success Status: 201 CREATED
expected response: 
    {
	"id": 1,
	"username": "blue",
	"email": "blue@kenzie.com.br",
	"name": "blue",
	"tel": [
		"1515165465123251"
	],
	"joined_in": "2023-08-02",
	"contacts": [
        {
            "id": 4,
			"username": "julith",
			"email": "julith@kenzie.com.br",
			"name": "julith",
			"tel": [
				"15151654665451"
			]
        }
    ]
}

Update user: PATCH http://localhost:3001/users/userId

expected body: {
	"name": "newName",
	"email": "mail@mail.com.br",
	"username": "newUsername",
	"tel": [
		"151145322351",
		"242425215"
	]
}

SucessStatus: 200 OK
response example: {
	"id": 1,
	"username": "NewUsername",
	"email": "mail@mail.com.br",
	"name": "newName",
	"tel": [
		"151145322351",
		"242425215"
	],
	"joined_in": "2023-08-02"
}

Remove contact: PATCH http://localhost:3001/users/contact/contactId

sucessStatus: 200 OK
response example: "contact removed"