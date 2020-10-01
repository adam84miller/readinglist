import React from 'react';
import ReadingList from './ReadingList'
// Grabs the environment variable for the API_URL from the process
const API_URL = process.period.env.REACT_APP_API_URL;

class CreateList extends React.Component {
    constructor(props) {
        super(props);
        const { readinglist } = props;
        this.state = {
            title: readinglist.title,
            author: readinglist.author,
            tradition: readinglist.tradition,
            publisher: readinglist.publisher,
            pages: readinglist.pages,
            isbn: readinglist.isbn
        }
    }
    /*addBook = () => {
        const newbook = this.state.book.map(x => x)
        book.push('');
        this.setState({book : newbook});
    }
    removeBook = (index) => {
        const newbook = this.state.book.map(x => x);
        newbook.splice(index, 1);
        this.setState({book : newbook});
    }
    handleBookChange = (value, index) => {
        const newbook = this.state.book.map((x) => x);
        newbook[index] = value;
        this.setState({book: newbook});
    }
    handleChange = ({ target }) => {
        console.log(target.value)
        let value = target.type === 'checkbox' ? target.checked : target.value;
        value = target.type === 'number' ? parseInt(value) : value;
        this.setState({ [target.name]: value });
    }*/
    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${API_URL}/readinglist/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        .then(this.props.refresh)
            .then(this.props.close)
    }
    /*render() {
        const displayBook = this.state.book.map((book, index) => {
            return (
                <div key={index}>
                    <select
                        value={this.state.book[index]}
                        onChange={({ target }) => 
                        this.handleBookChange(target.value, index)}
                    >
                        <option value='low'>Low</option>
                        <option value='medium'>Medium</option>
                        <option value='high'>High</option>
                        <option value='none'>Caffeine free</option>
                    </select>
                    <input className='del-btn'
                        type='button'
                        value='X'
                        onClick={() => this.removeBook(index)} />
                </div >
            )
        })
        return (
            <form id='create' onSubmit={this.handleSubmit}>
                <input name='title'
                    type='text'
                    placeholder='Title'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input name='author'
                    placeholder='Author'
                    value={this.state.type}
                    onChange={this.handleChange}
                />
                <input name='tradition'
                    placeholder='Tradition'
                    value={this.state.book}
                    onChange={this.handleChange}
                />
                <input name='publisher'
                    placeholder='Publisher'
                    value={this.state.book}
                    onChange={this.handleChange}
                />
                <input name='pages'
                    placeholder='Pages'
                    value={this.state.book}
                    onChange={this.handleChange}
                />
                <input name='isbn'
                    placeholder='isbn'
                    value={this.state.book}
                    onChange={this.handleChange}
                />
                <div>
                    <label htmlfor='date'>Usage date</label>
                    <input name='date'
                        type='date'
                        placeholder='Publisher'
                        value={this.state.publisher}
                        onChange={this.handleChange}
                    />
                </div>
                <input name='type' type='text'
                />
                { displayBook}
                <input type='button'
                    value='Book'
                    onClick={this.addBook}
                />
                <div>
                    <label htmlfor='rating'>Rating of tea</label>
                    <input name='rating' type='text'
                        placeholder='tea rating'
                        value={this.state.rating}
                        onChange={this.handleChange}
                    />
                </div>
                <button>Add Book</button>
            </form>
        )
    }
}
*/
export default CreateList;
