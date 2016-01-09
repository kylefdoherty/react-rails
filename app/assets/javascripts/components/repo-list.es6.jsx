class RepoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    repos = this.props.repos.map(repo => {
      return (
        <li key={ repo.id }>
          <p>Name: { repo.name }</p>
          <p>Description: { repo.description }</p>
        </li>
      )
    });

    return (
      <ul>
        { repos }
      </ul>
    );
  }
}

RepoList.propTypes = {
  repos: React.PropTypes.array
};
