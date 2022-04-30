import React from "react";

import AppHeader from "../app-header/app-header";
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import AddItem from "../add-item";

import "./app.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Drink Coffee", done: false, important: false, id: 1 },
        { label: "Make Awesome App", done: false, important: false, id: 2 },
        { label: "Have a lunch", done: false, important: false, id: 3 },
      ],
      filter: "all",
      search: "",
    };
  }
  changeItemProp = (arr, id, prop) => {
    let searchIndex = arr.findIndex((elem) => elem.id === id);
    let oldValue = arr[searchIndex][prop];
    let newItem = { ...arr[searchIndex], [prop]: !oldValue };
    return [
      ...arr.slice(0, searchIndex),
      newItem,
      ...arr.slice(searchIndex + 1),
    ];
  };
  onDelete = (id) => {
    this.setState(({ data }) => {
      let deletedIndex = data.findIndex((elem) => elem.id === id);
      return {
        data: [...data.slice(0, deletedIndex), ...data.slice(deletedIndex + 1)],
      };
    });
  };
  onAddItemList = (label) => {
    this.setState(({ data }) => {
      let lastID = data[data.length - 1].id;
      return {
        data: [...data, { label, important: false, id: ++lastID }],
      };
    });
  };
  onLableClick = (id) => {
    this.setState(({ data }) => {
      return { data: this.changeItemProp(data, id, "done") };
    });
  };
  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      return { data: this.changeItemProp(data, id, "important") };
    });
  };
  filterItems = (arr, filter) => {
    if (filter === "done") {
      return arr.filter((elem) => {
        return elem.done;
      });
    } else if (filter === "active") {
      return arr.filter((elem) => {
        return !elem.done;
      });
    }
    return arr;
  };
  searchItems = (arr, search) => {
    if (search === "") {
      return arr;
    }
    return arr.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };
  onChangeSearch = (txt) => {
    this.setState({ search: txt });
  };
  onChangeFilter = (txt) => {
    this.setState({ filter: txt });
  };
  render() {
    let { data, search, filter } = this.state;
    let doneCount = data.filter((item) => {
      return item.done === true;
    }).length;
    let todoCount = data.filter((item) => {
      return item.done === false;
    }).length;
    let filtered = this.filterItems(data, filter.toLowerCase());
    let visibleItems = this.searchItems(filtered, search);
    return (
      <div className="todo-app">
        <AppHeader todo={todoCount} done={doneCount} />
        <div className="d-flex top-panel">
          <SearchPanel onChangeSearch={this.onChangeSearch} />
          <ItemStatusFilter
            onChangeFilter={this.onChangeFilter}
            filter={filter}
          />
        </div>
        <AddItem onAddItemList={this.onAddItemList} />
        <TodoList
          todos={visibleItems}
          onDelete={this.onDelete}
          onToggleImportant={this.onToggleImportant}
          onLableClick={this.onLableClick}
          onAddItemList={this.onAddItemList}
        />
      </div>
    );
  }
}

export default App;
