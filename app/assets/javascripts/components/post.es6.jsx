class Post extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Content: {this.props.content}</div>
      </div>
    );
  }
}

Post.propTypes = {
  name: React.PropTypes.string,
  content: React.PropTypes.node
};
