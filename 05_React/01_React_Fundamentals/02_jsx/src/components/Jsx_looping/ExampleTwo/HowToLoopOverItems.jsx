import { people } from "./data";
import { getImageUrl } from "./utils";

const ExampleTwo = () => {
    const chemists = people.filter((each) => (
        each.profession === 'chemist'
    )).map((eachPerson) => {
        return <li key={eachPerson.id}>
            <img src={getImageUrl(eachPerson.imageId)} alt={eachPerson.name} />
            <p> <b>{eachPerson.name}</b>
                {' ' + eachPerson.profession + ''} known for {eachPerson.accomplishment}
            </p>
        </li>
    });
    return <ul> {chemists}</ul>;
}
export default ExampleTwo;