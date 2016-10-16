var AddTask = React.createClass({
  render: function() {
    return (
      <div>This is Add Task Div</div>
    );
  }
});


ReactDOM.render(
  <AddTask url="/api/tasks" />,
  document.getElementById('content')
);
