const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'book1', isFav: true},
                {title: 'book2', isFav: false},
            ]
        }
    },
    methods: {
        changeFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
        }
    }
})

app.mount('#app')