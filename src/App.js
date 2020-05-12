import React from 'react';
import './index.css';
import {SearchBox} from './components/searchBox/search.components';
import {CardList} from './components/card-list/card-list.components';

class App extends React.Component{
    constructor(){
        super ();
        this.state = {
            result: [],
            searchField:''
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=100"
).then(
            response => response.json()
        ).then(results=> this.setState({result:results.results}));
    }
    handleSearch = (e) => {
        this.setState(
            { searchField: e.target.value }
        )
    }
    render(){
        const { result, searchField } = this.state
        const filterSearched = result.filter(names => (names.name.first+names.name.last).toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div>
                <h1>“모든 사람은 컴퓨터가 이해할 수있는 코드를 작성할 수 있습니다.</h1>
                {
                <SearchBox placeholder='search Names' handleSearch={this.handleSearch}/>
    }{<CardList data={filterSearched}/>}
            </div>
        )
    }
}

export default App;
