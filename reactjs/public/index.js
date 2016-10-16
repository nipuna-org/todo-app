var AppHeader = React.createClass({
  render: function() {
    return (
      <div>App Header</div>
    );
  }
});

var AddTask = React.createClass({
  render: function() {
    return (
      <div>This is Add Task</div>
    );
  }
});

var TaskList = React.createClass({
  render: function() {
    return (
      <div>This is Task List</div>
    );
  }
});

var TaskComponent = React.createClass({
  render: function() {
    return (
      <div>
      <AppHeader />
      <AddTask />
      <TaskList />
      </div>
    );
  }
});


ReactDOM.render(
  <TaskComponent url="/api/tasks" />,
  document.getElementById('app')
);
