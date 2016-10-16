var AppHeader = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>TODO V1.0</h1>
        </div>
        <div className="col-md-6" style={{ "marginTop": "22px" }}>
          <button className="btn btn-primary pull-right" type="button" style={{ "display": "none" }}>Login</button>
          <button className="btn btn-secondary pull-right" type="button">Logout</button>
        </div>
      </div>
    );
  }
});

var AddTask = React.createClass({
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Add New Task</div>
        <div className="panel-body">
          <form data-bind="submit: addNewItem">
            <div className="form-group">
              <input id="txt-addItem" type="text" />
            </div>
            <div className="form-group btn-group">
              <button className="btn btn-success" type="submit">Submit</button>
              <button className="btn btn-warning" type="button">Clear</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

var TaskList = React.createClass({
  render: function () {
    var taskNodes = this.props.data.map(function (task) {
      return (
        <li className="list-group-item">{task.description}</li>
      );
    });

    return (
      <div className="panel panel-default">
        <div className="panel-heading">Tasks List</div>
        <div className="panel-body">
          <div style={{ "display": "none" }}>No Items</div>
          <ul className="list-group">
            {taskNodes}
          </ul>
        </div>
      </div>
    );
  }
});

var TaskComponent = React.createClass({
  loadTasksFromServer: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function () {
    return { data: [] };
  },
  componentDidMount: function () {
    this.loadTasksFromServer();
  },
  render: function () {
    return (
      <div>
        <AppHeader />
        <AddTask />
        <TaskList data={this.state.data} />
      </div>
    );
  }
});

ReactDOM.render(
  <TaskComponent url="/api/tasks" />,
  document.getElementById('app')
);
