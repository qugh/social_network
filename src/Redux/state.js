const state = {
    profilePage: {
        posts: [
            {
                id: 1,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eius enim eos eum expedita fugit quia quod saepe sit totam! Accusantium commodi cupiditate debitis, ipsam iusto odio quas quisquam rem?',
                likesCount: 12
            },
            {id: 2, message: 'Hello, world!', likesCount: 5}
        ],
        friends: [{id: 1, name: 'Aleksey', avatarUrl:'1.jpeg'},
            {id: 2, name: 'Marija', avatarUrl:'2.jpeg'},
            {id: 3, name: 'Geralt', avatarUrl:'3.jpeg'},
            {id: 4, name: 'Dima', avatarUrl:'4.jpeg'},
            {id: 5, name: 'Yulia', avatarUrl:'5.jpeg'},
            {id: 6, name: 'Vika', avatarUrl:'6.jpeg'},
            {id: 7, name: 'Kate', avatarUrl:'7.jpeg'}],
    },
    messagesPage: {
        users: [{id: 1, name: 'Aleksey', avatarUrl:'1.jpeg'},
            {id: 2, name: 'Marija', avatarUrl:'2.jpeg'},
            {id: 3, name: 'Geralt', avatarUrl:'3.jpeg'},
            {id: 4, name: 'Dima', avatarUrl:'4.jpeg'},
            {id: 5, name: 'Yulia', avatarUrl:'5.jpeg'},
            {id: 6, name: 'Vika', avatarUrl:'6.jpeg'},
            {id: 7, name: 'Kate', avatarUrl:'7.jpeg'}],
        messages: [{id: 1, text: 'Hello', type:'self'},
            {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda deleniti doloremque enim id ipsam iste laboriosam provident, quaerat suscipit tempore veritatis? A accusantium dolores expedita perspiciatis saepe sapiente voluptatem!', type: 'from'},
            {id: 3, text: 'GHow are you?', type: 'from'},
            {id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda deleniti doloremque enim id ipsam iste laboriosam provident, quaerat suscipit tempore veritatis? A accusantium dolores expedita perspiciatis saepe sapiente voluptatem!', type: 'self'},
            {id: 5, text: 'How are you?e3', type:'self'}
        ]
    }

}

export default state;
