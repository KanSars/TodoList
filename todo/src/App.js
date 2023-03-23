import './App.css';
import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <TodoList />
      <SearchPanel />
    </div>
  );
}

export default App;
