import './App.css';
import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';

function App() {

  const todoData = [
    {id: 1, label: 'Drink cofee', important: false},
    {id: 2, label: 'todo App', important: false},
    {id: 3, label: 'meditate', important: true},
  ]

  return (
    <div className="App">
      <AppHeader />
      <TodoList todos={ todoData }/>
      <SearchPanel />
    </div>
  );
}

export default App;
