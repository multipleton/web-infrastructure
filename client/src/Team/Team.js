import './Team.css';

function Team() {
  const team = [
    {
      name: 'Yehor Bublyk',
      github: 'https://github.com/yehorbk',
    },
    {
      name: 'Artem Bokii',
      github: 'https://github.com/lightballer',
    },
    {
      name: 'Dmytro Rekechynsky',
      github: 'https://github.com/rocket111185',
    },
  ].map(member => {
    const { github } = member;
    member.username = github.substring(github.lastIndexOf('/') + 1);
    return member;
  });
  return (
    <div className="team-section">
      <ul>
        {team.map(({ name, github, username }) => <li key={name}>{name} | <a href={github}>{username}</a></li>)}
      </ul>
    </div>
  );
}

export default Team;
