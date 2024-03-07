import { people } from "../../ExampleTwo/data";
import { getImageUrl } from "../../ExampleTwo/utils";

const ChallengOne = () => {
    const chemistList = people.filter((people) => ( people.profession === 'chemist')).map((eachPerson) => (
        <li key={eachPerson.id}>
            <img src={getImageUrl(eachPerson.imageId)} alt={eachPerson.name} />
            <p> <b>{eachPerson.name}</b> {' ' + eachPerson.profession + ''} known for {eachPerson.accomplishment}</p>
        </li>
    ));
    const EveryOne = people.filter((people) => ( people.profession !== 'chemist')).map((eachPerson) => (
        <li key={eachPerson.id}>
            <img src={getImageUrl(eachPerson.imageId)} alt={eachPerson.name} />
            <p> <b>{eachPerson.name}</b> {' ' + eachPerson.profession + ''} known for {eachPerson.accomplishment}</p>
        </li>
    ));
    return (
        <article>
            <h1>Scientists</h1>
            <ul>{chemistList}</ul>
            <h1>Everyone Else</h1>
            <ul>{EveryOne}</ul>
        </article>
    );
}
export default ChallengOne;