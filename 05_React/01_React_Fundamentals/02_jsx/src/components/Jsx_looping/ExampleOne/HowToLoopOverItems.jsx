const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];
const HowToLoopOverItems = () => {
    const ListItem = people.map((each) =>
        (<li>{each}</li>)
    );
    return <ul> {ListItem}</ul>;
}
export default HowToLoopOverItems;