let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eius enim eos eum expedita fugit quia quod saepe sit totam! Accusantium commodi cupiditate debitis, ipsam iusto odio quas quisquam rem?',
                    likesCount: 12
                },
                {id: 2, message: 'Hello, world!', likesCount: 5}
            ],
            newPostText: 'new post text',
            friends: [{id: 1, name: 'Aleksey', avatarUrl: '1.jpeg'},
                {id: 2, name: 'Marija', avatarUrl: '2.jpeg'},
                {id: 3, name: 'Geralt', avatarUrl: '3.jpeg'},
                {id: 4, name: 'Dima', avatarUrl: '4.jpeg'},
                {id: 5, name: 'Yulia', avatarUrl: '5.jpeg'},
                {id: 6, name: 'Vika', avatarUrl: '6.jpeg'},
                {id: 7, name: 'Kate', avatarUrl: '7.jpeg'}],
        },
        messagesPage: {
            newMessageText: 'Type your message here',
            users: [{id: 1, name: 'Aleksey', avatarUrl: '1.jpeg'},
                {id: 2, name: 'Marija', avatarUrl: '2.jpeg'},
                {id: 3, name: 'Geralt', avatarUrl: '3.jpeg'},
                {id: 4, name: 'Dima', avatarUrl: '4.jpeg'},
                {id: 5, name: 'Yulia', avatarUrl: '5.jpeg'},
                {id: 6, name: 'Vika', avatarUrl: '6.jpeg'},
                {id: 7, name: 'Kate', avatarUrl: '7.jpeg'}],
            messages: [{id: 1, text: 'Hello', type: 'self'},
                {
                    id: 2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda deleniti doloremque enim id ipsam iste laboriosam provident, quaerat suscipit tempore veritatis? A accusantium dolores expedita perspiciatis saepe sapiente voluptatem!',
                    type: 'from'
                },
                {id: 3, text: 'GHow are you?', type: 'from'}

            ]

        }
    },
    _subscriber() {
        console.log('no observers here')
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    getState() {
        debugger;
        return this._state;
    },





    dispatch(action) { // {type : 'ADD-POST', etc.} required
        if(action.type==='ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 10
            };
            if (newPost.message) {
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''

            } else {
                alert('Вы ничего не написали')
            }
            this._subscriber(this._state)
        }
        else if (action.type==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._subscriber(this._state)
        }
        else if ( action.type ==='SEND-MESSAGE'){
            let newMessage = {
                id: 5,
                text: this._state.messagesPage.newMessageText,
                type: 'self'
            };

            if (newMessage.text) {
                this._state.messagesPage.messages.push(newMessage);
            } else {
                alert('Сообщение пустое!')
            }
            this._state.messagesPage.newMessageText = '';
            this._subscriber(this._state)
        }
        else if ( action.type === 'UPDATE-NEW-TEXT-MESSAGE'){

            this._state.messagesPage.newMessageText = action.newMessageText
            this._subscriber(this._state)
        }
    }

};


export default store;
window.store = store;
